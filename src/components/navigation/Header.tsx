import { useState, useEffect } from "react";
import { DentalButton } from "@/components/ui/dental-button";
import { Phone, Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: "Home", id: "hero" },
    { name: "Services", id: "services" },
    { name: "Team", id: "team" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-dental-md"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer" 
            onClick={() => scrollToSection("hero")}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-dental-primary to-dental-accent rounded-dental flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-dental-primary">
                Aether Dental
              </h1>
              <p className="text-xs text-neutral-600 -mt-1">Studios</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-neutral-700 hover:text-dental-primary transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-dental-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:555-911-HELP" 
              className="flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-semibold">Emergency</span>
            </a>
            <DentalButton 
              variant="hero" 
              onClick={() => scrollToSection("contact")}
            >
              Book Now
            </DentalButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-neutral-700" />
            ) : (
              <Menu className="w-6 h-6 text-neutral-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-neutral-200 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left px-4 py-2 text-neutral-700 hover:text-dental-primary transition-all duration-300 font-medium hover:bg-dental-primary-light hover:translate-x-1"
                >
                  {item.name}
                </button>
              ))}
              <div className="flex flex-col space-y-3 px-4 pt-4 border-t border-neutral-200">
                <a 
                  href="tel:555-911-HELP" 
                  className="flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors font-semibold"
                >
                  <Phone className="w-4 h-4" />
                  <span>Emergency</span>
                </a>
                <DentalButton 
                  variant="hero" 
                  onClick={() => scrollToSection("contact")}
                  className="w-full"
                >
                  Book Now
                </DentalButton>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;