import { Smartphone, CreditCard, Book, Watch } from "lucide-react";

export const Categories = () => {
  const cats = [
    { name: "Phones", icon: <Smartphone className="w-6 h-6" /> },
    { name: "ID Cards", icon: <CreditCard className="w-6 h-6" /> },
    { name: "Electronics", icon: <Watch className="w-6 h-6" /> },
    { name: "Books", icon: <Book className="w-6 h-6" /> },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">
          Browse by Category
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {cats.map((c, i) => (
            <button
              key={i}
              className="flex items-center gap-3 px-6 py-4 rounded-xl border border-slate-200 hover:border-green-500 hover:bg-green-50 hover:text-green-700 transition-all text-slate-600 font-medium"
            >
              {c.icon}
              {c.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
