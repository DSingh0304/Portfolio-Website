import { about } from "../../data/aboutData"

const AboutMe = () => {

  const data = about;
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
              <p className="text-gray-400 mb-6">{data.intro}</p>
              <p className="text-gray-400 mb-4">
                {data.desc1}
              </p>
              <p className="text-gray-400 mb-8">
                {data.desc2}
              </p>
              <a
                href={data.cta.to}
                className="px-6 py-3 border border-purple hover:text-white transition-colors font-semibold"
              >
                {data.cta.label} -{">"}{" "}
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-start relative z-10">
                      <div className="relative w-72 h-72 relative">
                        <img
                          src={data.imageMap.prop1}
                          alt="Dotted Design"
                          className="absolute bottom-2 right-2"
                        ></img>
                      </div>
                      <div className="relative w-72 h-72">
                        <img
                          src={data.imageMap.profile}
                          alt="A profile picture of Deep"
                          className="rounded-lg shadow-lg hover:scale-110 hover:cursor-pointer"
                        ></img>
                      </div>
                      <div className="relative w-72 h-72">
                        <img src={data.imageMap.prop2} alt="Logo With Bg Removed" className="" ></img>
                      </div>
                    </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
