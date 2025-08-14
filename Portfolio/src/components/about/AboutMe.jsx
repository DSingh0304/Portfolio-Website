import { about } from "../../data/aboutData";
import Section from "../common/Section";

const AboutMe = ({ variant = "about" }) => {
  const data = about;
  return (
    <>
      <Section id="about" title="about-me" ftoggle={true}>
        <div className="my-4">
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
        <div className="md:w-1/2 flex justify-center md:justify-start relative z-10">
          <div className="relative w-72 mx-2 h-72 relative">
            <img
              src={data.imageMap.prop1}
              alt="Dotted Design"
              className="absolute  bottom-2 right-2"
            ></img>
          </div>
          <div className="relative z-10 w-72 h-72">
            <img
              src={data.imageMap.profile2}
              alt="A profile picture of Deep"
              className=" rounded-lg  shadow-lg scale-130 hover:scale-140 hover:cursor-pointer"
            ></img>
          </div>
          <div className="relative mx-2 w-72 h-72">
            <img
              src={data.imageMap.prop2}
              alt="Logo With Bg Removed"
              className=""
            ></img>
          </div>
        </div>
      </Section>
    </>
  );
};

export default AboutMe;
