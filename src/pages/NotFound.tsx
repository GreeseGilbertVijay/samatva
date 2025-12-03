import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-9xl font-bold text-orange-500 mb-4 animate-pulse">404</h1>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-700">
            <h2 className="text-3xl font-semibold text-white mb-4">Page Not Found</h2>
            <p className="text-white dark:text-slate-300 mb-8">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200"
              >
                <Home className="w-5 h-5 mr-2" />
                Return Home
              </a>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors duration-200"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
