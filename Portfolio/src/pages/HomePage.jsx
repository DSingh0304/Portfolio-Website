import Hero from "../components/ui/Hero";
import QuoteBlock from "../components/common/QuoteBlock";
import ProjectSection from "../components/projects/ProjectSection";
import SkillsGroup from "../components/skills/SkillsGroup";
import AboutMe from "../components/about/AboutMe";
import ContactMe from "../components/contacts/ContactMe";

const HomePage = () =>  {

    return <>
      <Hero />
      <QuoteBlock />
      <ProjectSection limit={3} showFilters={false} />
      <SkillsGroup />
      <AboutMe />
      <ContactMe />
    </>
}

export default HomePage;