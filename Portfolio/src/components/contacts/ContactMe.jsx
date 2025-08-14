import contact from "../../data/contactData";
import Section from "../common/Section";

const ContactMe = () => {
  const data = contact;
  return (
    <Section id="contacts" title="contacts">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="md:w-1/2">
          <p className="text-gray-400">{data.p1}</p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="border border-gray-500 p-4">
            <h3 className="text-white font-semibold mb-4">{data.title}</h3>
            <div className="flex items-center space-x-4">
              <i className="bx bxl-discord-alt text-2xl text-gray-400"></i>
              <span className="text-gray-400">{data.discord}</span>
            </div>
            <div className="flex items-center space-x-4 mt-2">
              <i className="bx bx-envelope text-2xl text-gray-400"></i>
              <span className="text-gray-400">{data.email}</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactMe;
