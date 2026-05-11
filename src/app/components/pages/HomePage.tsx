import { ArrowRight, MessageCircle, Package, Shield, Truck, Award, Users, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919695096000', '_blank');
  };

  const products = [
    {
      title: 'Gypsum Boards',
      description: 'Premium quality gypsum boards for walls and ceilings',
      icon: Package,
      image: 'https://images.unsplash.com/photo-1768321901833-3694165677e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneXBzdW0lMjBib2FyZCUyMGNlaWxpbmd8ZW58MXx8fHwxNzY4NDY2Mzg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'PVC Panels',
      description: 'Durable and decorative PVC panels for modern interiors',
      icon: Package,
      image: 'https://images.unsplash.com/photo-1578021496171-79434fba4dd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvciUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3Njg0MTgyNDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'False Ceiling',
      description: 'Complete false ceiling solutions and accessories',
      icon: Package,
      image: 'https://images.unsplash.com/photo-1739172205152-be6dd714cd28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWxzZSUyMGNlaWxpbmclMjBpbnRlcmlvcnxlbnwxfHx8fDE3Njg0NjYzOTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Metal Channels',
      description: 'Heavy-duty metal channels and structural components',
      icon: Package,
      image: 'https://images.unsplash.com/photo-1764046155508-de958b4eccec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYnVpbGRpbmclMjBtYXRlcmlhbHN8ZW58MXx8fHwxNzY4NDY2Mzg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Premium Quality',
      description: 'Only genuine, tested materials from trusted manufacturers',
      hindi: 'उच्च गुणवत्ता',
    },
    {
      icon: Truck,
      title: 'Pan-India Supply',
      description: 'Reliable delivery across all Indian states',
      hindi: 'पूरे भारत में आपूर्ति',
    },
    {
      icon: Award,
      title: 'Industry Experience',
      description: 'Years of expertise in construction material supply',
      hindi: 'अनुभवी टीम',
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Dedicated support for contractors and builders',
      hindi: 'ग्राहक प्राथमिकता',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1763926025477-423847028860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBtYXRlcmlhbHMlMjB3YXJlaG91c2V8ZW58MXx8fHwxNzY4NDExMDU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Construction Materials"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Strong Foundations.<br />Perfect Finishes.
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-4">
              Premium Construction Materials Supplier
            </p>
            <p className="text-base lg:text-lg text-gray-400 mb-8 max-w-2xl">
              Your trusted partner for Gypsum Boards, PVC Panels, False Ceiling Materials, 
              Metal Channels, and complete interior construction supplies across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={handleWhatsApp}
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white text-lg px-8 py-6"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Quote on WhatsApp
              </Button>
             <Button
  size="lg"
  onClick={() => onNavigate('products')}
  className="bg-blue-600 text-white hover:bg-blue-700 text-lg px-8 py-6 border-none"
>
  View Products
  <ArrowRight className="w-5 h-5 ml-2" />
</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Overview Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Product Range
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive selection of construction and interior materials
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {products.map((product, index) => (
              <Card
                key={index}
                className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary"
                onClick={() => onNavigate('products')}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <product.icon className="w-6 h-6 text-primary mr-2" />
                    <h3 className="text-xl font-semibold text-gray-900">
                      {product.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-2 transition-transform">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              onClick={() => onNavigate('products')}
              className="bg-primary hover:bg-red-700 text-white px-8"
            >
              View All Products
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Pradeep Traders
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              हम आपकी विश्वसनीय निर्माण सामग्री साझेदार हैं
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-primary font-medium mb-3">
                  {benefit.hindi}
                </p>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-16 lg:py-24 bg-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Supplying Quality Materials Across India
              </h2>
              <p className="text-lg text-blue-100 mb-8">
                From metros to tier-2 cities, we ensure timely delivery of premium 
                construction materials to every corner of the country.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Nationwide Delivery</h4>
                    <p className="text-blue-100">Reliable logistics to all states</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Bulk Orders Welcome</h4>
                    <p className="text-blue-100">Special pricing for contractors and builders</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Quality Assurance</h4>
                    <p className="text-blue-100">Every product tested and certified</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1763951515641-12637c29d176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3YXJlaG91c2UlMjBpbmRpYXxlbnwxfHx8fDE3Njg0NjYzOTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Warehouse"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Get instant quotes and expert advice on WhatsApp
          </p>
          <Button
            size="lg"
            onClick={handleWhatsApp}
            className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6"
          >
            <MessageCircle className="w-6 h-6 mr-2" />
            Chat Now - 9695096000
          </Button>
        </div>
      </section>
    </div>
  );
}
