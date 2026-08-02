import React, { useState } from "react";
import { FiHelpCircle } from "react-icons/fi";

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
  } = project;
  const [showFullDesc, setShowFullDesc] = useState(false);

  return (
    <article
      key={id}
      className="border-2 border-gray-700 bdr transition-colors rounded-md overflow-hidden relative"
    >
      <p className="p-2 border border-2 border-gray-500 text-xs sm:text-sm text-gray-400 font-semibold mb-2">
        {tech.join(" ")}
      </p>
      <div className="p-4 pb-14">
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
      </div>
      <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-28 text-center text-sm px-4 py-2 border border-purple hover:text-white transition-colors"
            >
              Repo {">>"}
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-28 text-center text-sm px-4 py-2 border border-purple hover:text-white transition-colors"
            >
              Live {">>"}
            </a>
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

      {showFullDesc && (
        <div className="absolute inset-0 bg-[#1e2128] flex flex-col p-4 z-10">
          {organization && (
            <p className="text-purple text-sm font-bold mb-1 shrink-0">
              {organization}
            </p>
          )}
          <h3 className="text-base font-bold text-white mb-3 shrink-0">{title}</h3>
          <p className="text-gray-300 text-sm leading-relaxed overflow-y-auto flex-1 pr-1">
            {fullDesc}
          </p>
          <button
            className="mt-3 shrink-0 self-start bg-gray-700 text-white rounded-full px-4 py-2 text-sm hover:bg-gray-600 transition-colors"
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
