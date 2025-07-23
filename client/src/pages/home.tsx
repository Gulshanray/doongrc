import { useQuery } from "@tanstack/react-query";
import HeroSection from "@/components/hero-section";
import ProductCard from "@/components/product-card";
import TestimonialCard from "@/components/testimonial-card";
import TestimonialForm from "@/components/testimonial-form";
import ContactForm from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Smile, Building, Users, Headphones, Star } from "lucide-react";
import type { Product, Testimonial } from "@shared/schema";
import { Link } from "wouter";

export default function Home() {
  const { data: featuredProducts = [], isLoading: productsLoading } = useQuery<Product[]>({
    queryKey: ["/api/products/featured"],
  });

  const { data: testimonials = [], isLoading: testimonialsLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Latest Products Section */}
      <section id="products" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold brand-dark mb-4">
              Latest <span className="bg-brand-red text-white px-4 py-1 rounded">Products</span>
            </h2>
            <p className="text-lg text-gray-600">Explore our newest additions to the GRC product collection</p>
          </div>
          
          {productsLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="bg-gray-200 rounded-lg h-96 animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Hanging GRC Jali Collection */}
      <section className="py-16 bg-gradient-to-r from-brand-dark to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Hanging <span className="text-orange-400">GRC Jali Collection</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Experience the elegance of our handcrafted hanging GRC Jali designs that dance with architectural beauty
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="relative group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400"
                alt="Round GRC jali with decorative palm element"
                className="w-full h-64 object-cover rounded-lg transition-transform group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 rounded-b-lg">
                <h3 className="text-xl font-semibold mb-2">Round GRC Jali</h3>
                <p className="text-gray-300 text-sm">Premium decorative patterns</p>
              </div>
            </div>
            
            <div className="relative group cursor-pointer">
              <img
                src="https://pixabay.com/get/gd2ad6b244881f97b5d09b4288bbf590110c834ee818cb63b3f7b01c815fe80139d3f1414241577f02acc5188208aa3425aa2549e847e8dd9a29e58337f29a117_1280.jpg"
                alt="Large-scale construction site with rectangular architectural elements"
                className="w-full h-64 object-cover rounded-lg transition-transform group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 rounded-b-lg">
                <h3 className="text-xl font-semibold mb-2">Rectangular Jali</h3>
                <p className="text-gray-300 text-sm">Modern geometric designs</p>
              </div>
            </div>
            
            <div className="relative group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400"
                alt="Skilled craftsman creating custom jali designs"
                className="w-full h-64 object-cover rounded-lg transition-transform group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 rounded-b-lg">
                <h3 className="text-xl font-semibold mb-2">Custom Jali</h3>
                <p className="text-gray-300 text-sm">Bespoke architectural art</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/products/jali-collection">
            <Button className="bg-brand-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-red-light">
              Explore Jali Collection →
            </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose SP GRC */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold brand-dark mb-4">
              Why Choose <span className="brand-red">DOON GRC</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience excellence through our commitment to quality, innovation, and customer satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Smile className="text-2xl brand-red" size={32} />
              </div>
              <h3 className="text-xl font-semibold brand-dark mb-4">Customer Satisfaction</h3>
              <p className="text-gray-600 leading-relaxed">
                Customer satisfaction is at the heart of our operations. We strive to understand and exceed the expectations of our clients by offering tailored solutions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="text-2xl brand-red" size={32} />
              </div>
              <h3 className="text-xl font-semibold brand-dark mb-4">Our Infrastructure</h3>
              <p className="text-gray-600 leading-relaxed">
                Our manufacturing unit is equipped with advanced machinery and technology, enabling us to produce a wide range of GRC and GFRC products with unmatched quality.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-2xl brand-red" size={32} />
              </div>
              <h3 className="text-xl font-semibold brand-dark mb-4">Our Team</h3>
              <p className="text-gray-600 leading-relaxed">
                Our team is driven by a shared commitment to innovation and superior craftsmanship. Mr. Malviya's vision for the company is to not only meet but surpass expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Enquiry */}
      <section id="contact" className="py-16 bg-gradient-to-r from-brand-red to-red-600">
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

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold brand-dark mb-4">
              What Our <span className="text-orange-500">Clients Say</span>
            </h2>
            <p className="text-lg text-gray-600">Trusted by architects, builders, and homeowners across India</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {testimonialsLoading ? (
                Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="bg-gray-200 rounded-lg h-32 animate-pulse" />
                ))
              ) : (
                testimonials.slice(0, 3).map((testimonial) => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))
              )}
            </div>

            <TestimonialForm />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-brand-dark to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your<br />
            <span className="text-orange-400">Architecture?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied clients who chose SP GRC for their premium architectural needs
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-brand-red text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand-red-light">
              Get Free Quote →
            </Button>
            <Input
              type="tel"
              placeholder="Enter your mobile number"
              className="px-6 py-4 rounded-lg text-brand-dark text-lg w-80"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
