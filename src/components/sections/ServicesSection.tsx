import { DentalButton } from "@/components/ui/dental-button";
import { Smile, Heart, Shield, Zap, Clock } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Smile,
      title: "Cosmetic Dentistry",
      description: "Transform your smile with veneers, whitening, and aesthetic treatments designed to boost your confidence.",
      price: "From ₹22,500",
      features: ["Teeth Whitening", "Porcelain Veneers", "Smile Makeovers"],
    },
    {
      icon: Heart,
      title: "Dental Implants",
      description: "Permanent tooth replacement solutions that look, feel, and function like natural teeth.",
      price: "From ₹97,500",
      features: ["Single Implants", "Full Mouth Restoration", "Same-Day Options"],
    },
    {
      icon: Shield,
      title: "Preventive Care",
      description: "Comprehensive exams, cleanings, and preventive treatments to maintain optimal oral health.",
      price: "From ₹7,500",
      features: ["Regular Cleanings", "Oral Exams", "Fluoride Treatments"],
    },
    {
      icon: Zap,
      title: "Emergency Care",
      description: "24/7 emergency dental services for urgent dental problems and pain relief.",
      price: "From ₹11,200",
      features: ["Same-Day Appointments", "Pain Management", "Urgent Repairs"],
    },
    {
      icon: Clock,
      title: "Restorative Dentistry",
      description: "Repair and restore damaged teeth with crowns, bridges, and advanced restoration techniques.",
      price: "From ₹37,500",
      features: ["Dental Crowns", "Bridges", "Root Canal Therapy"],
    },
  ];

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

  return (
    <section id="services" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-dental-primary-light px-4 py-2 rounded-full mb-6">
            <Heart className="w-4 h-4 text-dental-primary" />
            <span className="text-dental-primary font-medium text-sm">
              Our Services
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-dental-primary to-dental-accent bg-clip-text text-transparent">
              Dental Care
            </span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto text-balance">
            From routine cleanings to complex procedures, we provide the full
            spectrum of dental services with the latest technology and
            techniques.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-dental-lg p-8 shadow-dental-md hover:shadow-dental-lg transition-all duration-500 hover:-translate-y-3 hover:scale-105 group animate-slide-up transform-gpu"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-dental-primary-light rounded-dental flex items-center justify-center mb-6 group-hover:bg-dental-primary group-hover:scale-110 transition-all duration-300">
                  <IconComponent className="w-7 h-7 text-dental-primary group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-neutral-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-sm text-neutral-600"
                    >
                      <div className="w-1.5 h-1.5 bg-dental-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-dental-primary">
                    {service.price}
                  </div>
                  <DentalButton
                    variant="outline"
                    size="sm"
                    onClick={scrollToContact}
                    className="group-hover:bg-dental-primary group-hover:text-white group-hover:border-dental-primary"
                  >
                    Book Now
                  </DentalButton>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-dental-primary to-dental-accent rounded-dental-lg p-12 text-white animate-scale-in">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Not Sure Which Service You Need?
          </h3>
          <p className="text-dental-primary-light mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our experienced team. We'll assess your
            needs and recommend the best treatment plan for your oral health
            goals.
          </p>
          <DentalButton
            variant="secondary"
            size="xl"
            onClick={scrollToContact}
            className="bg-white text-dental-primary hover:bg-neutral-100"
          >
            Free Consultation
          </DentalButton>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;