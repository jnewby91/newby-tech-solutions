
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      content: "Justin helped me set up our office network and Office 365. He was patient, explained everything clearly, and the pricing was very fair. Highly recommend!",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Homeowner",
      content: "Had issues with my home WiFi for months. Justin diagnosed and fixed the problem in under an hour. Great service and very knowledgeable.",
      rating: 5
    },
    {
      name: "Lisa Martinez",
      role: "Freelancer",
      content: "Justin built our company website and it looks fantastic. He's professional, responsive, and delivered exactly what we needed.",
      rating: 5
    },
    {
      name: "Robert Thompson",
      role: "Retiree",
      content: "Needed help with my new iPad setup. Justin was incredibly patient and taught me everything I needed to know. Will definitely call again!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white font-poppins">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-tech-gray mb-4">What Clients Say</h2>
          <div className="w-20 h-1 bg-tech-blue mx-auto mb-6"></div>
          <p className="text-lg text-tech-gray/80 max-w-2xl mx-auto">
            Real feedback from satisfied clients who've experienced our personalized tech support.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-tech-lightgray p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-tech-gray/80 mb-4 italic">
                "{testimonial.content}"
              </blockquote>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="font-semibold text-tech-gray">{testimonial.name}</div>
                <div className="text-sm text-tech-gray/60">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-tech-lightgray p-6 rounded-lg max-w-3xl mx-auto">
            <p className="text-tech-gray/80 mb-4">
              Ready to experience the same quality service? Get in touch today for your tech support needs.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-tech-blue hover:bg-tech-darkblue text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Get Your Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
