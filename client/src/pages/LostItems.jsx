import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Calendar, User, Search, Loader } from "lucide-react";

const LostItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/lost")
      .then((res) => {
        setItems(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Lost Items</h2>
          <p className="text-gray-500">
            Help these items find their way back home.
          </p>
        </div>
        <Link
          to="/post-lost"
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl shadow-lg shadow-red-500/30 transition transform hover:-translate-y-1 font-medium flex items-center gap-2"
        >
          <Search size={20} /> Report Lost
        </Link>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Loader className="animate-spin text-red-500" size={48} />
        </div>
      ) : items.length === 0 ? (
        <div className="text-center py-20 bg-white/50 rounded-3xl border border-dashed border-gray-300">
          <p className="text-xl text-gray-500">
            No lost items reported yet. That's good news!
          </p>
        </div>
      ) : (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {items.map((item) => (
            <motion.div
              variants={itemAnim}
              key={item._id}
              whileHover={{ y: -8 }}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-red-500 transition-colors line-clamp-1">
                  {item.itemName}
                </h3>
                <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full font-medium">
                  LOST
                </span>
              </div>

              <p className="text-gray-600 mb-6 text-sm leading-relaxed line-clamp-2 min-h-[40px]">
                {item.description}
              </p>

              <div className="space-y-3 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <div className="p-1.5 bg-gray-100 rounded-lg">
                    <MapPin size={14} />
                  </div>
                  <span>{item.locationLost}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <div className="p-1.5 bg-gray-100 rounded-lg">
                    <Calendar size={14} />
                  </div>
                  <span>{new Date(item.dateLost).toLocaleDateString()}</span>
                </div>
                <div className="mt-4 pt-3 flex items-center gap-2">
                  <User size={16} className="text-gray-400" />
                  <span className="text-sm font-semibold text-gray-700">
                    Contact:{" "}
                  </span>
                  <a
                    href={`mailto:${item.contactInfo}`}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    {item.contactInfo}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default LostItems;
