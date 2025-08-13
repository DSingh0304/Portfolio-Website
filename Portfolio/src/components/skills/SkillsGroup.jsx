import SkillsCard from "./SkilsCard";
import { skills } from "../../data/skillsData";

const SkillsGroup = () => {
  return (
    <>
      <section id="skills" className="py-16 md:py-24">
        <div className="container">
          <div>
            <h2 className=" my-4 text-2xl md:text-3xl font-bold text-white">
              <span className="text-purple">#skills</span>
              <span className="text-purple mx-4">------------------------</span>
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {skills.map((s) => (
                <SkillsCard key={s.id} skills={s} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsGroup;
