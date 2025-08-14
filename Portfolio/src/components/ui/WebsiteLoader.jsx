import { FaSpinner } from "react-icons/fa";

const WebsiteLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#282c33]">
      <div className="relative">
        <div
          className="
            w-20 h-20
            rounded-full
            border-4 border-[#c778dd] border-opacity-30
            animate-spin
          "
          style={{ borderTopColor: "#c778dd" }}
        ></div>
        <FaSpinner
          className="absolute inset-0 m-auto text-[#c778dd] text-3xl animate-spin-slow"
          aria-label="Loading"
        />
      </div>
      <span className="mt-6 text-[#c778dd] text-lg font-mono tracking-wide">
        Loading Portfolio...
      </span>
    </div>
  );
};

export default WebsiteLoader;
