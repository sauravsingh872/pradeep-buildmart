import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { useState } from 'react';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleWhatsApp = () => {
    window.open('https://wa.me/919695096000', '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create WhatsApp message with form data
    const message = `Hello Pradeep Traders,\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage: ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919695096000?text=${encodedMessage}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Number',
      hindi: 'फ़ोन नंबर',
      details: ['+91 9695096000'],
      action: () => window.open('tel:+919695096000')
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      hindi: 'व्हाट्सएप',
      details: ['+91 9695096000'],
      action: handleWhatsApp
    },
    {
      icon: Mail,
      title: 'Email Address',
      hindi: 'ईमेल पता',
      details: ['info@pradeeptraders.com', 'sales@pradeeptraders.com'],
      action: () => window.open('mailto:info@pradeeptraders.com')
    },
    {
      icon: MapPin,
      title: 'Service Area',
      hindi: 'सेवा क्षेत्र',
      details: ['Pan-India Delivery', 'All Major Cities'],
      action: null
    }
  ];

  const businessHours = [
    { day: 'Monday - Saturday', hours: '9:00 AM - 7:00 PM', hindi: 'सोमवार - शनिवार' },
    { day: 'Sunday', hours: '10:00 AM - 5:00 PM', hindi: 'रविवार' }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary to-red-700 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-red-100 mb-6">
              हमसे संपर्क करें - We're Here to Help You
            </p>
            <p className="text-lg text-red-100">
              Get in touch with our team for quotes, inquiries, or technical support.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className={`p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  info.action ? 'cursor-pointer' : ''
                }`}
                onClick={info.action || undefined}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <info.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {info.title}
                </h3>
                <p className="text-sm text-primary font-medium mb-3">
                  {info.hindi}
                </p>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-700 mb-1">
                    {detail}
                  </p>
                ))}
                {info.action && (
                  <p className="text-primary text-sm mt-3 font-medium">
                    Click to {info.title === 'Phone Number' ? 'call' : info.title === 'WhatsApp' ? 'chat' : 'email'} →
                  </p>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Send Us a Message
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                संदेश भेजें - Fill out the form below and we'll get back to you soon
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g., Product Inquiry, Quote Request"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    rows={5}
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send via WhatsApp
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  Your message will be sent directly to our WhatsApp for fastest response
                </p>
              </form>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* Business Hours */}
              <Card className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Business Hours</h3>
                    <p className="text-sm text-gray-600">व्यावसायिक घंटे</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                      <div>
                        <div className="font-medium text-gray-900">{schedule.day}</div>
                        <div className="text-sm text-gray-500">{schedule.hindi}</div>
                      </div>
                      <div className="text-gray-700 font-medium">{schedule.hours}</div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Quick Contact */}
              <Card className="p-8 bg-gradient-to-br from-primary to-red-700 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Need Immediate Assistance?
                </h3>
                <p className="text-red-100 mb-6">
                  तत्काल सहायता - Connect with us directly on WhatsApp for quick quotes and support
                </p>
                <Button
                  onClick={handleWhatsApp}
                  size="lg"
                  className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat Now - 9695096000
                </Button>
              </Card>

              {/* Service Area */}
              <Card className="p-8 bg-accent text-white">
                <div className="flex items-center mb-4">
                  <MapPin className="w-8 h-8 mr-3" />
                  <h3 className="text-xl font-bold">Pan-India Service</h3>
                </div>
                <p className="text-blue-100 mb-4">
                  We deliver quality construction materials to all major cities and regions across India.
                </p>
                <ul className="space-y-2 text-blue-100">
                  <li>• North India: Delhi, Punjab, Haryana, UP</li>
                  <li>• South India: Bangalore, Chennai, Hyderabad</li>
                  <li>• West India: Mumbai, Pune, Gujarat</li>
                  <li>• East India: Kolkata, Odisha, Bihar</li>
                </ul>
              </Card>

              {/* Support */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Need Technical Support?
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  Our team of experts is ready to help you with:
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Product selection guidance</li>
                  <li>✓ Installation recommendations</li>
                  <li>✓ Quantity calculations</li>
                  <li>✓ Technical specifications</li>
                  <li>✓ Project planning support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can support your construction project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={handleWhatsApp}
              className="bg-primary hover:bg-red-700 text-white text-lg px-8"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate('products')}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg px-8"
            >
              Browse Products
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
