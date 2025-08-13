import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projectData"

const ProjectSection = () => {

  return (
    <>
      <section id="projects" className="py-16 md:py-24">
        <div className="container flex-row">
          <div>
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                <span className="text-purple">#projects</span>
                <span className="text-purple mx-4">
                  ------------------------
                </span>
              </h2>
              <a href="/projects" className="hover:cursor-pointer hover:underline">
                View all {">>"}
              </a>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map( p => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectSection;
