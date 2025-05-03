
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`w-full fixed top-0 z-50 transition-all duration-300 font-poppins 
      ${isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-xl md:text-2xl font-semibold text-tech-gray">
              <span className="text-tech-blue">Newby</span> Tech Solutions
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-tech-gray hover:text-tech-blue font-medium">About</a>
            <a href="#services" className="text-tech-gray hover:text-tech-blue font-medium">Services</a>
            <a href="#contact" className="text-tech-gray hover:text-tech-blue font-medium">Contact</a>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Button className="bg-tech-blue hover:bg-tech-darkblue transition-colors">
              Get Support
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <a href="#about" className="text-tech-gray hover:text-tech-blue font-medium" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#services" className="text-tech-gray hover:text-tech-blue font-medium" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#contact" className="text-tech-gray hover:text-tech-blue font-medium" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              <Button className="bg-tech-blue hover:bg-tech-darkblue transition-colors w-full">
                Get Support
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
