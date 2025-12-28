export const CallToAction = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-6">
          Lost something on campus?
        </h2>
        <p className="text-xl text-slate-600 mb-10">
          Don't panic. Thousands of items have been returned.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-4 bg-green-600 text-white rounded-full font-bold shadow-xl shadow-green-200 hover:bg-green-700 transition-transform hover:-translate-y-1">
            Report Lost Item
          </button>
          <button className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-bold hover:bg-slate-50 transition-colors">
            I Found Something
          </button>
        </div>
      </div>
    </section>
  );
};
