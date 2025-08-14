import AboutMe from "../components/about/AboutMe";
import SkillsGroup from "../components/skills/SkillsGroup";
import MyFunFacts from "../components/common/MyFunFacts";

const AboutPage = () => {
  return (
    <>
      <AboutMe variant="about" />
      <SkillsGroup />
      <MyFunFacts />
    </>
  );
};

export default AboutPage;
