import React, { useState } from "react";
import { FiHelpCircle } from "react-icons/fi";

const getYouTubeEmbedUrl = (url) => {
  if (!url) return "";
  try {
    const parsed = new URL(url);
    if (parsed.hostname === "youtu.be") {
      return `https://www.youtube.com/embed/${parsed.pathname.replace("/", "")}`;
    }
    if (parsed.hostname.includes("youtube.com")) {
      const videoId = parsed.searchParams.get("v");
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }
      if (parsed.pathname.startsWith("/embed/")) {
        return `https://www.youtube.com${parsed.pathname}`;
      }
    }
  } catch (error) {
    return url;
  }
  return url;
};

const ProjectCard = ({ project }) => {
  const {
    id,
    title,
    shortDesc,
    fullDesc,
    tech,
    repoUrl,
    image,
    liveUrl,
    videoUrl
  } = project;
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const videoEmbedUrl = getYouTubeEmbedUrl(videoUrl);

  return (
    <article
      key={id}
      className="border-2 border-gray-700 bdr transition-colors rounded-md overflow-hidden relative"
    >
      {!showFullDesc ? (
        <>
          <img
            src={image}
            alt={`${title} thumbnail`}
            className="w-full object-cover border border-2 border-gray-500"
            loading="lazy"
          />
          <p className="p-2 border border-2 border-gray-500 text-xs sm:text-sm text-gray-400 font-semibold mb-2">
            {tech.join(" ")}
          </p>
          <div className="p-4 pb-14">
            <h3
              id={`proj-${id}-title`}
              className="text-lg sm:text-xl font-bold text-white mb-2"
            >
              {title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">{shortDesc}</p>
          </div>
          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              {repoUrl && (
                <a
                  href={repoUrl}
                  target="_blank"
                  className="inline-block w-24 text-center text-sm px-3 py-2 border border-purple hover:text-white transition-colors"
                >
                  Repo {">>"}
                </a>
              )}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  className="inline-block w-24 text-center text-sm px-3 py-2 border border-purple hover:text-white transition-colors"
                >
                  Live {">>"}
                </a>
              )}
              {videoUrl && (
                <button
                  type="button"
                  onClick={() => setShowVideo(true)}
                  className="inline-block w-24 text-center text-sm px-3 py-2 border border-purple hover:text-white transition-colors"
                >
                  Video
                </button>
              )}
            </div>
            <button
              className="bg-purple-700 text-white rounded-full p-2 shadow-md hover:bg-purple-900 transition-colors"
              onClick={() => setShowFullDesc(true)}
              aria-label="Show more"
            >
              <FiHelpCircle />
            </button>
          </div>
        </>
      ) : (
        <div className="p-6 flex flex-col items-center justify-center min-h-[200px]">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-4">{title}</h3>
          <p className="text-gray-300 text-base leading-relaxed mb-4">{fullDesc}</p>
          <button
            className="mt-4 bg-gray-700 text-white rounded-full px-4 py-2 shadow-md hover:bg-gray-900 transition-colors"
            onClick={() => setShowFullDesc(false)}
            aria-label="Show less"
          >
            Back
          </button>
        </div>
      )}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <button
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={() => setShowVideo(false)}
            aria-label="Close video"
          />
          <div
            className="relative w-[92%] max-w-4xl aspect-video rounded-xl border border-gray-700 bg-[#1f232a] shadow-2xl"
            role="dialog"
            aria-modal="true"
          >
            <iframe
              title={`${title} project video`}
              src={videoEmbedUrl}
              className="w-full h-full rounded-xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-4 -right-4 text-gray-300 hover:text-white bg-gray-800/90 rounded-full w-10 h-10 flex items-center justify-center"
              aria-label="Close video"
            >
              x
            </button>
          </div>
        </div>
      )}
    </article>
  );
};

export default ProjectCard;

