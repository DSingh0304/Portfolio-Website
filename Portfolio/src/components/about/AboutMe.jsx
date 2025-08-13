const AboutMe = () => {
  return (
    <>
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
    </>
  );
};

export default AboutMe;
