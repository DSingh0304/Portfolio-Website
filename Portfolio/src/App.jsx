import "./App.css";

function App() {
  return (
    <>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Elias - Web Designer</title>

          <script src="https://cdn.tailwindcss.com"></script>

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
        </head>
        <body class="text-gray-300">
          <header class="py-6">
            <div class="container flex justify-between items-center">
              <a
                href="#"
                class="flex items-center space-x-2 text-white text-xl font-bold"
              >
                <img
                  src="./public/Logo.webp
                "
                  alt=""
                />
                <span>Deep</span>
              </a>
              <nav class="hidden md:flex space-x-8 text-md font-semibold">
                <a href="#" class="text-white text-hover transition-colors">
                  <span class="text-purple">#</span>home
                </a>
                <a href="#" class="text-hover transition-colors">
                  <span class="text-purple">#</span>projects
                </a>
                <a href="#" class="text-hover transition-colors">
                  <span class="text-purple">#</span>about
                </a>
                <a href="#" class="text-hover transition-colors">
                  <span class="text-purple">#</span>contacts
                </a>
                <select
                  id="language-select"
                  name="language"
                  class="block px-3 py-1 hover:cursor-pointer rounded-md shadow-sm bg-gray-800 text-gray-300 focus:outline-none focus:ring-green-400 text-sm"
                >
                  <option value="en">EN</option>
                  <option value="hn">HN</option>
                </select>
              </nav>
            </div>
          </header>

          <main class="py-16 md:py-24">
            <div class="container flex flex-col-reverse md:flex-row items-center justify-between gap-12 relative">
              <div class="md:w-1/2 text-center md:text-left">
                <div class="ml-20">
                  <h1 class="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                    Deep is a<span class="text-purple">software developer</span>{" "}
                    and
                    <br />
                    <span class="text-purple">ML enthusiast</span>
                  </h1>
                  <p class="text-gray-400 mb-8 max-w-md mx-auto md:mx-0">
                    He crafts responsive websites where technologies meet
                    creativity.
                  </p>
                  <button class="px-6 py-3 border rounded-md border-purple hover:text-white transition-colors font-semibold">
                    Contact me!!
                  </button>
                </div>
              </div>

              <div class="md:w-1/2 flex justify-center md:justify-start relative z-10">
                <div class="relative w-72 h-72 relative">
                  <img
                    src="./public/prop-1.webp"
                    alt="prop"
                    class="absolute bottom-2 right-2"
                  />
                </div>
                <div class="relative w-72 h-72">
                  <img
                    src="./public/Deep.webp"
                    alt="A profile picture of Elias"
                    class="rounded-lg shadow-lg hover:scale-110 hover:cursor-pointer"
                  />
                </div>
                <div class="relative w-72 h-72">
                  <img src="./public/prop-2.webp" alt="prop" class="" />
                </div>
              </div>
            </div>
          </main>

          <section class="py-16 md:py-24 relative">
            <div>
              <div>
                <div class="container relative z-10 flex flex-col max-w-3xl">
                  <div class="border border-gray-300 p-6">
                    <blockquote class="text-center text-xl md:text-2xl font-medium">
                      <span class="text-5xl">"</span>With great power comes
                      great electricity bill<span class="text-5xl">"</span>
                    </blockquote>
                  </div>
                  <div class="flex justify-end">
                    <span class="border p-3 border-gray-300">- Dr. Who</span>
                  </div>
                </div>
              </div>

              <div>
                <img
                  src="./public/prop-3.webp"
                  alt=""
                  class="absolute scale-150 right-0"
                />
              </div>
            </div>
          </section>

          <section id="projects" class="py-16 md:py-24">
            <div class="container flex-row">
              <div>
                <img
                  src="./public/prop-1.webp"
                  alt=""
                  class="absolute scale-150 right-0 my-72"
                />
              </div>
              <div>
                <div class="flex justify-between items-center mb-10">
                  <h2 class="text-2xl md:text-3xl font-bold text-white">
                    <span class="text-purple">#projects</span>
                    <span class="text-purple mx-4">
                      ------------------------
                    </span>
                  </h2>
                  <a href="#" class="hover:cursor-pointer hover:underline">
                    View all {">>"}
                  </a>
                </div>
                <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <div class="border-2 border-gray-700 bdr transition-colors">
                    <img
                      src="https://placehold.co/600x400/374151/d1d5db?text=Street+Answers+Quiz"
                      alt="Project Kahoot Answers"
                      class="border border-2 border-gray-500"
                    />
                    <p class="p-2 border border-2 border-gray-500 text-sm text-gray-400 font-semibold mb-2">
                      Python Node.js
                    </p>
                    <div class="m-4">
                      <h3 class="text-xl font-bold text-white mb-2">
                        Street Answers Quiz
                      </h3>
                      <p class="text-gray-400 text-sm mb-4">
                        Get answers to Kahoot quizzes for free
                      </p>
                      <a
                        href="#"
                        class="text-sm px-4 py-2 border text-purple border-purple hover:text-white transition-colors"
                      >
                        Live {">>"}
                      </a>
                      <a
                        href="#"
                        class="text-sm px-4 py-2 border border-gray-500 text-gray-400 hover:bg-gray-700 transition-colors"
                      >
                        Cached {">>"}{" "}
                      </a>
                    </div>
                  </div>

                  <div class="border-2 border-gray-700 bdr transition-colors">
                    <img
                      src="https://placehold.co/600x400/374151/d1d5db?text=Street+Answers+Quiz"
                      alt="Project Kahoot Answers"
                      class="border border-2 border-gray-500"
                    />
                    <p class="p-2 border border-2 border-gray-500 text-sm text-gray-400 font-semibold mb-2">
                      Python Node.js
                    </p>
                    <div class="m-4">
                      <h3 class="text-xl font-bold text-white mb-2">
                        Street Answers Quiz
                      </h3>
                      <p class="text-gray-400 text-sm mb-4">
                        Get answers to Kahoot quizzes for free
                      </p>
                      <a
                        href="#"
                        class="text-sm px-4 py-2 border text-purple border-purple hover:text-white transition-colors"
                      >
                        Live {">>"}{" "}
                      </a>
                    </div>
                  </div>

                  <div class="border-2 border-gray-700 bdr transition-colors">
                    <img
                      src="https://placehold.co/600x400/374151/d1d5db?text=Street+Answers+Quiz"
                      alt="Project Kahoot Answers"
                      class="border border-2 border-gray-500"
                    />
                    <p class="p-2 border border-2 border-gray-500 text-sm text-gray-400 font-semibold mb-2">
                      Python Node.js
                    </p>
                    <div class="m-4">
                      <h3 class="text-xl font-bold text-white mb-2">
                        Street Answers Quiz
                      </h3>
                      <p class="text-gray-400 text-sm mb-4">
                        Get answers to Kahoot quizzes for free
                      </p>
                      <a
                        href="#"
                        class="text-sm px-4 py-2 border text-purple border-purple hover:text-white transition-colors"
                      >
                        Live {">>"}{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="skills" class="py-16 md:py-24">
            <div class="container">
              <div class="absolute left-0 my-24">
                <img src="./public/prop-2.webp" alt="prop" class="" />
              </div>
              <div>
                <h2 class=" my-4 text-2xl md:text-3xl font-bold text-white">
                  <span class="text-purple">#skills</span>
                  <span class="text-purple mx-4">------------------------</span>
                </h2>
                <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                  <div class="  border-2 border-gray-700">
                    <h3 class=" p-4 border-2 border-gray-300 text-xl font-bold text-white mb-4">
                      Languages
                    </h3>
                    <ul class=" p-4 text-gray-400 space-y-2">
                      <li>Typescript</li>
                      <li>Lua</li>
                      <li>Python</li>
                      <li>JavaScript</li>
                    </ul>
                  </div>

                  <div class="  border-2 border-gray-700">
                    <h3 class="p-4 border-2 border-gray-300 text-xl font-bold text-white mb-4">
                      Databases
                    </h3>
                    <ul class="p-4 text-gray-400 space-y-2">
                      <li>SQLite</li>
                      <li>PostgreSQL</li>
                      <li>Mongo</li>
                    </ul>
                  </div>

                  <div class="  border-2 border-gray-700">
                    <h3 class="p-4 border-2 border-gray-300 text-xl font-bold text-white mb-4">
                      Tools
                    </h3>
                    <ul class="p-4 text-gray-400 space-y-2">
                      <li>VSCode</li>
                      <li>Vim</li>
                      <li>Neovim</li>
                      <li>Linux</li>
                      <li>Figma</li>
                    </ul>
                  </div>

                  <div class="  border-2 border-gray-700">
                    <h3 class="p-4 border-2 border-gray-300 text-xl font-bold text-white mb-4">
                      Other
                    </h3>
                    <ul class="p-4 text-gray-400 space-y-2">
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

          <section id="about" class="py-16 md:py-24">
            <div class="container flex flex-col-reverse md:flex-row items-center gap-12 relative">
              <div class="md:w-1/2 text-center md:text-left">
                <h2 class="text-2xl md:text-3xl font-bold text-white">
                  <span class="text-purple">#about-me</span>
                  <span class="text-purple mx-4">---------------------</span>
                </h2>
                <div class="my-4">
                  <p class="text-gray-400 mb-6">Hello, I'm Elias!</p>
                  <p class="text-gray-400 mb-4">
                    I'm a self-taught front-end developer based in Kory, with a
                    focus on creating engaging, accessible, and user-friendly
                    digital experiences. I am passionate about clean,
                    maintainable code and the latest web technologies.
                  </p>
                  <p class="text-gray-400 mb-8">
                    I'm always looking for new challenges and opportunities to
                    learn and grow as a developer. I'm a quick learner and I'm
                    always up for a good challenge. I am currently open to new
                    positions and collaborations.
                  </p>
                  <a
                    href="#"
                    class="px-6 py-3 border border-purple hover:text-white transition-colors font-semibold"
                  >
                    Read more -{">"}{" "}
                  </a>
                </div>
              </div>
              <div class="md:w-1/2 flex justify-center md:justify-start relative z-10">
                <div class="relative w-72 h-72 relative">
                  <img
                    src="./public/prop-1.webp"
                    alt="prop"
                    class="absolute bottom-2 right-2"
                  />
                </div>
                <div class="relative w-72 h-72 z-10">
                  <img
                    src="./public/Deep.webp"
                    alt="A profile picture of Elias"
                    class="rounded-lg shadow-lg hover:scale-110 hover:cursor-pointer"
                  />
                </div>
                <div class="relative w-72 h-72 ">
                  <img src="./public/prop-4.webp" alt="prop" class="" />
                </div>
              </div>
            </div>
          </section>

          <section id="contacts" class="py-16 md:py-24">
            <div class="container">
              <div class="absolute right-0 scale-150">
                <img src="./public/prop-5.webp" alt="prop" class="" />
              </div>
              <div>
                <div class="flex flex-col md:flex-row items-center md:items-start gap-12">
                  <div class="md:w-1/2 text-center md:text-left">
                    <h2 class="text-2xl md:text-3xl font-bold text-white">
                      <span class="text-purple">#contacts</span>
                      <span class="text-purple mx-4">
                        ----------------------
                      </span>
                    </h2>
                    <p class="my-4 text-gray-400 mb-6 max-w-md mx-auto md:mx-0">
                      I'm interested in freelance opportunities. However, if you
                      have other requests or questions, don't hesitate to
                      contact me.
                    </p>
                  </div>
                  <div class="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                    <div class="border-2 border-gray-700 p-6  inline-block">
                      <h3 class="text-xl font-bold text-white mb-4">
                        Message me here
                      </h3>
                      <div class="space-y-3 text-gray-400">
                        <a
                          href="mailto:elias@elias.me"
                          class="flex items-center space-x-2 text-hover transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                          <span>elias@elias.me</span>
                        </a>
                        <a
                          href="tel:+9999999999"
                          class="flex items-center space-x-2 text-hover transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
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

          <footer class="py-8 border-t border-gray-800">
            <div class="container flex flex-col md:flex-row justify-between items-center text-center md:text-left">
              <div class="mb-4 md:mb-0">
                <a
                  href="#"
                  class="flex items-center space-x-2 text-white text-xl font-bold"
                >
                  <img
                    src="./public/Logo.webp
                "
                    alt=""
                  />
                  <span>Deep</span>
                </a>
                <p class="text-gray-500 text-sm mt-2">
                  Web designer and front-end developer
                </p>
                <p class="text-gray-500 text-sm mt-2">
                  © Copyright 2024. Made by Elias
                </p>
              </div>
              <div class="flex flex-col items-center md:items-end">
                <h3 class="text-white font-bold mb-4">Media</h3>
                <div class="flex space-x-4">
                  <a
                    href="#"
                    class="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6m6 0a2 2 0 002-2v-3a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 002 2m-7 0h7"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    class="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.169 6.839 9.489.5.092.682-.218.682-.483 0-.237-.008-.867-.013-1.7-2.782.604-3.367-1.34-3.367-1.34-.455-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.532 1.03 1.532 1.03.892 1.53 2.342 1.087 2.91.83.091-.645.349-1.087.636-1.338-2.22-.252-4.555-1.11-4.555-4.945 0-1.09.39-1.983 1.029-2.682-.103-.252-.447-1.27.098-2.656 0 0 .84-.268 2.75 1.024A9.564 9.564 0 0112 6.848c.85.006 1.7.114 2.504.32a9.564 9.564 0 012.75-1.024c.545 1.386.201 2.404.098 2.656.639.7 1.029 1.592 1.029 2.682 0 3.845-2.335 4.692-4.562 4.942.359.31.678.922.678 1.862 0 1.345-.013 2.428-.013 2.753 0 .267.18.579.688.481C19.136 20.166 22 16.415 22 12c0-5.523-4.477-10-10-10z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </body>
      </html>
    </>
  );
}

export default App;
