import { MessageCircle, ZoomIn } from 'lucide-react';
import { Button } from '../ui/button';
import { useState } from 'react';

interface GalleryPageProps {
  onNavigate: (page: string) => void;
}

export function GalleryPage({ onNavigate }: GalleryPageProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleWhatsApp = () => {
    window.open('https://wa.me/919695096000', '_blank');
  };

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1768321901833-3694165677e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneXBzdW0lMjBib2FyZCUyMGNlaWxpbmd8ZW58MXx8fHwxNzY4NDY2Mzg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Gypsum Board Installation',
      category: 'Gypsum Boards',
      description: 'Premium gypsum board ceiling work'
    },
    {
      url: 'https://images.unsplash.com/photo-1739172205152-be6dd714cd28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWxzZSUyMGNlaWxpbmclMjBpbnRlcmlvcnxlbnwxfHx8fDE3Njg0NjYzOTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'False Ceiling Project',
      category: 'False Ceiling',
      description: 'Modern false ceiling with LED lighting'
    },
    {
      url: 'https://images.unsplash.com/photo-1578021496171-79434fba4dd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvciUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3Njg0MTgyNDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'PVC Panel Interior',
      category: 'PVC Panels',
      description: 'Decorative PVC panel wall installation'
    },
    {
      url: 'https://images.unsplash.com/photo-1764046155508-de958b4eccec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYnVpbGRpbmclMjBtYXRlcmlhbHN8ZW58MXx8fHwxNzY4NDY2Mzg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Metal Channel Framework',
      category: 'Metal Channels',
      description: 'Structural metal channel installation'
    },
    {
      url: 'https://images.unsplash.com/photo-1763926025477-423847028860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBtYXRlcmlhbHMlMjB3YXJlaG91c2V8ZW58MXx8fHwxNzY4NDExMDU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Material Warehouse',
      category: 'Warehouse',
      description: 'Our well-stocked material warehouse'
    },
    {
      url: 'https://images.unsplash.com/photo-1763951515641-12637c29d176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3YXJlaG91c2UlMjBpbmRpYXxlbnwxfHx8fDE3Njg0NjYzOTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Construction Site',
      category: 'Projects',
      description: 'Materials delivered to construction site'
    }
  ];

  const categories = ['All', ...Array.from(new Set(galleryImages.map(img => img.category)))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-accent to-blue-900 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Project Gallery
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              परियोजना गैलरी - See Our Quality Work in Action
            </p>
            <p className="text-lg text-blue-100">
              Browse through our collection of completed projects and material installations across India.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-16 lg:top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(image.url)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                        <ZoomIn className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                      {image.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {image.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 z-10"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <img
            src={selectedImage}
            alt="Gallery"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Stats Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Project Portfolio
            </h2>
            <p className="text-lg text-gray-600">
              Delivering excellence across diverse projects
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-700">Residential Projects</div>
              <div className="text-sm text-gray-500 mt-1">आवासीय परियोजनाएं</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-4xl font-bold text-primary mb-2">300+</div>
              <div className="text-gray-700">Commercial Projects</div>
              <div className="text-sm text-gray-500 mt-1">वाणिज्यिक परियोजनाएं</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-gray-700">Office Interiors</div>
              <div className="text-sm text-gray-500 mt-1">कार्यालय इंटीरियर</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-gray-700">Happy Clients</div>
              <div className="text-sm text-gray-500 mt-1">संतुष्ट ग्राहक</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-primary to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Want to See Your Project Here?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Let us supply quality materials for your next project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={handleWhatsApp}
              className="bg-[#25D366] hover:bg-[#20BD5A] text-white text-lg px-8"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Discuss Your Project
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate('contact')}
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
