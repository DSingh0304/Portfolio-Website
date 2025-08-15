import { useMemo } from "react";
import ProjectCard from "./ProjectCard";
import SmallProjectCard from "./SmallProjectCard";
import { bigProjects } from "../../data/projectData";
import { smallProject } from "../../data/projectData";
import Section from "../common/Section";

const ProjectSection = ({
  limit,
  showFeaturedOnly = false,
  title = "projects",
  items = bigProjects,
  variant = "projects",
}) => {
  const filteredProjects = useMemo(() => {
    let list = items;
    if (showFeaturedOnly) {
      list = list.filter((p) => p.featured);
    }
    if (limit) {
      return list.slice(0, limit);
    }

    return list;
  }, [items, limit, showFeaturedOnly]);

  return (
    <>
      <Section id={title} title={title}>
    {variant === "projects" && (
          <>
      <h3 className="hidden sm:block text-xl sm:text-2xl">
              <span className="text-purple">{" ~~ "}</span>list of my projects
              <span className="text-purple">{" ~~ "}</span>
            </h3>
      <h2 className="text-xl sm:text-2xl md:text-3xl my-6 sm:my-10 font-bold text-white mb-6 sm:mb-10 text-center md:text-right">
              <span className="text-purple">@</span>big projects
            </h2>
          </>
        )}

  <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 grid-orientation">
          {filteredProjects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
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
    {variant === "projects" && (
          <>
      <h2 className="text-xl sm:text-2xl md:text-3xl my-6 sm:my-10 font-bold text-white mb-6 sm:mb-10 text-center md:text-right">
              <span className="text-purple">@</span>small projects
            </h2>
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 grid-orientation">
              {smallProject.map((p) => (
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
