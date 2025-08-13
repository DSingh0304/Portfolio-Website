import { contact } from "../../data/contactData";

const ContactMe = () => {
  const data = contact;
  return (
    <>
      <section id="contacts" className="py-16 md:py-24">
        <div className="container">
          <div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
              <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  <span className="text-purple">#contacts</span>
                  <span className="text-purple mx-4">
                    ----------------------
                  </span>
                </h2>
                <p className="my-4 text-gray-400 mb-6 max-w-md mx-auto md:mx-0">
                  {data.text}
                </p>
              </div>
              <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="border-2 border-gray-700 p-6  inline-block">
                  <h3 className="text-xl font-bold text-white mb-4">
                    {data.message}
                  </h3>
                  <div className="space-y-3 text-gray-400">
                    <a
                      href="mailto:elias@elias.me"
                      className="flex items-center space-x-2 text-hover transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span>{data.email}</span>
                    </a>
                    <a
                      href="tel:+918840125626"
                      className="flex items-center space-x-2 text-hover transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 8v8m-4-4v4m-4-4v4M4 8h16a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4a2 2 0 012-2z"
                        />
                      </svg>
                      <span>{data.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr></hr>
    </>
  );
};

export default ContactMe;
