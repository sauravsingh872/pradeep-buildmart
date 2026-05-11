import { Target, Users, Award, TrendingUp, CheckCircle2, MessageCircle } from 'lucide-react';
import { Button } from '../ui/button';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919695096000', '_blank');
  };

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      hindi: 'हमारा उद्देश्य',
      description: 'To provide premium quality construction materials at competitive prices, ensuring customer satisfaction and building long-term relationships with contractors, builders, and interior designers across India.'
    },
    {
      icon: Award,
      title: 'Quality Commitment',
      hindi: 'गुणवत्ता प्रतिबद्धता',
      description: 'We source only from trusted manufacturers and conduct rigorous quality checks. Every product meets industry standards and specifications before reaching our customers.'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      hindi: 'ग्राहक केंद्रित',
      description: 'Our dedicated team provides personalized support, technical guidance, and post-sale assistance to ensure your projects are completed successfully and on time.'
    },
    {
      icon: TrendingUp,
      title: 'Growth Partner',
      hindi: 'विकास भागीदार',
      description: 'We grow with our clients. From small contractors to large builders, we support every scale of operation with reliable supply and competitive pricing.'
    }
  ];

  const milestones = [
    { number: '1000+', label: 'Happy Clients', hindi: 'संतुष्ट ग्राहक' },
    { number: '5000+', label: 'Projects Completed', hindi: 'परियोजनाएं पूर्ण' },
    { number: '50+', label: 'Cities Served', hindi: 'शहर सेवित' },
    { number: '100%', label: 'Quality Assured', hindi: 'गुणवत्ता सुनिश्चित' }
  ];

  const whyUs = [
    'Genuine products from authorized dealers',
    'Competitive wholesale and retail pricing',
    'Technical support and installation guidance',
    'Timely delivery across Pan-India',
    'Bulk order handling capacity',
    'Experienced and knowledgeable team',
    'Strong supplier relationships',
    'Transparent business practices'
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-accent to-blue-900 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              About Pradeep Traders
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              हमारे बारे में - Your Trusted Construction Material Partner
            </p>
            <p className="text-lg text-blue-100">
              Leading supplier of quality construction materials, committed to excellence and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Building Trust, One Project at a Time
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  Pradeep Traders has established itself as a reliable name in the construction 
                  materials industry, serving contractors, builders, interior designers, and 
                  individual clients across India.
                </p>
                <p className="text-lg">
                  We specialize in providing high-quality Gypsum Boards, PVC Panels, False Ceiling 
                  Materials, Metal Channels, and complete interior construction supplies. Our 
                  commitment to quality and customer service has made us the preferred choice 
                  for thousands of projects nationwide.
                </p>
                <p className="text-lg">
                  With years of industry experience, strong supplier relationships, and a 
                  customer-first approach, we ensure that every project—big or small—receives 
                  the same level of dedication and support.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1763926025477-423847028860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBtYXRlcmlhbHMlMjB3YXJlaG91c2V8ZW58MXx8fHwxNzY4NDExMDU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="About Us"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600">
              What drives us to serve you better every day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-lg">
                      <value.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {value.title}
                    </h3>
                    <p className="text-sm text-primary font-medium mb-3">
                      {value.hindi}
                    </p>
                    <p className="text-gray-700">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-primary to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-red-100">
              Numbers that reflect our commitment
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">
                  {milestone.number}
                </div>
                <div className="text-lg font-medium text-red-100 mb-1">
                  {milestone.label}
                </div>
                <div className="text-sm text-red-200">
                  {milestone.hindi}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-lg text-gray-600">
              क्यों चुनें प्रदीप ट्रेडर्स
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whyUs.map((point, index) => (
              <div
                key={index}
                className="flex items-start bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <CheckCircle2 className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-800">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Partner With Us Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Experience the difference of working with a trusted construction material supplier
          </p>
          <Button
            size="lg"
            onClick={handleWhatsApp}
            className="bg-[#25D366] hover:bg-[#20BD5A] text-white text-lg px-8"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Connect With Us - 9695096000
          </Button>
        </div>
      </section>
    </div>
  );
}
