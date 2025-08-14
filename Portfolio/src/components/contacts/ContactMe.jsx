import {contact} from "../../data/contactData";
import Section from "../common/Section";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";



const ContactMe = () => {
  const data = contact;
  return (
    <Section id="contacts" title="contacts">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="md:w-1/2">
          <p className="text-gray-400">{data.text}</p>
        </div>
        
        <div className="md:w-1/2 flex justify-center ">
          <div className="border bdr border-gray-500 p-4">
            <h3 className="text-white font-semibold mb-4">{data.message}</h3>
            <div className="flex items-center space-x-4">
             <MdEmail />
             <span className=" text-hover hover:cursor-pointer text-gray-400">{data.email}</span>
            </div>
            <div className="flex items-center space-x-4 mt-2">
              <FaPhoneAlt />
              <span className=" text-hover hover:cursor-pointer text-gray-400">{data.phone }</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactMe;
