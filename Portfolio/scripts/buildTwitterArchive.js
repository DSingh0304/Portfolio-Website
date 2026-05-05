import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const [inputArg, outputArg] = process.argv.slice(2);

if (!inputArg) {
  console.error(
    "Usage: node scripts/buildTwitterArchive.js <path-to-tweets.js> [output-file]"
  );
  process.exit(1);
}

const inputPath = path.resolve(inputArg);
const outputPath = outputArg
  ? path.resolve(outputArg)
  : path.resolve("src/data/twitterArchiveData.js");

const raw = fs.readFileSync(inputPath, "utf8");
const jsonText = raw
  .replace(/^\s*window\.YTD\.tweets\.part0\s*=\s*/, "")
  .replace(/;\s*$/, "");

let data;
try {
  data = JSON.parse(jsonText);
} catch (error) {
  console.error("Failed to parse tweets.js. Ensure this is the Twitter archive file.");
  throw error;
}

const pad2 = (value) => String(value).padStart(2, "0");

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = pad2(date.getMonth() + 1);
  const day = pad2(date.getDate());
  return `${year}-${month}-${day}`;
};

const formatTime = (date) =>
  date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

const decodeHtmlEntities = (text) =>
  text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'");

const expandUrls = (text, urls) => {
  if (!urls || urls.length === 0) {
    return text;
  }

  return urls.reduce((value, url) => {
    if (!url?.url || !url?.expanded_url) {
      return value;
    }
    return value.replace(url.url, url.expanded_url);
  }, text);
};

const stripMediaUrls = (text, media) => {
  if (!media || media.length === 0) {
    return text;
  }

  const cleaned = media.reduce((value, item) => {
    if (!item?.url) {
      return value;
    }
    return value.replace(item.url, "");
  }, text);

  return cleaned.replace(/\s+\n/g, "\n").replace(/[ \t]{2,}/g, " ").trim();
};

const getMediaUrls = (tweet) => {
  const media = tweet.extended_entities?.media || tweet.entities?.media || [];
  const urls = media
    .map((item) => item?.media_url_https || item?.media_url)
    .filter(Boolean)
    .map((url) => url.replace(/^http:\/\//, "https://"));

  return Array.from(new Set(urls));
};

const isReplyLike = (text) => text.trim().startsWith("@");

const buildTitle = (text) => {
  const cleaned = text
    .replace(/https?:\/\/\S+/g, "")
    .replace(/\s+/g, " ")
    .trim();
  const withoutRt = cleaned.replace(/^RT\s+@[^:]+:\s*/i, "");
  const firstLine = withoutRt.split("\n").find((line) => line.trim()) || withoutRt;
  const base = firstLine.trim();

  if (!base) {
    return "Twitter Update";
  }

  if (base.length > 80) {
    return `${base.slice(0, 77)}...`;
  }

  return base;
};

const tweets = data
  .map((entry) => entry.tweet)
  .filter(Boolean)
  .map((tweet) => {
    const createdAt = new Date(tweet.created_at);
    const withExpandedUrls = expandUrls(tweet.full_text || "", tweet.entities?.urls);
    const withoutMediaUrls = stripMediaUrls(withExpandedUrls, tweet.entities?.media);
    const content = decodeHtmlEntities(withoutMediaUrls);
    if (isReplyLike(content)) {
      return null;
    }
    const images = getMediaUrls(tweet);

    return {
      id: tweet.id_str || String(tweet.id),
      date: formatDate(createdAt),
      time: formatTime(createdAt),
      title: buildTitle(content),
      content,
      images,
      tags: (tweet.entities?.hashtags || [])
        .map((tag) => tag.text)
        .filter(Boolean),
      type: "tweet",
      createdAt: createdAt.toISOString(),
    };
  })
  .filter(Boolean)
  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

const output = `export const twitterArchive = ${JSON.stringify(tweets, null, 2)};\n`;

const asciiOutput = output.replace(/[^\x00-\x7F]/gu, (char) => {
  const codePoint = char.codePointAt(0);
  if (!codePoint) {
    return "";
  }
  if (codePoint <= 0xffff) {
    return `\\u${codePoint.toString(16).padStart(4, "0")}`;
  }
  return `\\u{${codePoint.toString(16)}}`;
});

fs.writeFileSync(outputPath, asciiOutput, "utf8");
console.log(`Wrote ${tweets.length} tweets to ${outputPath}`);
