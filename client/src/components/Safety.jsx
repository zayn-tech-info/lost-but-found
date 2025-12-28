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

export const SafetySection = () => {
  return (
	<section className="py-16 bg-slate-900 text-white">
	  <div className="max-w-4xl mx-auto px-4 text-center">
		<div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
		  <ShieldCheck className="w-8 h-8 text-green-400" />
		</div>
		<h2 className="text-3xl font-bold mb-4">Your Safety is Our Priority</h2>
		<p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
		  Found items can be reported anonymously. Personal contact details are
		  never exposed publicly. Admins moderate almost all listings to ensure
		  clarity and trust.
		</p>
		<div className="flex justify-center gap-6 text-sm text-slate-400">
		  <span className="flex items-center gap-2">
			<CheckCircle className="w-4 h-4 text-green-400" /> Verified Students
		  </span>
		  <span className="flex items-center gap-2">
			<CheckCircle className="w-4 h-4 text-green-400" /> dispute
			Resolution
		  </span>
		</div>
	  </div>
	</section>
  );
};