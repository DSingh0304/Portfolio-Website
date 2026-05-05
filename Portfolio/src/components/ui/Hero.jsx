import { heroData }  from "../../data/heroData";

const Hero = ({ data = heroData }) => {
  const buttonClassName =
    "inline-block px-5 sm:px-6 py-2.5 sm:py-3 border border-purple hover:text-white transition-colors font-semibold";
  const primaryLabels = new Set(["Medium", "X"]);
  const primaryLinks = (data.profileLinks || []).filter((link) => primaryLabels.has(link.label));
  const secondaryLinks = (data.profileLinks || []).filter((link) => !primaryLabels.has(link.label));

  return (
    <>
      <main id={data.id} className="py-10 sm:py-14 md:py-24">
        <div className="container flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 relative">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="md:ml-20">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                {data.headingLines.map((seg , i) => (
                  <span key={i} className={seg.accent? "text-purple":undefined} >
                    {seg.text}
                    {i == 1 && <br className="hidden md:block" ></br>}
                  </span>
                ))}
              </h1>
              <p className="text-gray-400 mb-6 sm:mb-8 max-w-md mx-auto md:mx-0">
                {data.subText}
              </p>
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 flex-wrap justify-center md:justify-start">
                {data.resumeUrl && (
                  <a
                    href={data.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
        className={buttonClassName}
                  >
                    Resume
                  </a>
                )}
                {primaryLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className={buttonClassName}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              {secondaryLinks.length > 0 && (
                <div className="mt-4 flex flex-wrap items-center gap-3 sm:gap-4 justify-center md:justify-start">
                  {secondaryLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className={buttonClassName}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-start relative z-10">
            <div className="hero-prop hidden lg:block relative w-40 sm:w-56 md:w-72 mx-2 h-40 sm:h-56 md:h-72">
              <img
                src={data.imageMap.prop1}
                alt="Dotted Design"
                className="absolute bottom-2 right-2 max-w-full h-auto"
              ></img>
            </div>
            <div className="relative w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80">
              <img
                src={data.imageMap.profile}
                alt="A profile picture of Deep"
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-200 max-w-full h-auto"
              ></img>
            </div>
            <div className="hero-prop hidden lg:block relative mx-2 w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72">
              <img src={data.imageMap.prop2} alt="Logo With Bg Removed" className="max-w-full h-auto" ></img>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
