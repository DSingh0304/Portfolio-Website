const Hero = () => {
  return (
    <>
      <main className="py-16 md:py-24">
        <div className="container flex flex-col-reverse md:flex-row items-center justify-between gap-12 relative">
          <div className="md:w-1/2 text-center md:text-left">
            <div className="ml-20">
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                Deep is a <span className="text-purple">software developer</span>{" "}
                and
                <br />
                <span className="text-purple">ML enthusiast</span>
              </h1>
              <p className="text-gray-400 mb-8 max-w-md mx-auto md:mx-0">
                He crafts responsive websites where technologies meet
                creativity.
              </p>
              <button className="px-6 py-3 border rounded-md border-purple hover:text-white transition-colors font-semibold">
                Contact me!!
              </button>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center md:justify-start relative z-10">
            <div className="relative w-72 h-72 relative">
              <img
                src="./public/prop-1.webp"
                alt="prop"
                className="absolute bottom-2 right-2"
              />
            </div>
            <div className="relative w-72 h-72">
              <img
                src="./public/Deep.webp"
                alt="A profile picture of Elias"
                className="rounded-lg shadow-lg hover:scale-110 hover:cursor-pointer"
              />
            </div>
            <div className="relative w-72 h-72">
              <img src="./public/prop-2.webp" alt="prop" className="" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
