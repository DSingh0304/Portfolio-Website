import { useMemo } from "react";
import OpenSourceCard from "./OpenSourceCard";
import { apacheApisixProjects, rocketChatProjects, allOpenSourceProjects } from "../../data/opensourceData";
import Section from "../common/Section";

const OpenSourceSection = ({
  limit,
  showFeaturedOnly = false,
  title = "opensource",
  items = allOpenSourceProjects,
  variant = "opensource",
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
        {variant === "opensource" && (
          <>
            <h3 className="hidden sm:block text-xl sm:text-2xl">
              <span className="text-purple">{" ~~ "}</span>my open source contributions
              <span className="text-purple">{" ~~ "}</span>
            </h3>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl my-6 sm:my-10 font-bold text-white mb-6 sm:mb-10 text-center md:text-right">
              <span className="text-purple">@</span>Apache Apisix
            </h2>
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 grid-orientation mb-12">
              {apacheApisixProjects.map((p) => (
                <OpenSourceCard key={p.id} project={p} />
              ))}
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl my-6 sm:my-10 font-bold text-white mb-6 sm:mb-10 text-center md:text-right">
              <span className="text-purple">@</span>Rocket.Chat
            </h2>
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 grid-orientation">
              {rocketChatProjects.map((p) => (
                <OpenSourceCard key={p.id} project={p} />
              ))}
            </div>
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
