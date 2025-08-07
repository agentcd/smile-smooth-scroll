import { DentalButton } from "@/components/ui/dental-button";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";
import heroImage from "@/assets/dental-hero.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById("services");
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
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern dental clinic interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-dental-primary/20"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-dental-primary-light px-4 py-2 rounded-full mb-6">
              <Shield className="w-4 h-4 text-dental-primary" />
              <span className="text-dental-primary font-medium text-sm">
                World-Class Dental Care
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-800 mb-6 leading-tight">
              Gentle &{" "}
              <span className="bg-gradient-to-r from-dental-primary to-dental-accent bg-clip-text text-transparent">
                Professional
              </span>{" "}
              Dental Care
            </h1>

            <p className="text-xl text-neutral-600 mb-8 max-w-xl text-balance">
              Experience exceptional dental care in a comfortable, modern
              environment. Our expert team is dedicated to your oral health and
              beautiful smile.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <DentalButton
                variant="hero"
                size="xl"
                onClick={scrollToContact}
                className="group"
              >
                Book Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </DentalButton>
              <DentalButton
                variant="outline"
                size="xl"
                onClick={scrollToServices}
              >
                Our Services
              </DentalButton>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-dental-primary-light rounded-dental mb-3 mx-auto">
                  <Clock className="w-6 h-6 text-dental-primary" />
                </div>
                <div className="text-2xl font-bold text-dental-primary">15+</div>
                <div className="text-sm text-neutral-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-dental-primary-light rounded-dental mb-3 mx-auto">
                  <Award className="w-6 h-6 text-dental-primary" />
                </div>
                <div className="text-2xl font-bold text-dental-primary">5000+</div>
                <div className="text-sm text-neutral-600">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-dental-primary-light rounded-dental mb-3 mx-auto">
                  <Shield className="w-6 h-6 text-dental-primary" />
                </div>
                <div className="text-2xl font-bold text-dental-primary">24/7</div>
                <div className="text-sm text-neutral-600">Emergency Care</div>
              </div>
            </div>
          </div>

          {/* Visual Element - can be image or animation space */}
          <div className="lg:block hidden">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-dental-primary/20 to-dental-accent/20 rounded-dental-lg blur-3xl"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-dental-lg p-8 shadow-dental-lg">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-neutral-800 mb-4">
                    Book Your Visit
                  </h3>
                  <p className="text-neutral-600 mb-6">
                    Schedule your consultation today and take the first step
                    towards optimal oral health.
                  </p>
                  <DentalButton
                    variant="primary"
                    size="lg"
                    onClick={scrollToContact}
                    className="w-full"
                  >
                    Schedule Appointment
                  </DentalButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;