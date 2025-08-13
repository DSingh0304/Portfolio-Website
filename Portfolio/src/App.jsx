import "./App.css";
import Hero from "./components/ui/Hero";
import QuoteBlock from "./components/common/QuoteBlock";
import ProjectCard from "./components/projects/ProjectSection";
import SkillsGroup from "./components/skills/SkillsGroup";
import AboutMe from "./components/about/AboutMe";
import ContactMe from "./components/contacts/ContactMe";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <QuoteBlock />
      <ProjectCard />
      <SkillsGroup />
      <AboutMe />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
