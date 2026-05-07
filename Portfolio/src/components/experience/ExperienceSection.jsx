import { useState } from "react";
import Section from "../common/Section";
import { workExperience, education } from "../../data/experienceData";
import { NavLink } from "react-router-dom";

const TimelineItem = ({ item, onOpen }) => {
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => onOpen(item)}
        className="w-full text-left rounded-md border border-gray-700 bg-[#282c33] p-4 hover:bg-white/5 transition-all duration-300 bdr cursor-pointer"
        aria-label={`Open ${item.organization} ${item.role} details`}
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
          <div className="h-16 w-16 sm:h-20 sm:w-20 border border-gray-600 bg-[#1f232a] flex items-center justify-center text-xs sm:text-sm text-gray-300 overflow-hidden shrink-0">
            {item.icon ? (
              <img src={item.icon} alt={item.organization} className="w-full h-full object-contain" />
            ) : (
              item.iconLabel || "LOGO"
            )}
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h4 className="text-white font-semibold text-base sm:text-lg">
                  {item.role}
                </h4>
                <p className="text-purple text-sm font-medium">
                  {item.organization}
                </p>
                {item.employmentType && (
                  <p className="text-gray-400 text-xs mt-1">
                    {item.employmentType}
                  </p>
                )}
              </div>
              <div className="text-gray-400 text-xs sm:text-sm text-left sm:text-right">
                <div>{item.period}</div>
                {item.location && <div>{item.location}</div>}
              </div>
            </div>
            {item.summary && item.summary.length > 0 && (
              <ul className="mt-3 list-disc pl-5 text-gray-400 text-sm space-y-1">
                {item.summary.map((line, index) => (
                  <li key={`${item.id}-summary-${index}`}>{line}</li>
                ))}
              </ul>
            )}
            {item.skills && item.skills.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={`${item.id}-${skill}`}
                    className="text-purple text-[10px] border border-purple px-2 py-1 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </button>
    </div>
  );
};

const ExperienceSection = ({ variant = "page", workLimit, educationLimit }) => {
  const [activeItem, setActiveItem] = useState(null);
  const workItems = workLimit ? workExperience.slice(0, workLimit) : workExperience;
  const educationItems = educationLimit ? education.slice(0, educationLimit) : education;

  const openItem = (item) => {
    setActiveItem(item);
  };

  const closeItem = () => {
    setActiveItem(null);
  };

  return (
    <Section id="experience" title="experience">
      <div className="space-y-12">
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6">
            <span className="text-purple">@</span>work experience
          </h3>
          <div className="relative border-l border-gray-700 pl-6 space-y-8">
            {workItems.map((item) => (
              <TimelineItem key={item.id} item={item} onOpen={openItem} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6">
            <span className="text-purple">@</span>schooling
          </h3>
          <div className="relative border-l border-gray-700 pl-6 space-y-8">
            {educationItems.map((item) => (
              <TimelineItem key={item.id} item={item} onOpen={openItem} />
            ))}
          </div>
        </div>

        {variant === "home" && (
          <div className="flex justify-center md:justify-start">
            <NavLink
              to="/experience"
              className="px-6 py-2 border border-purple font-semibold rounded hover:bg-purple hover:text-white transition-colors"
            >
              View full timeline &rarr;
            </NavLink>
          </div>
        )}
      </div>
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <button
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={closeItem}
            aria-label="Close experience details"
          />
          <div
            className="relative w-[92%] max-w-3xl max-h-[85vh] overflow-y-auto rounded-xl border border-gray-700 bg-[#1f232a] shadow-2xl"
            role="dialog"
            aria-modal="true"
          >
            <div className="p-6">
              <div className="flex items-start justify-between gap-4 text-gray-400 text-sm mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-14 w-14 border border-gray-600 bg-[#282c33] flex items-center justify-center text-xs text-gray-300 overflow-hidden shrink-0">
                    {activeItem.icon ? (
                      <img src={activeItem.icon} alt={activeItem.organization} className="w-full h-full object-contain" />
                    ) : (
                      activeItem.iconLabel || "LOGO"
                    )}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg">
                      {activeItem.role}
                    </div>
                    <div className="text-purple text-sm font-medium">
                      {activeItem.organization}
                    </div>
                    {activeItem.employmentType && (
                      <div className="text-gray-400 text-xs mt-1">
                        {activeItem.employmentType}
                      </div>
                    )}
                  </div>
                </div>
                <button
                  onClick={closeItem}
                  className="text-gray-300 hover:text-white bg-gray-800/80 rounded-full w-9 h-9 flex items-center justify-center"
                  aria-label="Close experience details"
                >
                  x
                </button>
              </div>
              <div className="text-gray-400 text-sm mb-4">
                <div>{activeItem.period}</div>
                {activeItem.location && <div>{activeItem.location}</div>}
              </div>
              {activeItem.details && (
                <p className="text-gray-300 leading-relaxed mb-4">
                  {activeItem.details}
                </p>
              )}
              {activeItem.summary && activeItem.summary.length > 0 && (
                <ul className="list-disc pl-5 text-gray-400 text-sm space-y-1 mb-4">
                  {activeItem.summary.map((line, index) => (
                    <li key={`${activeItem.id}-detail-${index}`}>{line}</li>
                  ))}
                </ul>
              )}
              {activeItem.skills && activeItem.skills.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {activeItem.skills.map((skill) => (
                    <span
                      key={`${activeItem.id}-${skill}`}
                      className="text-purple text-[10px] border border-purple px-2 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};

export default ExperienceSection;
