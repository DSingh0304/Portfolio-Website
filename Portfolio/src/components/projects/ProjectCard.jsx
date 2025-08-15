const ProjectCard = ({ project }) => {
  const {
    id,
    title,
    shortDesc,
    tech,
    repoUrl,
    image
  } = project;

  return (
    <>
      <article
        key={id}
        className="border-2 border-gray-700 bdr transition-colors rounded-md overflow-hidden"
      >
        <img
          src={image}
          alt={`${title} thumbnail`}
          className="w-full object-cover border border-2 border-gray-500"
          loading="lazy"
        ></img>
        <p className="p-2 border border-2 border-gray-500 text-xs sm:text-sm text-gray-400 font-semibold mb-2">
          {tech.join(" ")}
        </p>
        <div className="p-4">
          <h3
            id={`proj-${id}-title`}
            className="text-lg sm:text-xl font-bold text-white mb-2"
          >
            {title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">{shortDesc}</p>
          {repoUrl && (
            <div className="flex justify-center md:justify-start">
              <a
                href={repoUrl}
                target="_blank"
                className="inline-block text-sm px-4 py-2 border border-purple hover:text-white transition-colors"
              >
                Repo {">>"}
              </a>
            </div>
          )}
        </div>
      </article>
    </>
  );
};

export default ProjectCard;
