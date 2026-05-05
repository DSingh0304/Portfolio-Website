import { about } from "../../data/aboutData";
import Section from "../common/Section";

const AboutMe = ({ variant = "about" }) => {
  const data = about;
  return (
    <>
      <Section id="about" title="about-me" ftoggle={true}>
  <div className="my-4 text-center md:text-left">
          <p className="text-gray-400 mb-6">{data.intro}</p>
          <p className="text-gray-400 mb-4">{data.desc1}</p>
          <p className="text-gray-400 mb-8">{data.desc2}</p>
          {variant == "about" && (
           <p className="text-gray-400 mb-8">{data.desc3}</p>
          )}
          
          {variant == "home" && (
            <a
              href={data.cta.to}
              className="px-6 py-3 border border-purple hover:text-white transition-colors font-semibold"
            >
              {data.cta.label} -{">"}{" "}
            </a>
          )}
        </div>
    <div className="w-full md:w-1/2 flex justify-center md:justify-start relative z-10">
      <div className="hero-prop hidden lg:block relative mx-2 w-40 sm:w-56 md:w-64 lg:w-72 h-40 sm:h-56 md:h-64 lg:h-72">
            <img
              src={data.imageMap.prop1}
              alt="Dotted Design"
        className="absolute bottom-2 right-2 max-w-full h-auto"
            ></img>
          </div>
      <div className="relative z-10 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72">
            <img
              src={data.imageMap.profile2}
              alt="A profile picture of Deep"
        className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-200 max-w-full h-auto"
            ></img>
          </div>
      <div className="hero-prop hidden lg:block relative mx-2 w-40 sm:w-56 md:w-64 lg:w-72 h-40 sm:h-56 md:h-64 lg:h-72">
            <img
              src={data.imageMap.prop2}
              alt="Logo With Bg Removed"
        className="max-w-full h-auto"
            ></img>
          </div>
        </div>
      </Section>
    </>
  );
};

export default AboutMe;
