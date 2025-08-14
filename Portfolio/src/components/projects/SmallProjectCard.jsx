const SmallProjectCard = ({ project }) => {
  const {
    id,
    title,
    shortDesc,
    tech,
    repoUrl,
  } = project;

  return (
    <>
      <article
        key={id}
        className="border-2 border-gray-700 bdr transition-colors"
      >
       
        <p className="p-2 border border-2 border-gray-500 text-sm text-gray-400 font-semibold mb-2">
          {tech.join(" ")}
        </p>
        <div className="m-4">
          <h3
            id={`proj-${id}-title`}
            className="text-xl font-bold text-white mb-2"
          >
            {title}
          </h3>
          <p className="text-gray-400 text-sm mb-4">{shortDesc}</p>
          {repoUrl && (
            <a
              href={repoUrl}
              className="text-sm px-4 py-2 border text-purple border-purple hover:text-white transition-colors"
            >
             Repo {">>"}
            </a>
          )}
        </div>
      </article>
    </>
  );
};

export default SmallProjectCard;
