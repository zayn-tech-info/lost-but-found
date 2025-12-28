import { motion } from "motion/react";
import { MapPin, ArrowRight } from "lucide-react";

export const RecentItems = () => {
  const items = [
    {
      type: "Lost",
      name: "iPhone 13 Pro",
      location: "Library, Floor 2",
      time: "2 hours ago",
      color: "bg-red-50 text-red-600 border-red-100",
    },
    {
      type: "Found",
      name: "Student ID Card",
      location: "Main Cafeteria",
      time: "5 hours ago",
      color: "bg-green-50 text-green-600 border-green-100",
    },
    {
      type: "Lost",
      name: "Black Northface Bag",
      location: "Lecture Hall A",
      time: "1 day ago",
      color: "bg-red-50 text-red-600 border-red-100",
    },
    {
      type: "Found",
      name: "Silver Water Bottle",
      location: "Science Block",
      time: "1 day ago",
      color: "bg-green-50 text-green-600 border-green-100",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              Recent Activity
            </h2>
            <p className="text-slate-500">
              Latest lost and found items on campus.
            </p>
          </div>
          <button className="text-green-600 font-semibold hover:text-green-700 flex items-center gap-1 transition-colors">
            View all items <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-slate-200 rounded-xl p-4 hover:border-green-200 hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className="aspect-square bg-slate-100 rounded-lg mb-4 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-sm">
                  No Image
                </div>
                <span
                  className={`absolute top-2 left-2 px-2 py-1 rounded-md text-xs font-medium border ${item.color}`}
                >
                  {item.type}
                </span>
              </div>
              <h3 className="font-semibold text-slate-900 group-hover:text-green-600 transition-colors">
                {item.name}
              </h3>
              <div className="mt-2 text-sm text-slate-500 flex items-center gap-2">
                <MapPin className="w-3 h-3" /> {item.location}
              </div>
              <div className="mt-1 text-xs text-slate-400">{item.time}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
