import { useMemo, useState } from "react";
import OpenSourceCard from "./OpenSourceCard";
import { 
  apacheApisixProjects, 
  rocketChatProjects, 
  zulipProjects, 
  keployProjects, 
  allOpenSourceProjects 
} from "../../data/opensourceData";
import Section from "../common/Section";

const getSearchTokens = (query) =>
  query.trim().toLowerCase().split(/\s+/).filter(Boolean);

const matchesOpenSourceTokens = (project, tokens) => {
  if (tokens.length === 0) {
    return true;
  }
  const haystack = [
    project.title,
    project.shortDesc,
    project.fullDesc,
    project.organization,
    project.prNumber,
    (project.tech || []).join(" "),
    (project.tags || []).join(" "),
  ]
    .join(" ")
    .toLowerCase();

  return tokens.every((token) => haystack.includes(token));
};

const orderByTokens = (list, tokens, enabled) => {
  if (!enabled || tokens.length === 0) {
    return list;
  }
  const matched = [];
  const rest = [];
  list.forEach((project) => {
    if (matchesOpenSourceTokens(project, tokens)) {
      matched.push(project);
    } else {
      rest.push(project);
    }
  });
  return [...matched, ...rest];
};

const OpenSourceSection = ({
  limit,
  showFeaturedOnly = false,
  title = "opensource",
  items = allOpenSourceProjects,
  variant = "opensource",
}) => {
  const [query, setQuery] = useState("");
  const [orgFilter, setOrgFilter] = useState("all");
  const queryTokens = useMemo(() => getSearchTokens(query), [query]);

  const orgOptions = useMemo(() => {
    const orgSet = new Set();
    allOpenSourceProjects.forEach((project) => {
      if (project.organization) {
        orgSet.add(project.organization);
      }
    });
    return ["all", ...Array.from(orgSet).sort()];
  }, []);

  const hasActiveSearch =
    variant === "opensource" && (queryTokens.length > 0 || orgFilter !== "all");

  const filteredProjects = useMemo(() => {
    let list = items;
    if (showFeaturedOnly) {
      list = list.filter((p) => p.featured);
    }

    // Shuffle the list for home variant to show random contributions
    if (variant === "home") {
      list = [...list].sort(() => Math.random() - 0.5);
    }

    if (limit) {
      return list.slice(0, limit);
    }

    return list;
  }, [items, limit, showFeaturedOnly, variant]);

  const filteredCombinedProjects = useMemo(() => {
    let list = allOpenSourceProjects;
    if (orgFilter !== "all") {
      list = list.filter((project) => project.organization === orgFilter);
    }
    return orderByTokens(list, queryTokens, variant === "opensource");
  }, [orgFilter, queryTokens, variant]);

  const orderedApacheApisix = orderByTokens(
    apacheApisixProjects,
    queryTokens,
    variant === "opensource"
  );
  const orderedZulip = orderByTokens(
    zulipProjects,
    queryTokens,
    variant === "opensource"
  );
  const orderedRocketChat = orderByTokens(
    rocketChatProjects,
    queryTokens,
    variant === "opensource"
  );
  const orderedKeploy = orderByTokens(
    keployProjects,
    queryTokens,
    variant === "opensource"
  );

  return (
    <>
      <Section id={title} title={title}>
        {variant === "opensource" && (
          <>
            <h3 className="hidden sm:block text-xl sm:text-2xl">
              <span className="text-purple">{" ~~ "}</span>my open source contributions
              <span className="text-purple">{" ~~ "}</span>
            </h3>
            <div className="mt-6 mb-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-end">
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search open source..."
                aria-label="Search open source contributions"
                className="w-full md:w-1/2 px-4 py-2 rounded bg-gray-900 text-white border border-purple/40 focus:outline-none focus:border-purple"
              />
              <select
                value={orgFilter}
                onChange={(e) => setOrgFilter(e.target.value)}
                aria-label="Filter by organization"
                className="w-full md:w-56 pl-4 pr-10 py-2 rounded bg-gray-900 text-white border border-purple/40 focus:outline-none focus:border-purple"
              >
                {orgOptions.map((org) => (
                  <option key={org} value={org}>
                    {org === "all" ? "All organizations" : org}
                  </option>
                ))}
              </select>
            </div>
            {hasActiveSearch ? (
              <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 grid-orientation">
                {filteredCombinedProjects.map((project) => (
                  <OpenSourceCard key={project.id} project={project} />
                ))}
              </div>
            ) : (
              <>
                <h2 className="text-xl sm:text-2xl md:text-3xl my-6 sm:my-10 font-bold text-white mb-6 sm:mb-10 text-center md:text-right">
                  <span className="text-purple">@</span>Apache Apisix
                </h2>
                <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 grid-orientation mb-12">
                  {orderedApacheApisix.map((p) => (
                    <OpenSourceCard key={p.id} project={p} />
                  ))}
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl my-6 sm:my-10 font-bold text-white mb-6 sm:mb-10 text-center md:text-right">
                  <span className="text-purple">@</span>Zulip
                </h2>
                <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 grid-orientation mb-12">
                  {orderedZulip.map((p) => (
                    <OpenSourceCard key={p.id} project={p} />
                  ))}
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl my-6 sm:my-10 font-bold text-white mb-6 sm:mb-10 text-center md:text-right">
                  <span className="text-purple">@</span>Rocket.Chat
                </h2>
                <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 grid-orientation mb-12">
                  {orderedRocketChat.map((p) => (
                    <OpenSourceCard key={p.id} project={p} />
                  ))}
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl my-6 sm:my-10 font-bold text-white mb-6 sm:mb-10 text-center md:text-right">
                  <span className="text-purple">@</span>Keploy
                </h2>
                <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 grid-orientation">
                  {orderedKeploy.map((p) => (
                    <OpenSourceCard key={p.id} project={p} />
                  ))}
                </div>
              </>
            )}
          </>
        )}

        {variant === "home" && (
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 grid-orientation">
            {filteredProjects.map((p) => (
              <OpenSourceCard key={p.id} project={p} />
            ))}
          </div>
        )}

        {variant === "home" && (
          <div className="flex justify-center md:justify-start mt-6">
            <a
              href="/opensource"
              className="px-6 my-6 py-2 border border-purple font-semibold rounded hover:bg-purple hover:text-white transition-colors"
            >
              View all &rarr;
            </a>
          </div>
        )}
      </Section>
    </>
  );
};

export default OpenSourceSection;
