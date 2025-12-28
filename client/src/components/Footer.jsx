

export const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-green-600 rounded-lg"></div>
            <span className="text-xl font-bold text-slate-900">
              LostButFound
            </span>
          </div>
          <p className="text-slate-500 text-sm">
            The official lost and found platform for university students.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900 mb-4">Platform</h4>
          <ul className="space-y-2 text-sm text-slate-500">
            <li>
              <a href="#" className="hover:text-green-600">
                Browse Items
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600">
                How it Works
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600">
                Safety
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900 mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-slate-500">
            <li>
              <a href="#" className="hover:text-green-600">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600">
                Report a Problem
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600">
                Contact Admin
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900 mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-slate-500">
            <li>
              <a href="#" className="hover:text-green-600">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 mt-12 pt-8 border-t border-slate-200 text-center text-slate-400 text-sm">
        © {new Date().getFullYear()} LostButFound. All rights reserved.
      </div>
    </footer>
  );
};
