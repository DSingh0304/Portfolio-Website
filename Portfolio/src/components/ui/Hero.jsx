import { heroData }  from "../../data/heroData";
import { useScmmothScroll } from "../../hooks/useSmoothScroll"

const Hero = ({ data = heroData }) => {
  const scrollTo = useScmmothScroll;

  const handleCTA = (e) => {
    if(data.cta.to.startsWith('#')){
      e.preventDefault();
      scrollTo(data.cta.to);
    }

  }

  return (
    <>
      <main id={data.id} className="py-16 md:py-24">
        <div className="container flex flex-col-reverse md:flex-row items-center justify-between gap-12 relative">
          <div className="md:w-1/2 text-center md:text-left">
            <div className="ml-20">
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                {data.headingLines.map((seg , i) => (
                  <span key={i} className={seg.accent? "text-purple":undefined} >
                    {seg.text}
                    {i == 1 && <br className="hidden md:block" ></br>}
                  </span>
                ))}
              </h1>
              <p className="text-gray-400 mb-8 max-w-md mx-auto md:mx-0">
                {data.subText}
              </p>
              <a href={data.cta.to} onClick={handleCTA}  className="px-6 py-3 border  border-purple hover:text-white transition-colors font-semibold">
                {data.cta.label}
              </a>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center md:justify-start relative z-10">
            <div className="relative w-72 mx-2 h-72 relative">
              <img
                src={data.imageMap.prop1}
                alt="Dotted Design"
                className="absolute bottom-2 right-2"
              ></img>
            </div>
            <div className="relative w-72 h-72">
              <img
                src={data.imageMap.profile}
                alt="A profile picture of Deep"
                className=" rounded-lg shadow-lg scale-130 hover:scale-140 hover:cursor-pointer"
              ></img>
            </div>
            <div className="relative mx-2 w-72 h-72">
              <img src={data.imageMap.prop2} alt="Logo With Bg Removed" className="" ></img>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
