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
    if (showFeaturedOnly) {
      items = items.filter((p) => p.featured);
    }
    if (limit) {
      return items.slice(0, limit);
    }

    return items;
  }, [limit, showFeaturedOnly]);

  return (
    <>
      <Section id={title} title={title}>
        {variant === "projects" && (
          <>
            <h3 className="text-2xl">
              <span className="text-purple">{" ~~ "}</span>list of my projects
              <span className="text-purple">{" ~~ "}</span>
            </h3>
            <h2 className="text-2xl my-10 md:text-3xl font-bold text-white mb-10 text-right">
              <span className="text-purple">@</span>big projects
            </h2>
          </>
        )}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
        {variant === "projects" && (
          <>
            <h2 className="text-2xl my-10 md:text-3xl font-bold text-white mb-10 text-right">
              <span className="text-purple">@</span>small projects
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
