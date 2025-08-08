import { useState } from "react";
import { DentalButton } from "@/components/ui/dental-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle 
} from "lucide-react";

// Dynamic Map Component
interface DynamicMapProps {
  address: string;
  mapUrl?: string;
}

const DynamicMap = ({ address, mapUrl }: DynamicMapProps) => {
  if (!mapUrl) {
    return (
      <div className="w-full h-full bg-dental-primary-light rounded-dental flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-12 h-12 text-dental-primary mx-auto mb-4" />
          <p className="text-dental-primary font-semibold">
            Map Loading...
          </p>
          <p className="text-neutral-600 text-sm mt-2">{address}</p>
        </div>
      </div>
    );
  }

  return (
    <iframe
      src={mapUrl}
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title={`Map showing location: ${address}`}
      className="rounded-dental"
    />
  );
};
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: "Appointment Request Sent!",
        description: "We'll contact you within 24 hours to confirm your appointment.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "(555) 123-SMILE",
      link: "tel:555-123-SMILE",
    },
    {
      icon: Mail,
      title: "Email",
      details: "hello@aetherdental.com",
      link: "mailto:hello@aetherdental.com",
    },
    {
      icon: MapPin,
      title: "Address",
      details: "123 Wellness Boulevard, Beverly Hills, CA 90210",
      link: "https://maps.google.com/?q=123+Wellness+Boulevard+Beverly+Hills+CA",
    },
  ];

  const hours = [
    { day: "Monday - Friday", time: "8AM - 6PM" },
    { day: "Saturday", time: "9AM - 4PM" },
    { day: "Sunday", time: "Emergency Only" },
  ];

  return (
    <section id="contact" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-dental-primary-light px-4 py-2 rounded-full mb-6">
            <Mail className="w-4 h-4 text-dental-primary" />
            <span className="text-dental-primary font-medium text-sm">
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">
            Schedule Your{" "}
            <span className="bg-gradient-to-r from-dental-primary to-dental-accent bg-clip-text text-transparent">
              Appointment
            </span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto text-balance">
            Ready to transform your smile? Contact us today to schedule your
            consultation with our expert dental team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <div className="bg-white rounded-dental-lg p-8 shadow-dental-lg">
              <h3 className="text-2xl font-bold text-neutral-800 mb-6">
                Book Your Consultation
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-neutral-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-neutral-700 mb-2"
                    >
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-neutral-700 mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="Tell us about your dental needs or preferred appointment time..."
                  />
                </div>
                <DentalButton
                  type="submit"
                  variant="hero"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Request
                    </>
                  )}
                </DentalButton>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {/* Contact Details */}
            <div className="bg-white rounded-dental-lg p-8 shadow-dental-lg">
              <h3 className="text-2xl font-bold text-neutral-800 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info) => {
                  const IconComponent = info.icon;
                  return (
                    <a
                      key={info.title}
                      href={info.link}
                      target={info.title === "Address" ? "_blank" : undefined}
                      rel={info.title === "Address" ? "noopener noreferrer" : undefined}
                      className="flex items-start space-x-4 p-4 rounded-dental hover:bg-dental-primary-light transition-colors duration-200 group"
                    >
                      <div className="w-12 h-12 bg-dental-primary-light rounded-dental flex items-center justify-center flex-shrink-0 group-hover:bg-dental-primary transition-colors duration-200">
                        <IconComponent className="w-6 h-6 text-dental-primary group-hover:text-white transition-colors duration-200" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">
                          {info.title}
                        </h4>
                        <p className="text-neutral-600">{info.details}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-dental-lg p-8 shadow-dental-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-dental-primary-light rounded-dental flex items-center justify-center">
                  <Clock className="w-6 h-6 text-dental-primary" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-800">
                  Office Hours
                </h3>
              </div>
              <div className="space-y-4">
                {hours.map((schedule) => (
                  <div
                    key={schedule.day}
                    className="flex justify-between items-center py-2 border-b border-neutral-100 last:border-b-0"
                  >
                    <span className="text-neutral-700 font-medium">
                      {schedule.day}
                    </span>
                    <span className="text-dental-primary font-semibold">
                      {schedule.time}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-dental-primary-light rounded-dental">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-dental-primary" />
                  <span className="text-dental-primary font-semibold">
                    24/7 Emergency Care Available
                  </span>
                </div>
              </div>
            </div>

            {/* Dynamic Map */}
            <div className="bg-white rounded-dental-lg p-8 shadow-dental-lg">
              <h3 className="text-2xl font-bold text-neutral-800 mb-6">
                Find Us
              </h3>
              <div className="w-full h-64 rounded-dental overflow-hidden shadow-dental-md">
                <DynamicMap 
                  address="123 Wellness Boulevard, Beverly Hills, CA 90210"
                  mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.6384394568375!2d-118.39862878479566!3d34.101610880600985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bbc85b3b8c85%3A0x1f2e0b0b0b0b0b0b!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1640995200000!5m2!1sen!2sus"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;