
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-tech-gray text-white py-12 font-poppins">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-semibold mb-2">
              <span className="text-tech-blue">Newby</span> Tech Solutions
            </h2>
            <p className="text-gray-300 text-sm">
              Professional IT support and consulting services
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <button 
              onClick={scrollToTop}
              className="inline-flex items-center text-gray-300 hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              <span className="mr-2">Back to Top</span>
              <ArrowUp className="h-4 w-4" />
            </button>
            <p className="text-gray-400 text-sm mt-4">
              &copy; {new Date().getFullYear()} Newby Tech Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
