import SkillsCard from "./SkilsCard";
import { skills } from "../../data/skillsData";
import Section from "../common/Section";

const SkillsGroup = () => {
  return (
    <>
    <Section id="skills" title="skills" ftoggle={false}>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {skills.map((s) => (
                <SkillsCard key={s.id} skills={s} />
              ))}
              </div>
    </Section>
    </>
  );
};

export default SkillsGroup;
