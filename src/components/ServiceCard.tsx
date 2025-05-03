
import { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  icon: ReactNode;
  features?: string[];
}

const ServiceCard = ({ title, price, description, icon, features }: ServiceCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 font-poppins">
      <div className="flex items-start gap-4">
        <div className="text-tech-blue mt-1">
          {icon}
        </div>
        <div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-tech-gray">{title}</h3>
            <div className="text-tech-blue font-semibold">{price}</div>
          </div>
          <p className="text-gray-600 mb-4">{description}</p>
          
          {features && features.length > 0 && (
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="text-sm text-gray-600">
                  <span className="text-tech-blue mr-2">•</span>{feature}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
