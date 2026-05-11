import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919695096000', '_blank');
  };

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Products', id: 'products' },
    { name: 'About Us', id: 'about' },
    { name: 'Why Choose Us', id: 'why-choose' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">
              PRADEEP TRADERS
            </h3>
            <p className="text-gray-400 mb-4 text-sm lg:text-base">
              Strong Foundations. Perfect Finishes.
            </p>
            <p className="text-gray-300 text-sm lg:text-base mb-6">
              Leading supplier of quality construction materials across India. Specializing in 
              Gypsum Boards, PVC Panels, False Ceiling Materials, and Interior Construction Supplies.
            </p>
            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center px-6 py-3 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-lg transition-colors"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-gray-400 hover:text-white transition-colors text-sm lg:text-base"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+919695096000" className="text-gray-400 hover:text-white transition-colors text-sm lg:text-base">
                    +91 9695096000
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:info@pradeeptraders.com" className="text-gray-400 hover:text-white transition-colors text-sm lg:text-base">
                    info@pradeeptraders.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-400 text-sm lg:text-base">
                    Serving Pan-India
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm text-center md:text-left mb-4 md:mb-0">
              © 2026 Pradeep Traders. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm text-center md:text-right">
              Quality Construction Materials Since Inception
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
