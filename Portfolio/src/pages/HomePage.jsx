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
      <ProjectSection variant="home" limit={3} showFeaturedOnly={true} title="projects" />
      <SkillsGroup />
      <AboutMe  variant = "home" />
      <ContactMe />
    </>
}

export default HomePage;