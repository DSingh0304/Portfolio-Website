import { useState } from "react";
import emailjs from "emailjs-com"

const SERVICE_ID = "service_7yocpfd";
const TEMPLATE_ID = "template_v95aq5b";
const USER_ID = "gzkdGRLKVR8bPK63y";


const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all fields.");
      return;
    }
    emailjs
    .send(SERVICE_ID , TEMPLATE_ID , form , USER_ID)
    .then(
        () => {
            setSubmitted(true);
        },
        (err) => {
          setError("Failed to send message. Please try again.");
          console.log(err);
        }
    )
    
  };

  if (submitted) {
    return (
      <div className="p-6 text-center text-green-400">
        Thank you for reaching out! I'll get back to you soon.
      </div>
    );
  }

  return (
    <div className="flex w-full justify-center">
      <form
        className="w-full mx-4 sm:w-4/5 md:w-2/3 lg:w-1/2 p-4 sm:p-6 bg-black/30 rounded-lg shadow-lg border border-purple/40"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Contact Me</h2>
        {error && <p className="text-red-400 mb-2">{error}</p>}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-300 mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded bg-gray-900 text-white border border-purple/40 focus:outline-none focus:border-purple"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded bg-gray-900 text-white border border-purple/40 focus:outline-none focus:border-purple"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-300 mb-1">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded bg-gray-900 text-white border border-purple/40 focus:outline-none focus:border-purple"
            required
          />
        </div>
        <div className="w-full flex justify-center">
        <button
          type="submit"
          className="w-fit py-2 px-4 cursor-pointer border border-purple font-semibold rounded transition-colors bg-white text-black md:bg-transparent md:text-white hover:bg-white hover:text-black"
        >
          Send Message
        </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
