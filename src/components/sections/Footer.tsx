import { Phone, Mail, Clock, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
  };

  return (
    <footer className="bg-neutral-800 text-white py-16">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-dental-primary to-dental-accent rounded-dental flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Aether Dental</h3>
                <p className="text-neutral-400 text-sm -mt-1">Studios</p>
              </div>
            </div>
            <p className="text-neutral-300 mb-6 max-w-md leading-relaxed">
              Providing exceptional dental care in Beverly Hills with a focus on
              gentle treatment, advanced technology, and beautiful results.
            </p>
            <div className="flex space-x-4">
              <a
                href="tel:555-123-SMILE"
                className="flex items-center space-x-2 text-dental-accent hover:text-dental-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-semibold">(555) 123-SMILE</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", id: "hero" },
                { name: "Services", id: "services" },
                { name: "Our Team", id: "team" },
                { name: "Contact", id: "contact" },
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-neutral-300 hover:text-dental-accent transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-dental-accent mt-0.5 flex-shrink-0" />
                <span className="text-neutral-300 text-sm">
                  123 Wellness Boulevard<br />
                  Beverly Hills, CA 90210
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-dental-accent flex-shrink-0" />
                <a
                  href="mailto:hello@aetherdental.com"
                  className="text-neutral-300 hover:text-dental-accent transition-colors text-sm"
                >
                  hello@aetherdental.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-dental-accent mt-0.5 flex-shrink-0" />
                <div className="text-neutral-300 text-sm">
                  <div>Mon-Fri: 8AM-6PM</div>
                  <div>Sat: 9AM-4PM</div>
                  <div>Sun: Emergency only</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-400 text-sm">
              © {currentYear} Aether Dental Studios. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-neutral-400 hover:text-dental-accent transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-dental-accent transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="tel:555-911-HELP"
                className="text-red-400 hover:text-red-300 transition-colors font-semibold"
              >
                Emergency: (555) 911-HELP
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;