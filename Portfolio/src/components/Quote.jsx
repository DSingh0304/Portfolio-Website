const Quote = () => {
  return (
    <>
      <section className="py-16 md:py-24 relative">
        <div>
          <div>
            <div className="container relative z-10 flex flex-col max-w-3xl">
              <div className="border border-gray-300 p-6">
                <blockquote className="text-center text-xl md:text-2xl font-medium">
                  <span className="text-5xl">"</span>With great power comes
                  great electricity bill<span className="text-5xl">"</span>
                </blockquote>
              </div>
              <div className="flex justify-end">
                <span className="border p-3 border-gray-300">- Dr. Who</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Quote;
