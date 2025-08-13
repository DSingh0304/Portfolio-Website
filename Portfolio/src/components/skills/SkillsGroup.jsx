const SkillsGroup = () => {
  return (
    <>
      <section id="skills" className="py-16 md:py-24">
        <div className="container">
          <div>
            <h2 className=" my-4 text-2xl md:text-3xl font-bold text-white">
              <span className="text-purple">#skills</span>
              <span className="text-purple mx-4">------------------------</span>
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className=" bdr border-2 border-gray-700">
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

              <div className=" bdr border-2 border-gray-700">
                <h3 className="p-4 border-2 border-gray-300 text-xl font-bold text-white mb-4">
                  Databases
                </h3>
                <ul className="p-4 text-gray-400 space-y-2">
                  <li>SQLite</li>
                  <li>PostgreSQL</li>
                  <li>Mongo</li>
                </ul>
              </div>

              <div className=" bdr border-2 border-gray-700">
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

              <div className=" bdr border-2 border-gray-700">
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
    </>
  );
};

export default SkillsGroup;
