
import { Smartphone, Tablet, MonitorSmartphone, Printer, ArrowRightCircle, Wifi, Database, Computer, Briefcase } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Services = () => {
  const consumerServices = [
    {
      title: "Smartphone Assistance",
      price: "$20",
      description: "Help with iPhones, Android devices, smartwatches, password recovery, photo backups, and account syncs.",
      icon: <Smartphone className="h-8 w-8" />,
      features: ["Password recovery", "Photo backups", "Account sync", "Step-by-step guidance"]
    },
    {
      title: "Tablet / iPad Setup",
      price: "$30",
      description: "Personalized setup of your new tablet or iPad.",
      icon: <Tablet className="h-8 w-8" />,
      features: ["Account sign-in", "Wi-Fi connection", "App installation", "Email setup", "Device syncing", "Optional: Parental controls"]
    },
    {
      title: "Custom PC Builds",
      price: "$75–$100",
      description: "Assembly and configuration of a custom PC or Linux machine tailored to your needs. (Parts not included)",
      icon: <Computer className="h-8 w-8" />,
    },
    {
      title: "RAM Upgrade",
      price: "$30",
      description: "I'll install and configure new RAM in your laptop or desktop. (Includes basic system optimization if needed.)",
      icon: <MonitorSmartphone className="h-8 w-8" />,
    },
    {
      title: "Troubleshooting & Remote Support",
      price: "$35/hour",
      description: "Remote support via appointment for PC/Mac issues, consultations, or advice. (Max: 3 hrs)",
      icon: <ArrowRightCircle className="h-8 w-8" />,
      features: ["Efficient diagnosis", "Software issues", "System issues", "Flexible scheduling"]
    },
    {
      title: "Printer Setup & Diagnostics",
      price: "$40",
      description: "Setup, troubleshoot, and connect your new or existing printer (wired or wireless). On-site service.",
      icon: <Printer className="h-8 w-8" />,
    },
    {
      title: "Data Backup or Transfer",
      price: "$50",
      description: "Transfer data between old and new PCs, external drives, or cloud services. Includes photos, documents, and settings.",
      icon: <Database className="h-8 w-8" />,
    },
    {
      title: "Wi-Fi Setup / Router Installation",
      price: "$40–$60",
      description: "Install and configure your home Wi-Fi network. Includes router/modem setup, secure network name & password creation, and connection of essential devices.",
      icon: <Wifi className="h-8 w-8" />,
      features: ["Basic single-router setup: $40", "Mesh or multi-router setup: $60"]
    },
    {
      title: "Wi-Fi Optimization Visit",
      price: "$25",
      description: "Improve speed and stability by checking signal strength, repositioning hardware, and securing your network. (Add-on)",
      icon: <Wifi className="h-8 w-8" />,
    }
  ];

  const businessServices = [
    {
      title: "Office Technical Setup",
      price: "Starting at $150",
      description: "Configure your small office with routers, PCs, printers, email, and basic device integration.",
      icon: <Briefcase className="h-8 w-8" />,
    },
    {
      title: "Office 365 Setup & Consulting",
      price: "$100/hour",
      description: "Help with Office 365 email, user management, Teams, SharePoint, and setup tailored to your business. (First consult is free.)",
      icon: <MonitorSmartphone className="h-8 w-8" />,
    },
    {
      title: "Website Build",
      price: "$500",
      description: "Professional website tailored to your brand. Includes basic SEO, mobile optimization, and contact form. (Hosting/domain not included.)",
      icon: <Computer className="h-8 w-8" />,
    },
    {
      title: "Ongoing Tech Support",
      price: "$50/hour",
      description: "On-call remote or on-site tech support for devices, software, and systems. Flexible scheduling for businesses.",
      icon: <ArrowRightCircle className="h-8 w-8" />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-tech-lightgray font-poppins">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-tech-gray mb-4">Services & Pricing</h2>
          <div className="w-20 h-1 bg-tech-blue mx-auto mb-6"></div>
          <p className="text-lg text-tech-gray/80 max-w-2xl mx-auto">
            Professional tech support services with transparent pricing. All services include free follow-up within 48 hours if any issues arise.
          </p>
        </div>

        <Tabs defaultValue="consumer" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="consumer">Consumer Services</TabsTrigger>
            <TabsTrigger value="business">Business Services</TabsTrigger>
          </TabsList>
          
          <TabsContent value="consumer">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {consumerServices.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="business">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {businessServices.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12 bg-white p-6 rounded-lg shadow-sm max-w-3xl mx-auto">
          <p className="text-tech-gray/80 mb-4">
            Bundle pricing and monthly support retainers available upon request.
          </p>
          <a href="#contact" className="text-tech-blue hover:text-tech-darkblue font-medium">
            Contact me for custom solutions →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
