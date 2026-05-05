import { useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";
import SmallProjectCard from "./SmallProjectCard";
import { bigProjects } from "../../data/projectData";
import { smallProject } from "../../data/projectData";
import Section from "../common/Section";

const getSearchTokens = (query) =>
  query.trim().toLowerCase().split(/\s+/).filter(Boolean);

const matchesProjectTokens = (project, tokens) => {
  if (tokens.length === 0) {
    return true;
  }
  const haystack = [
    project.title,
    project.shortDesc,
    project.fullDesc,
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
    if (matchesProjectTokens(project, tokens)) {
      matched.push(project);
    } else {
      rest.push(project);
    }
  });
  return [...matched, ...rest];
};

const ProjectSection = ({
  limit,
  showFeaturedOnly = false,
  title = "projects",
  items = bigProjects,
  variant = "projects",
}) => {
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [techFilter, setTechFilter] = useState("all");
  const queryTokens = useMemo(() => getSearchTokens(query), [query]);

  const techOptions = useMemo(() => {
    const techSet = new Set();
    [...items, ...smallProject].forEach((project) => {
      (project.tech || []).forEach((tech) => techSet.add(tech));
    });
    return ["all", ...Array.from(techSet).sort()];
  }, [items]);

  const combinedProjects = useMemo(() => {
    const bigList = items.map((project) => ({ ...project, projectGroup: "big" }));
    const sideList = smallProject.map((project) => ({ ...project, projectGroup: "side" }));
    return [...bigList, ...sideList];
  }, [items]);

  const hasActiveSearch =
    variant === "projects" &&
    (queryTokens.length > 0 || typeFilter !== "all" || techFilter !== "all");

  const filteredCombinedProjects = useMemo(() => {
    let list = combinedProjects;
    if (showFeaturedOnly) {
      list = list.filter((project) => project.featured);
    }
    if (typeFilter !== "all") {
      list = list.filter((project) => project.projectGroup === typeFilter);
    }
    if (techFilter !== "all") {
      list = list.filter((project) => (project.tech || []).includes(techFilter));
    }

    return orderByTokens(list, queryTokens, variant === "projects");
  }, [combinedProjects, showFeaturedOnly, typeFilter, techFilter, queryTokens, variant]);

  const filteredProjects = useMemo(() => {
    let list = items;
    if (showFeaturedOnly) {
      list = list.filter((p) => p.featured);
    }
    if (limit) {
      list = list.slice(0, limit);
    }

    return orderByTokens(list, queryTokens, variant === "projects");
  }, [items, limit, showFeaturedOnly, variant, queryTokens]);

  const orderedSmallProjects = orderByTokens(
    smallProject,
    queryTokens,
    variant === "projects"
  );

  return (
    <>
      <Section id={title} title={title}>
    {variant === "projects" && (
          <>
      <h3 className="hidden sm:block text-xl sm:text-2xl">
              <span className="text-purple">{" ~~ "}</span>list of my projects
              <span className="text-purple">{" ~~ "}</span>
            </h3>
            <div className="mt-6 mb-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-end">
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects..."
                aria-label="Search projects"
                className="w-full md:w-1/2 px-4 py-2 rounded bg-gray-900 text-white border border-purple/40 focus:outline-none focus:border-purple"
              />
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                aria-label="Filter by project type"
                className="w-full md:w-48 pl-4 pr-10 py-2 rounded bg-gray-900 text-white border border-purple/40 focus:outline-none focus:border-purple"
              >
                <option value="all">All projects</option>
                <option value="big">Big projects</option>
                <option value="side">Side quests</option>
              </select>
              <select
                value={techFilter}
                onChange={(e) => setTechFilter(e.target.value)}
                aria-label="Filter by tech stack"
                className="w-full md:w-56 pl-4 pr-10 py-2 rounded bg-gray-900 text-white border border-purple/40 focus:outline-none focus:border-purple"
              >
                {techOptions.map((tech) => (
                  <option key={tech} value={tech}>
                    {tech === "all" ? "All tech" : tech}
                  </option>
                ))}
              </select>
            </div>
      {!hasActiveSearch && (
              <h2 className="text-xl sm:text-2xl md:text-3xl my-6 sm:my-10 font-bold text-white mb-6 sm:mb-10 text-center md:text-right">
                <span className="text-purple">@</span>big projects
              </h2>
            )}
          </>
        )}
        {hasActiveSearch ? (
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 grid-orientation">
            {filteredCombinedProjects.map((project) =>
              project.projectGroup === "side" ? (
                <SmallProjectCard key={project.id} project={project} />
              ) : (
                <ProjectCard key={project.id} project={project} />
              )
            )}
          </div>
        ) : (
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 grid-orientation">
            {filteredProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        )}
        {variant === "home" && (
          <div className="flex justify-center md:justify-start mt-6">
            <a
              href="/projects"
              className="px-6 my-6 py-2 border border-purple  font-semibold rounded hover:bg-purple hover:text-white transition-colors"
            >
              View all &rarr;
            </a>
          </div>
        )}
    {variant === "projects" && !hasActiveSearch && (
          <>
      <h2 className="text-xl sm:text-2xl md:text-3xl my-6 sm:my-10 font-bold text-white mb-6 sm:mb-10 text-center md:text-right">
              <span className="text-purple">@</span>side quests
            </h2>
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 grid-orientation">
              {orderedSmallProjects.map((p) => (
                <SmallProjectCard key={p.id} project={p} />
              ))}
            </div>
          </>
        )}
      </Section>
    </>
  );
};

export default ProjectSection;
