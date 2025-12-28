import { Lock, Eye, UserCheck } from "lucide-react";

export const WhyUsePlatform = () => {
  const features = [
    {
      icon: <Lock className="w-5 h-5" />,
      title: "Secure Claims",
      desc: "Proof required to claim items.",
    },
    {
      icon: <UserCheck className="w-5 h-5" />,
      title: "Campus Verified",
      desc: "Only students & staff can join.",
    },
    {
      icon: <Eye className="w-5 h-5" />,
      title: "Status Tracking",
      desc: "Know when your item is found.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-12">
          Why not just use WhatsApp?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
            >
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                {feat.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {feat.title}
              </h3>
              <p className="text-slate-600">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
