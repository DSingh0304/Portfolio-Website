import { useState } from "react";
import emailjs from "emailjs-com";

const SERVICE_ID = "service_7yocpfd";
const TEMPLATE_ID = "template_v95aq5b";
const USER_ID = "gzkdGRLKVR8bPK63y";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "", honey: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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

    // 🛡️ Honeypot Spam Prevention Check
    if (form.honey) {
      // Quietly succeed to block the automated spam script without consuming EmailJS quota
      setSubmitted(true);
      return;
    }

    setLoading(true);
    
    // Construct the data to send (excluding the honeypot)
    const emailData = {
      name: form.name,
      email: form.email,
      message: form.message
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, emailData, USER_ID)
      .then(
        () => {
          setLoading(false);
          setSubmitted(true);
        },
        (err) => {
          setLoading(false);
          setError("Failed to send message. Please try again.");
          console.error(err);
        }
      );
  };

  if (submitted) {
    return (
      <div className="flex w-full justify-center px-4">
        <div className="w-full sm:w-4/5 md:w-2/3 lg:w-1/2 p-8 text-center bg-[#282c33]/80 backdrop-blur rounded-lg shadow-lg border border-green-500/40 animate-slideDown">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-500/10 text-green-400 mb-4 border border-green-500/30">
            <svg
              className="h-8 w-8 animate-pulse"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Message Sent Successfully!</h3>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed">
            Thank you for reaching out! Deep Shekhar Singh will get back to you as soon as possible.
          </p>
          <button
            onClick={() => {
              setForm({ name: "", email: "", message: "", honey: "" });
              setSubmitted(false);
            }}
            className="px-6 py-2 border border-purple text-purple rounded hover:bg-purple hover:text-[#282c33] transition-all duration-300 font-semibold cursor-pointer"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full justify-center">
      <form
        className="w-full mx-4 sm:w-4/5 md:w-2/3 lg:w-1/2 p-4 sm:p-6 bg-black/30 backdrop-blur rounded-lg shadow-lg border border-purple/40"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Contact Me</h2>
        {error && <p className="text-red-400 mb-3 text-sm">{error}</p>}
        
        {/* 🛡️ Spam Bot Honeypot Field (Hidden from Real Users) */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="honey">Leave this field empty</label>
          <input
            type="text"
            name="honey"
            id="honey"
            value={form.honey}
            onChange={handleChange}
            tabIndex="-1"
            autoComplete="off"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-300 mb-1 text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded bg-gray-900 text-white border border-purple/40 focus:outline-none focus:border-purple transition-colors"
            required
            disabled={loading}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-300 mb-1 text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded bg-gray-900 text-white border border-purple/40 focus:outline-none focus:border-purple transition-colors"
            required
            disabled={loading}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-300 mb-1 text-sm font-medium">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded bg-gray-900 text-white border border-purple/40 focus:outline-none focus:border-purple transition-colors"
            required
            disabled={loading}
          />
        </div>
        <div className="w-full flex justify-center mt-6">
          <button
            type="submit"
            disabled={loading}
            className="w-fit py-2.5 px-6 cursor-pointer border border-purple font-semibold rounded transition-all duration-300 bg-white text-black md:bg-transparent md:text-white hover:bg-white hover:text-black disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-current" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
