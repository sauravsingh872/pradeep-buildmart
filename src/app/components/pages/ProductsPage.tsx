import { Package, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

interface ProductsPageProps {
  onNavigate: (page: string) => void;
}

export function ProductsPage({ onNavigate }: ProductsPageProps) {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919695096000', '_blank');
  };

  const productCategories = [
    {
      title: 'Gypsum Boards',
      subtitle: 'जिप्सम बोर्ड',
      description: 'High-quality gypsum boards for walls, ceilings, and partitions. Available in various thicknesses and sizes.',
      image: 'https://images.unsplash.com/photo-1768321901833-3694165677e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneXBzdW0lMjBib2FyZCUyMGNlaWxpbmd8ZW58MXx8fHwxNzY4NDY2Mzg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        'Fire-resistant variants available',
        'Moisture-resistant options',
        'Easy installation',
        'Smooth finish surface',
        'Multiple thickness options'
      ],
      applications: ['False ceilings', 'Wall partitions', 'Drywall systems']
    },
    {
      title: 'PVC Panels',
      subtitle: 'पीवीसी पैनल',
      description: 'Durable and decorative PVC panels perfect for modern interior designs. Water-resistant and easy to maintain.',
      image: 'https://images.unsplash.com/photo-1578021496171-79434fba4dd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvciUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3Njg0MTgyNDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        'Water and moisture resistant',
        'Wide range of designs',
        'Easy to clean and maintain',
        'Termite-proof',
        'Cost-effective solution'
      ],
      applications: ['Wall cladding', 'Ceiling panels', 'Bathroom interiors']
    },
    {
      title: 'False Ceiling Materials',
      subtitle: 'फाल्स सीलिंग सामग्री',
      description: 'Complete false ceiling solutions including grids, tiles, and all necessary accessories for professional installations.',
      image: 'https://images.unsplash.com/photo-1739172205152-be6dd714cd28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWxzZSUyMGNlaWxpbmclMjBpbnRlcmlvcnxlbnwxfHx8fDE3Njg0NjYzOTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        'Conceals wiring and pipes',
        'Acoustic insulation',
        'Energy efficient',
        'Modern aesthetic appeal',
        'Easy maintenance access'
      ],
      applications: ['Commercial spaces', 'Residential homes', 'Office interiors']
    },
    {
      title: 'Metal Channels & Sections',
      subtitle: 'धातु चैनल',
      description: 'Heavy-duty metal channels, studs, and tracks for structural support in drywall and false ceiling installations.',
      image: 'https://images.unsplash.com/photo-1764046155508-de958b4eccec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYnVpbGRpbmclMjBtYXRlcmlhbHN8ZW58MXx8fHwxNzY4NDY2Mzg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        'High tensile strength',
        'Corrosion resistant',
        'Precision engineered',
        'Various sizes available',
        'Long-lasting durability'
      ],
      applications: ['Ceiling frameworks', 'Wall framing', 'Partition structures']
    },
    {
      title: 'Ceiling Accessories',
      subtitle: 'सीलिंग एक्सेसरीज',
      description: 'Complete range of ceiling accessories including hangers, clips, screws, and installation materials.',
      image: 'https://images.unsplash.com/photo-1763926025477-423847028860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBtYXRlcmlhbHMlMjB3YXJlaG91c2V8ZW58MXx8fHwxNzY4NDExMDU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        'Complete installation kits',
        'Professional grade quality',
        'Compatible with all systems',
        'Rust-proof materials',
        'Easy to install'
      ],
      applications: ['False ceiling installation', 'Grid systems', 'Support structures']
    },
    {
      title: 'Interior Construction Supplies',
      subtitle: 'इंटीरियर निर्माण सामग्री',
      description: 'Comprehensive range of interior construction materials for complete project requirements.',
      image: 'https://images.unsplash.com/photo-1763951515641-12637c29d176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3YXJlaG91c2UlMjBpbmRpYXxlbnwxfHx8fDE3Njg0NjYzOTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        'One-stop solution',
        'Bulk order discounts',
        'Technical support included',
        'Quality certified products',
        'Fast delivery options'
      ],
      applications: ['Residential projects', 'Commercial buildings', 'Renovation works']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary to-red-700 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Our Products
            </h1>
            <p className="text-xl text-red-100 mb-6">
              हमारे उत्पाद - Premium Quality Construction Materials
            </p>
            <p className="text-lg text-red-100">
              Comprehensive range of construction and interior materials for all your project needs.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {productCategories.map((category, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="h-64 lg:h-full">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`p-6 lg:p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center mb-4">
                      <Package className="w-8 h-8 text-primary mr-3" />
                      <div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                          {category.title}
                        </h2>
                        <p className="text-sm text-primary font-medium">
                          {category.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6">
                      {category.description}
                    </p>

                    <div className="mb-6">
                      <h3 className="font-semibold text-lg text-gray-900 mb-3">Key Features:</h3>
                      <ul className="space-y-2">
                        {category.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-semibold text-lg text-gray-900 mb-3">Applications:</h3>
                      <div className="flex flex-wrap gap-2">
                        {category.applications.map((app, idx) => (
                          <span
                            key={idx}
                            className="bg-blue-100 text-accent px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button
                      onClick={handleWhatsApp}
                      className="bg-[#25D366] hover:bg-[#20BD5A] text-white"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Get Quote for {category.title}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent text-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Need Help Choosing Products?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our experts are ready to guide you with product selection and technical specifications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={handleWhatsApp}
              className="bg-[#25D366] hover:bg-[#20BD5A] text-white text-lg px-8"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Talk to Expert
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate('contact')}
              className="border-white text-white hover:bg-white hover:text-accent text-lg px-8"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
