import { DentalButton } from "@/components/ui/dental-button";
import { Phone, Clock, AlertCircle } from "lucide-react";

const EmergencyBanner = () => {
  return (
    <section className="bg-gradient-to-r from-red-500 to-red-600 py-12">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-white">
          {/* Emergency Info */}
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
              <AlertCircle className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Dental Emergency?
              </h3>
              <p className="text-red-100 text-lg">
                We're here 24/7 for urgent dental care
              </p>
            </div>
          </div>

          {/* Emergency Details */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex items-center space-x-3 text-center sm:text-left">
              <Clock className="w-6 h-6 text-red-200" />
              <div>
                <div className="font-semibold text-lg">Available 24/7</div>
                <div className="text-red-200 text-sm">Even weekends & holidays</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:555-911-HELP">
                <DentalButton
                  variant="emergency"
                  size="xl"
                  className="bg-white text-red-600 hover:bg-red-50 shadow-lg font-bold"
                >
                  <Phone className="w-5 h-5" />
                  Call (555) 911-HELP
                </DentalButton>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyBanner;