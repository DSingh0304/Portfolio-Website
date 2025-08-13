import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <main className="py-16 md:py-24">
        <div className="container flex flex-col-reverse md:flex-row items-center justify-between gap-12 relative">
          <div className="md:w-1/2 text-center md:text-left">
            <div className="ml-20">
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                Deep is a<span className="text-purple">software developer</span>{" "}
                and
                <br />
                <span className="text-purple">ML enthusiast</span>
              </h1>
              <p className="text-gray-400 mb-8 max-w-md mx-auto md:mx-0">
                He crafts responsive websites where technologies meet
                creativity.
              </p>
              <button className="px-6 py-3 border rounded-md border-purple hover:text-white transition-colors font-semibold">
                Contact me!!
              </button>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center md:justify-start relative z-10">
            <div className="relative w-72 h-72 relative">
              <img
                src="./public/prop-1.webp"
                alt="prop"
                className="absolute bottom-2 right-2"
              />
            </div>
            <div className="relative w-72 h-72">
              <img
                src="./public/Deep.webp"
                alt="A profile picture of Elias"
                className="rounded-lg shadow-lg hover:scale-110 hover:cursor-pointer"
              />
            </div>
            <div className="relative w-72 h-72">
              <img src="./public/prop-2.webp" alt="prop" className="" />
            </div>
          </div>
        </div>
      </main>

      <section className="py-16 md:py-24 relative">
        <div>
          <div>
            <div className="container relative z-10 flex flex-col max-w-3xl">
              <div className="border border-gray-300 p-6">
                <blockquote className="text-center text-xl md:text-2xl font-medium">
                  <span className="text-5xl">"</span>With great power comes
                  great electricity bill<span className="text-5xl">"</span>
                </blockquote>
              </div>
              <div className="flex justify-end">
                <span className="border p-3 border-gray-300">- Dr. Who</span>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <section id="skills" className="py-16 md:py-24">
        <div className="container">
          <div>
            <h2 className=" my-4 text-2xl md:text-3xl font-bold text-white">
              <span className="text-purple">#skills</span>
              <span className="text-purple mx-4">------------------------</span>
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="  border-2 border-gray-700">
                <h3 className=" p-4 border-2 border-gray-300 text-xl font-bold text-white mb-4">
                  Languages
                </h3>
                <ul className=" p-4 text-gray-400 space-y-2">
                  <li>Typescript</li>
                  <li>Lua</li>
                  <li>Python</li>
                  <li>JavaScript</li>
                </ul>
              </div>

              <div className="  border-2 border-gray-700">
                <h3 className="p-4 border-2 border-gray-300 text-xl font-bold text-white mb-4">
                  Databases
                </h3>
                <ul className="p-4 text-gray-400 space-y-2">
                  <li>SQLite</li>
                  <li>PostgreSQL</li>
                  <li>Mongo</li>
                </ul>
              </div>

              <div className="  border-2 border-gray-700">
                <h3 className="p-4 border-2 border-gray-300 text-xl font-bold text-white mb-4">
                  Tools
                </h3>
                <ul className="p-4 text-gray-400 space-y-2">
                  <li>VSCode</li>
                  <li>Vim</li>
                  <li>Neovim</li>
                  <li>Linux</li>
                  <li>Figma</li>
                </ul>
              </div>

              <div className="  border-2 border-gray-700">
                <h3 className="p-4 border-2 border-gray-300 text-xl font-bold text-white mb-4">
                  Other
                </h3>
                <ul className="p-4 text-gray-400 space-y-2">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Tailwind</li>
                  <li>Sass</li>
                  <li>React</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24">
        <div className="container flex flex-col-reverse md:flex-row items-center gap-12 relative">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              <span className="text-purple">#about-me</span>
              <span className="text-purple mx-4">---------------------</span>
            </h2>
            <div className="my-4">
              <p className="text-gray-400 mb-6">Hello, I'm Elias!</p>
              <p className="text-gray-400 mb-4">
                I'm a self-taught front-end developer based in Kory, with a
                focus on creating engaging, accessible, and user-friendly
                digital experiences. I am passionate about clean, maintainable
                code and the latest web technologies.
              </p>
              <p className="text-gray-400 mb-8">
                I'm always looking for new challenges and opportunities to learn
                and grow as a developer. I'm a quick learner and I'm always up
                for a good challenge. I am currently open to new positions and
                collaborations.
              </p>
              <a
                href="#"
                className="px-6 py-3 border border-purple hover:text-white transition-colors font-semibold"
              >
                Read more -{">"}{" "}
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-start relative z-10">
            <div className="relative w-72 h-72 relative">
              <img
                src="./public/prop-1.webp"
                alt="prop"
                className="absolute bottom-2 right-2"
              />
            </div>
            <div className="relative w-72 h-72 z-10">
              <img
                src="./public/Deep.webp"
                alt="A profile picture of Elias"
                className="rounded-lg shadow-lg hover:scale-110 hover:cursor-pointer"
              />
            </div>
            <div className="relative w-72 h-72 ">
              <img src="./public/prop-4.webp" alt="prop" className="" />
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 md:py-24">
        <div className="container">
          <div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
              <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  <span className="text-purple">#contacts</span>
                  <span className="text-purple mx-4">
                    ----------------------
                  </span>
                </h2>
                <p className="my-4 text-gray-400 mb-6 max-w-md mx-auto md:mx-0">
                  I'm interested in freelance opportunities. However, if you
                  have other requests or questions, don't hesitate to contact
                  me.
                </p>
              </div>
              <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="border-2 border-gray-700 p-6  inline-block">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Message me here
                  </h3>
                  <div className="space-y-3 text-gray-400">
                    <a
                      href="mailto:elias@elias.me"
                      className="flex items-center space-x-2 text-hover transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span>elias@elias.me</span>
                    </a>
                    <a
                      href="tel:+9999999999"
                      className="flex items-center space-x-2 text-hover transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 8v8m-4-4v4m-4-4v4M4 8h16a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4a2 2 0 012-2z"
                        />
                      </svg>
                      <span>+999-999-9999</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr></hr>
      <Footer />
    </>
  );
}

export default App;
