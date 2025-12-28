import { motion } from "motion/react";
import {
  FileText,
  Search,
  ShieldCheck,
  CheckCircle,
  Smartphone,
  CreditCard,
  Book,
  Watch,
  MapPin,
  Lock,
  Eye,
  UserCheck,
  ArrowRight,
} from "lucide-react";

export const HowItWorks = () => {
  const steps = [
	{
	  icon: <FileText className="w-6 h-6 text-green-600" />,
	  title: "Report",
	  description:
		"Post a lost or found item in seconds with details and photos.",
	},
	{
	  icon: <Search className="w-6 h-6 text-green-600" />,
	  title: "Match",
	  description:
		"Browse recent listings or get matched with similar items automatically.",
	},
	{
	  icon: <ShieldCheck className="w-6 h-6 text-green-600" />,
	  title: "Verify",
	  description:
		"Claim items with proof of ownership to prevent wrong handovers.",
	},
	{
	  icon: <CheckCircle className="w-6 h-6 text-green-600" />,
	  title: "Recover",
	  description: "Safely meet up or arrange a pickup to get your item back.",
	},
  ];

  return (
	<section className="py-20 bg-slate-50">
	  <div className="max-w-6xl mx-auto px-4">
		<div className="text-center mb-16">
		  <h2 className="text-3xl font-bold text-slate-900 mb-4">
			How It Works
		  </h2>
		  <p className="text-slate-600 max-w-2xl mx-auto">
			Simple steps to reunite you with your belongings safely and quickly.
		  </p>
		</div>

		<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
		  {steps.map((step, index) => (
			<motion.div
			  key={index}
			  initial={{ opacity: 0, y: 20 }}
			  whileInView={{ opacity: 1, y: 0 }}
			  viewport={{ once: true }}
			  transition={{ delay: index * 0.1 }}
			  className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-shadow"
			>
			  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
				{step.icon}
			  </div>
			  <h3 className="text-xl font-semibold text-slate-900 mb-2">
				{step.title}
			  </h3>
			  <p className="text-slate-500 leading-relaxed text-sm">
				{step.description}
			  </p>
			</motion.div>
		  ))}
		</div>
	  </div>
	</section>
  );
};