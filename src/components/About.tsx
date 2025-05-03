
import { Monitor, ShieldCheck } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white font-poppins">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-tech-gray mb-4">About Me</h2>
          <div className="w-20 h-1 bg-tech-blue mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-tech-gray/80 mb-6 leading-relaxed">
            I'm Justin Newby, a professional IT coordinator with over 5 years of experience supporting end users and managing enterprise software like Office 365, Maas360, Empirum, and Active Directory. I'm passionate about helping people and finding efficient, practical solutions tailored to their needs — whether at home or in a small business setting.
          </p>
          
          <p className="text-lg text-tech-gray/80 mb-10 leading-relaxed">
            I bring my professional background to individuals and local businesses at a fair and honest price.
            I strive to serve with patience, care, and transparency, and I always take the time to explain things clearly so you feel empowered — not overwhelmed.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-tech-lightgray p-6 rounded-lg flex flex-col items-center text-center">
              <div className="bg-tech-blue p-3 rounded-full mb-4">
                <Monitor className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-tech-gray mb-3">Expert Technical Knowledge</h3>
              <p className="text-tech-gray/80">
                Experience with enterprise software and systems that translates to solving your tech problems efficiently.
              </p>
            </div>
            
            <div className="bg-tech-lightgray p-6 rounded-lg flex flex-col items-center text-center">
              <div className="bg-tech-blue p-3 rounded-full mb-4">
                <ShieldCheck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-tech-gray mb-3">Honest & Transparent</h3>
              <p className="text-tech-gray/80">
                Clear communication, fair pricing, and solutions explained in terms you can understand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
