const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#282c33] text-[#abb2bf] font-['Fira_Code'] p-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-[#c778dd] mb-4 animate-bounce">
          404
        </h1>

        <h2 className="text-4xl font-bold text-white mb-4">Page Not Found</h2>

        <p className="text-lg text-gray-400 mb-8">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <a
          href="/"
          className="inline-block px-8 py-4 text-lg border rounded-md border-[#c778dd] text-[#c778dd] hover:bg-[#c778dd] hover:text-white transition-colors duration-300 font-semibold"
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
