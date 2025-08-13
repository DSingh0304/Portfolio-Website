const ProjectCard = () => {
  
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
              <a href="#" className="hover:cursor-pointer hover:underline">
                View all {">>"}
              </a>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="border-2 border-gray-700 bdr transition-colors">
                <img
                  src="https://placehold.co/600x400/374151/d1d5db?text=Street+Answers+Quiz"
                  alt="Project Kahoot Answers"
                  className="border border-2 border-gray-500"
                />
                <p className="p-2 border border-2 border-gray-500 text-sm text-gray-400 font-semibold mb-2">
                  Python Node.js
                </p>
                <div className="m-4">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Street Answers Quiz
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Get answers to Kahoot quizzes for free
                  </p>
                  <a
                    href="#"
                    className="text-sm px-4 py-2 border text-purple border-purple hover:text-white transition-colors"
                  >
                    Live {">>"}
                  </a>
                  <a
                    href="#"
                    className="text-sm px-4 py-2 border border-gray-500 text-gray-400 hover:bg-gray-700 transition-colors"
                  >
                    Cached {">>"}{" "}
                  </a>
                </div>
              </div>

              <div className="border-2 border-gray-700 bdr transition-colors">
                <img
                  src="https://placehold.co/600x400/374151/d1d5db?text=Street+Answers+Quiz"
                  alt="Project Kahoot Answers"
                  className="border border-2 border-gray-500"
                />
                <p className="p-2 border border-2 border-gray-500 text-sm text-gray-400 font-semibold mb-2">
                  Python Node.js
                </p>
                <div className="m-4">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Street Answers Quiz
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Get answers to Kahoot quizzes for free
                  </p>
                  <a
                    href="#"
                    className="text-sm px-4 py-2 border text-purple border-purple hover:text-white transition-colors"
                  >
                    Live {">>"}{" "}
                  </a>
                </div>
              </div>

              <div className="border-2 border-gray-700 bdr transition-colors">
                <img
                  src="https://placehold.co/600x400/374151/d1d5db?text=Street+Answers+Quiz"
                  alt="Project Kahoot Answers"
                  className="border border-2 border-gray-500"
                />
                <p className="p-2 border border-2 border-gray-500 text-sm text-gray-400 font-semibold mb-2">
                  Python Node.js
                </p>
                <div className="m-4">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Street Answers Quiz
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Get answers to Kahoot quizzes for free
                  </p>
                  <a
                    href="#"
                    className="text-sm px-4 py-2 border text-purple border-purple hover:text-white transition-colors"
                  >
                    Live {">>"}{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectCard;
