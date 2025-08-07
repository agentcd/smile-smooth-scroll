import { DentalButton } from "@/components/ui/dental-button";
import { Star, Award, GraduationCap, Calendar } from "lucide-react";
import dentistSarah from "@/assets/dentist-sarah.jpg";
import dentistMichael from "@/assets/dentist-michael.jpg";

const TeamSection = () => {
  const team = [
    {
      name: "Dr. Sarah Johnson",
      title: "Lead Cosmetic Dentist",
      specialty: "Cosmetic & Restorative Dentistry",
      experience: "15+ years",
      rating: 4.9,
      image: dentistSarah,
      qualifications: ["DDS from Harvard", "Cosmetic Dentistry Specialist", "Invisalign Certified"],
      description: "Dr. Johnson specializes in creating beautiful, natural-looking smiles through advanced cosmetic and restorative techniques."
    },
    {
      name: "Dr. Michael Chen",
      title: "Oral Surgeon & Implant Specialist",
      specialty: "Oral Surgery & Dental Implants",
      experience: "12+ years",
      rating: 4.8,
      image: dentistMichael,
      qualifications: ["DDS from UCLA", "Oral Surgery Residency", "Implant Fellowship"],
      description: "Dr. Chen is renowned for his expertise in dental implants and complex oral surgical procedures with a gentle approach."
    }
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
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-dental-primary-light px-4 py-2 rounded-full mb-6">
            <Award className="w-4 h-4 text-dental-primary" />
            <span className="text-dental-primary font-medium text-sm">
              Our Expert Team
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-dental-primary to-dental-accent bg-clip-text text-transparent">
              Dental Experts
            </span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto text-balance">
            Our team of experienced dental professionals is committed to
            providing you with the highest quality care in a comfortable,
            welcoming environment.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="bg-card-accent rounded-dental-lg p-8 shadow-dental-md hover:shadow-dental-lg transition-all duration-300 hover:-translate-y-1 group animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Photo */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 mx-auto md:mx-0 rounded-dental-lg overflow-hidden shadow-dental">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-neutral-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-dental-primary font-semibold mb-1">
                    {member.title}
                  </p>
                  <p className="text-neutral-600 mb-4">{member.specialty}</p>

                  {/* Stats */}
                  <div className="flex justify-center md:justify-start items-center gap-6 mb-4">
                    <div className="flex items-center space-x-1">
                      <GraduationCap className="w-4 h-4 text-dental-primary" />
                      <span className="text-sm text-neutral-600">
                        {member.experience}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-semibold text-neutral-800">
                        {member.rating}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {member.description}
                  </p>

                  {/* Qualifications */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-neutral-800 mb-3">
                      Qualifications:
                    </h4>
                    <ul className="space-y-1">
                      {member.qualifications.map((qualification) => (
                        <li
                          key={qualification}
                          className="flex items-center justify-center md:justify-start text-sm text-neutral-600"
                        >
                          <div className="w-1.5 h-1.5 bg-dental-primary rounded-full mr-3"></div>
                          {qualification}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <DentalButton
                    variant="primary"
                    onClick={scrollToContact}
                    className="w-full md:w-auto"
                  >
                    <Calendar className="w-4 h-4" />
                    Book with {member.name.split(" ")[1]}
                  </DentalButton>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="bg-gradient-to-r from-dental-primary to-dental-accent rounded-dental-lg p-12 text-white text-center animate-scale-in">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            Why Choose Aether Dental Studios?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">27+</div>
              <div className="text-dental-primary-light">Years Combined Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-dental-primary-light">Successful Treatments</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9</div>
              <div className="text-dental-primary-light">Average Patient Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;