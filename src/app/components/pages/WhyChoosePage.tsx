import { Shield, Truck, Award, Users, Clock, ThumbsUp, DollarSign, Headphones, CheckCircle2, MessageCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

interface WhyChoosePageProps {
  onNavigate: (page: string) => void;
}

export function WhyChoosePage({ onNavigate }: WhyChoosePageProps) {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919695096000', '_blank');
  };

  const reasons = [
    {
      icon: Shield,
      title: 'Premium Quality Guaranteed',
      hindi: 'प्रीमियम गुणवत्ता की गारंटी',
      description: 'We source products only from authorized manufacturers and certified suppliers. Every item undergoes quality checks before delivery.',
      points: [
        'Genuine products from trusted brands',
        'Quality certification available',
        'Regular quality audits',
        'Industry standard compliance'
      ]
    },
    {
      icon: Truck,
      title: 'Pan-India Delivery Network',
      hindi: 'अखिल भारतीय डिलीवरी नेटवर्क',
      description: 'Our extensive logistics network ensures timely delivery of materials to every corner of India, from metros to tier-2 cities.',
      points: [
        'Delivery to all Indian states',
        'Multiple dispatch locations',
        'Real-time tracking available',
        'Safe and secure packaging'
      ]
    },
    {
      icon: DollarSign,
      title: 'Competitive Pricing',
      hindi: 'प्रतिस्पर्धी मूल्य निर्धारण',
      description: 'Direct sourcing and strong supplier relationships enable us to offer the best prices without compromising on quality.',
      points: [
        'Wholesale and retail pricing',
        'Bulk order discounts',
        'Transparent pricing policy',
        'No hidden charges'
      ]
    },
    {
      icon: Award,
      title: 'Industry Experience',
      hindi: 'उद्योग का अनुभव',
      description: 'Years of experience in construction materials trade gives us deep understanding of customer needs and market dynamics.',
      points: [
        'Expert product knowledge',
        'Industry best practices',
        'Proven track record',
        'Trusted by thousands'
      ]
    },
    {
      icon: Users,
      title: 'Customer-Centric Approach',
      hindi: 'ग्राहक केंद्रित दृष्टिकोण',
      description: 'We prioritize customer satisfaction above everything. Our team is dedicated to understanding and fulfilling your specific requirements.',
      points: [
        'Personalized service',
        'Flexible order quantities',
        'Custom solutions available',
        'Long-term partnerships'
      ]
    },
    {
      icon: Headphones,
      title: 'Dedicated Support',
      hindi: 'समर्पित सहायता',
      description: 'Our support team provides technical guidance, product recommendations, and assistance throughout your project lifecycle.',
      points: [
        'Technical consultation',
        'Installation guidance',
        'Post-sale support',
        'Quick response time'
      ]
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      hindi: 'समय पर डिलीवरी',
      description: 'We understand project deadlines are critical. Our efficient supply chain ensures materials reach you when you need them.',
      points: [
        'Timely dispatch',
        'Reliable logistics partners',
        'Emergency orders handled',
        'Delivery schedule coordination'
      ]
    },
    {
      icon: ThumbsUp,
      title: 'Complete Product Range',
      hindi: 'संपूर्ण उत्पाद श्रृंखला',
      description: 'One-stop solution for all interior construction needs. Save time and effort by sourcing everything from a single supplier.',
      points: [
        'Wide product variety',
        'Latest market offerings',
        'Stock availability',
        'Related accessories included'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Contractor',
      location: 'Delhi',
      text: 'Pradeep Traders has been my go-to supplier for the past 3 years. Quality products and reliable service every time.',
      hindi: 'बेहतरीन गुणवत्ता और सेवा'
    },
    {
      name: 'Amit Patel',
      role: 'Interior Designer',
      location: 'Mumbai',
      text: 'Their PVC panels and false ceiling materials are top-notch. Competitive pricing and always available when needed.',
      hindi: 'उत्कृष्ट उत्पाद और कीमत'
    },
    {
      name: 'Suresh Mehta',
      role: 'Builder',
      location: 'Bangalore',
      text: 'Bulk orders are handled professionally. Delivery is always on time, which is crucial for our projects.',
      hindi: 'समय पर डिलीवरी, पेशेवर सेवा'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary to-red-700 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Why Choose Pradeep Traders
            </h1>
            <p className="text-xl text-red-100 mb-6">
              क्यों चुनें प्रदीप ट्रेडर्स - Your Most Reliable Construction Partner
            </p>
            <p className="text-lg text-red-100">
              Discover what makes us the preferred choice for contractors, builders, and interior designers across India.
            </p>
          </div>
        </div>
      </section>

      {/* Main Reasons Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              8 Compelling Reasons to Partner With Us
            </h2>
            <p className="text-lg text-gray-600">
              What sets us apart in the construction materials industry
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl">
                      <reason.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-primary font-medium">
                      {reason.hindi}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">
                  {reason.description}
                </p>

                <ul className="space-y-3">
                  {reason.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              ग्राहकों की प्रतिक्रिया - Real feedback from real customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 bg-white hover:shadow-xl transition-shadow">
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "{testimonial.text}"
                  </p>
                  <p className="text-sm text-primary font-medium mb-4">
                    {testimonial.hindi}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonial.role} • {testimonial.location}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 lg:py-20 bg-accent text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              The Pradeep Traders Advantage
            </h2>
            <p className="text-xl text-blue-100">
              See how we deliver more value to your projects
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-xl p-8 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <CheckCircle2 className="w-7 h-7 text-green-400 mr-3" />
                  With Pradeep Traders
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3 text-xl">✓</span>
                    <span>Verified quality products</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3 text-xl">✓</span>
                    <span>Competitive pricing guaranteed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3 text-xl">✓</span>
                    <span>On-time delivery commitments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3 text-xl">✓</span>
                    <span>Technical support included</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3 text-xl">✓</span>
                    <span>Bulk order handling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3 text-xl">✓</span>
                    <span>Pan-India reach</span>
                  </li>
                </ul>
              </div>

              <div className="opacity-60">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="w-7 h-7 bg-red-500 rounded-full flex items-center justify-center mr-3 text-xl">✕</span>
                  Others
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 text-xl">✕</span>
                    <span>Quality inconsistency</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 text-xl">✕</span>
                    <span>Hidden charges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 text-xl">✕</span>
                    <span>Delivery delays</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 text-xl">✕</span>
                    <span>Limited support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 text-xl">✕</span>
                    <span>Minimum order requirements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 text-xl">✕</span>
                    <span>Limited service areas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Experience the Difference Today
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of satisfied contractors and builders who trust Pradeep Traders
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={handleWhatsApp}
              className="bg-[#25D366] hover:bg-[#20BD5A] text-white text-lg px-8"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Your Order - 9695096000
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate('products')}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg px-8"
            >
              View Products
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
