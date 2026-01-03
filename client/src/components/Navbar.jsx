import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, MapPin, PlusCircle, Home } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "Lost Items", path: "/lost", icon: Search },
    { name: "Found Items", path: "/found", icon: MapPin },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-white/20 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
        >
          Lost & Found
        </Link>

        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            const Icon = link.icon;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "relative flex items-center gap-2 text-sm font-medium transition-colors duration-300",
                  isActive
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-500"
                )}
              >
                <Icon size={18} />
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile menu button omitted for brevity but container layout preserved */}
        <div className="flex md:hidden">
          {/* Simple placeholder for mobile */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
