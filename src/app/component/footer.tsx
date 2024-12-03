import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-300 text-purple-900 py-2">
      <div className="container mx-auto px-4 text-center space-y-2">
        {/* Animated Text */}
        <p className="text-sm font-bold tracking-wider">
          <span className="animate-bounce inline-block">✨</span> Created with{" "}
          <FaHeart className="inline text-red-800 mx-1 animate-pulse" /> by
          Falak Naaz <span className="animate-bounce inline-block">✨</span>
        </p>

        {/* Additional Animation */}
        <p className="text-xs italic tracking-wide opacity-90 animate-slide">
          “Crafting delightful designs, one pixel at a time.”
        </p>
      </div>
    </footer>
  );
};

export default Footer;
