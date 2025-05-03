
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-tech-lightgray to-white font-poppins">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tech-gray leading-tight mb-6">
            Professional Tech Support <br className="hidden md:block" />
            <span className="text-tech-blue">When You Need It</span>
          </h1>
          
          <p className="text-lg md:text-xl text-tech-gray/80 max-w-2xl mb-10">
            Personalized IT solutions for individuals and small businesses. 
            Expert assistance with patience, care, and transparent pricing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-tech-blue hover:bg-tech-darkblue transition-colors text-white px-8 py-6 text-lg"
              onClick={scrollToServices}
            >
              View Services
            </Button>
            <Button 
              variant="outline" 
              className="border-tech-blue text-tech-blue hover:text-tech-darkblue hover:border-tech-darkblue transition-colors px-8 py-6 text-lg"
              asChild
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
          
          <div className="mt-16 animate-bounce">
            <ArrowDown className="h-8 w-8 text-tech-blue/70" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
