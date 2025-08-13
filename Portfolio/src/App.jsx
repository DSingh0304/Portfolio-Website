import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
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
