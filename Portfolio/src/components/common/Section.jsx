const Section = ({ id, title, ftoggle = false, children }) => {
  return (
    <section id={id} className="py-16 md:py-24">
      <div className="container">
        {title && (
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              <span className="text-purple">#</span> {title}
              <span className="text-purple mx-4">------------------------</span>
            </h2>
            
          </div>
        )}
        <div
          className={
            ftoggle
              ? "container flex flex-col-reverse md:flex-row items-center gap-12 relative"
              : "container"
          }
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
