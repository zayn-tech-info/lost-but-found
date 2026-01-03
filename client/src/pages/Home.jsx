import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, MapPin, ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-purple-400/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-400/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight mb-6">
          Find what you{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
            lost
          </span>
          . <br />
          Return what you{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">
            found
          </span>
          .
        </h1>

        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          The campus community hub for reconnecting people with their
          belongings. Simple, fast, and community-driven.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center w-full max-w-2xl mx-auto">
          <Link to="/post-lost" className="group relative flex-1">
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/80 backdrop-blur-lg border border-red-100 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-left overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Search size={100} className="text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                I Lost Something{" "}
                <ArrowRight
                  size={20}
                  className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-red-500"
                />
              </h3>
              <p className="text-gray-500 text-sm">
                Post a lost item alert to the community immediately.
              </p>
              <div className="mt-6 flex items-center gap-2 text-red-600 font-semibold">
                Report Lost Item
              </div>
            </motion.div>
          </Link>

          <Link to="/post-found" className="group relative flex-1">
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/80 backdrop-blur-lg border border-green-100 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-left overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <MapPin size={100} className="text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                I Found Something{" "}
                <ArrowRight
                  size={20}
                  className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-green-500"
                />
              </h3>
              <p className="text-gray-500 text-sm">
                Help return an item to its rightful owner.
              </p>
              <div className="mt-6 flex items-center gap-2 text-green-600 font-semibold">
                Report Found Item
              </div>
            </motion.div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
