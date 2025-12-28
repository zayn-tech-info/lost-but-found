import { motion } from "motion/react";
import { Search, MapPin } from "lucide-react";

const Herosection = () => {
  return (
    <div className="relative w-full min-h-[80vh] bg-white flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-300 bg-green-100 text-black-600 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-geen-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Campus-driven Lost & Found
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-slate-900 mb-6 font-sans">
            Lost but{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-600/30">
              Found.
            </span>
          </h1>

          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Reuniting you with your belongings. The fastest way to report,
            search, and recover missing items in your community.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10"
        >
          <div className="relative max-w-2xl mx-auto group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600/50 to-green-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative flex items-center bg-white p-2 rounded-xl border border-slate-200 shadow-sm transition-all focus-within:shadow-md focus-within:border-green-300">
              <Search className="ml-4 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search for keys, wallet, iPhone..."
                className="w-full py-3 pl-3 pr-4 text-slate-700 bg-transparent placeholder:text-slate-400 focus:outline-none text-lg"
              />
              <button className="hidden sm:block px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-black transition-colors shadow-lg">
                Search
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="px-8 py-3.5 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition duration-200 shadow-green-500/25 shadow-lg flex items-center gap-2">
            I Lost Something
          </button>
          <button className="px-8 py-3.5 rounded-full bg-white text-slate-700 font-semibold border border-slate-200 hover:bg-slate-50 transition duration-200 shadow-sm flex items-center gap-2">
            I Found Something
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Herosection;
