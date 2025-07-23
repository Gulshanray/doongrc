import ContactForm from "@/components/contact-form";
import { MapPin, Phone, Mail, Clock, Headphones, Star } from "lucide-react";

export default function Contact() {
  return (
    <div>
      {/* Contact Header */}
      <section className="bg-brand-red text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Get in touch with our experts to discuss your architectural requirements
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold brand-dark mb-4">Address</h3>
              <p className="text-gray-600">
                SP GRC and Handicrafts<br />
                Rajasthan, India
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold brand-dark mb-4">Phone</h3>
              <p className="text-gray-600">
                +91 XXXXX XXXXX<br />
                +91 XXXXX XXXXX
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold brand-dark mb-4">Email</h3>
              <p className="text-gray-600">
                info@spgrc.com<br />
                sales@spgrc.com
              </p>
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-brand-dark text-white p-8 rounded-lg text-center mb-16">
            <Clock className="mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-semibold mb-4">Business Hours</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-medium mb-2">Monday - Friday</h4>
                <p className="text-gray-300">9:00 AM - 6:00 PM</p>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">Saturday</h4>
                <p className="text-gray-300">9:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gradient-to-r from-brand-red to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ContactForm />
            
            <div className="relative">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-8">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400"
                  alt="Professional consultant ready to help with GRC solutions"
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                
                <div className="space-y-4">
                  <div className="flex items-center text-white">
                    <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center mr-4">
                      <Headphones size={16} />
                    </div>
                    <div>
                      <h4 className="font-semibold">24/7 Support</h4>
                      <p className="text-red-100 text-sm">Always here to help you</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-white">
                    <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center mr-4">
                      <Star size={16} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Premium Quality</h4>
                      <p className="text-red-100 text-sm">Guaranteed excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold brand-dark mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Common questions about our GRC products and services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold brand-dark mb-3">What is GRC?</h3>
              <p className="text-gray-600">
                Glass Reinforced Concrete (GRC) is a composite material made of cement, fine aggregates, 
                and alkali-resistant glass fibers, offering high strength and design flexibility.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold brand-dark mb-3">How long does delivery take?</h3>
              <p className="text-gray-600">
                Delivery timeframes vary based on product complexity and quantity. Standard products 
                typically take 2-4 weeks, while custom designs may require 4-8 weeks.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold brand-dark mb-3">Do you provide installation services?</h3>
              <p className="text-gray-600">
                Yes, we provide professional installation services with our experienced team to ensure 
                proper fitting and optimal performance of our GRC products.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold brand-dark mb-3">Can you create custom designs?</h3>
              <p className="text-gray-600">
                Absolutely! We specialize in custom GRC products tailored to your specific architectural 
                requirements and design preferences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
