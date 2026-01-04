import React, { useState } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const OpenSourceCard = ({ project }) => {
  const {
    id,
    title,
    shortDesc,
    fullDesc,
    tech,
    repoUrl,
    liveUrl,
    organization,
    prNumber,
  } = project;
  const [showFullDesc, setShowFullDesc] = useState(false);

  return (
    <article
      key={id}
      className="border-2 border-gray-700 bdr transition-colors rounded-md overflow-hidden relative"
    >
      {!showFullDesc ? (
        <>
          <p className="p-2 border border-2 border-gray-500 text-xs sm:text-sm text-gray-400 font-semibold mb-2">
            {tech.join(" ")}
          </p>
          <div className="p-4">
            {organization && (
              <p className="text-purple text-sm font-bold mb-2">
                {organization}
              </p>
            )}
            <h3
              id={`opensource-${id}-title`}
              className="text-lg sm:text-xl font-bold text-white mb-2"
            >
              {title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">{shortDesc}</p>
            {(repoUrl || liveUrl) && (
              <div className="flex flex-col gap-2 items-center sm:flex-row sm:justify-center md:justify-start">
                <div>
                  {repoUrl && (
                    <a
                      href={repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm px-4 py-2 border border-purple hover:text-white transition-colors"
                    >
                      Repo {">>"}
                    </a>
                  )}
                </div>
                <div>
                  {liveUrl && (
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm px-4 py-2 border border-purple hover:text-white transition-colors"
                    >
                      Live {">>"}
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
          <button
            className="absolute bottom-2 right-2 bg-purple-700 text-white rounded-full p-2 shadow-md hover:bg-purple-900 transition-colors"
            onClick={() => setShowFullDesc(true)}
            aria-label="Show more"
          >
            <FaArrowUpRightFromSquare />
          </button>
        </>
      ) : (
        <div className="p-6 flex flex-col items-center justify-center min-h-[200px]">
          {organization && (
            <p className="text-purple text-base font-bold mb-2">
              {organization}
            </p>
          )}
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
    </article>
  );
};

export default OpenSourceCard;
