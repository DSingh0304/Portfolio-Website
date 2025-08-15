import {contact} from "../../data/contactData";
import Section from "../common/Section";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";



const ContactMe = () => {
  const data = contact;
  return (
    <Section id="contacts" title="contacts">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
  <div className="md:w-1/2 text-center md:text-left">
          <p className="text-gray-400">{data.text}</p>
        </div>
        
        <div className="md:w-1/2 w-full flex justify-center md:justify-end">
          <div className="w-full max-w-md sm:max-w-lg border bdr border-gray-500 p-4 sm:p-6 rounded-lg bg-black/30 shadow-lg">
            <h3 className="text-white font-semibold mb-3 sm:mb-4">{data.message}</h3>
            <div className="flex items-center gap-3 sm:gap-4">
             <MdEmail className="text-purple text-xl" />
             <span className=" text-hover hover:cursor-pointer text-gray-400 break-all">{data.email}</span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 mt-2">
              <FaPhoneAlt className="text-purple text-xl" />
              <span className=" text-hover hover:cursor-pointer text-gray-400">{data.phone }</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactMe;
