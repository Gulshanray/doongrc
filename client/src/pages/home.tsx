import { useQuery } from "@tanstack/react-query";
import HeroSection from "@/components/hero-section";
import ProductCard from "@/components/product-card";
import TestimonialCard from "@/components/testimonial-card";
import TestimonialForm from "@/components/testimonial-form";
import ContactForm from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Smile, Building, Users, Headphones, Star, ArrowRight, MessageCircle } from "lucide-react";
import type { Product, Testimonial } from "@shared/schema";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";

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

{/*  Jali  Section */}
<section className="py-24 bg-black relative overflow-hidden particles-bg">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    
    <div className="text-center mb-16 animate-fade-in-up">
      <h2 className="text-5xl md:text-6xl font-bold text-premium mb-6">
        Hanging GRC Jali
      </h2>
      <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
        Experience the elegance of our handcrafted GRC Jali designs that float with architectural beauty.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
      
      {/* Jali 1 */}
      <div className="relative group animate-fade-in-up" style={{ animationDelay: "0s" }}>
        <div className="hanging-jali animate-swing" style={{ animationDelay: "0s" }}>
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm card-3d overflow-hidden shadow-2xl">
            <CardContent className="p-0">
              <div className="relative h-96">
                <img
                  src="/public/image/jali/jali-1.jpeg"
                  alt="Round GRC Jali"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 via-transparent to-transparent transition-all duration-500"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-1 shimmer-effect">DOON  GRC Jali</h3>
                  <p className="text-gray-200 text-sm">Premium decorative patterns</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-red blur-md animate-glow rounded-full"></div>
      </div>

      {/* Jali 2 */}
      <div className="relative group animate-fade-in-up" style={{ animationDelay: "2s" }}>
        <div className="hanging-jali animate-swing" style={{ animationDelay: "2s" }}>
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm card-3d overflow-hidden shadow-2xl">
            <CardContent className="p-0">
              <div className="relative h-96">
                <img
                  src="/public/image/jali/jali-2.jpeg"
                  alt="Rectangular GRC Jali"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 via-transparent to-transparent transition-all duration-500"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-1 shimmer-effect">DOON GRC Jali</h3>
                  <p className="text-gray-200 text-sm">Modern geometric designs</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-gold blur-md animate-glow rounded-full"></div>
      </div>

      {/* Jali 3 */}
      <div className="relative group animate-fade-in-up" style={{ animationDelay: "4s" }}>
        <div className="hanging-jali animate-swing" style={{ animationDelay: "4s" }}>
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm card-3d overflow-hidden shadow-2xl">
            <CardContent className="p-0">
              <div className="relative h-96">
                <img
                  src="/public/image/jali/jali-3.jpeg"
                  alt="Custom GRC Jali"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 via-transparent to-transparent transition-all duration-500"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-1 shimmer-effect">DOON GRC Jali</h3>
                  <p className="text-gray-200 text-sm">Bespoke architectural art</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-red blur-md animate-glow rounded-full"></div>
      </div>

    </div>

    <div className="text-center mt-20">
      <Link href="/products" className="text-lg text-white hover:underline">
        
      <Button className="bg-gradient-red hover:scale-105 transform transition-all duration-300 text-lg px-10 py-7 rounded-full shadow-lg shadow-red-500/30 animate-bounce-slow">
        Explore The Full Collection
        <ArrowRight className="ml-3 h-6 w-6" />
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
        Experience excellence through our commitment to quality, innovation, and customer satisfaction.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* Point 1 */}
      <div className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Smile className="text-2xl brand-red" size={32} />
        </div>
        <h3 className="text-xl font-semibold brand-dark mb-4">🎨 Complete Design Freedom
</h3>
        <p className="text-gray-600 leading-relaxed">
          From intricate jali patterns to bold modern façades — if you can imagine it, we can make it. GRC allows complete flexibility in design, giving architects and clients full control over shapes, textures, and styles.
        </p>
      </div>

      {/* Point 2 */}
      <div className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Building className="text-2xl brand-red" size={32} />
        </div>
        <h3 className="text-xl font-semibold brand-dark mb-4">🏭 Local Expertise & Modern Infrastructure</h3>
        <p className="text-gray-600 leading-relaxed">
          Our facility in Selakui, Dehradun, is equipped with advanced machines to craft precise GRC products. Local knowledge meets world-class quality.
        </p>
      </div>

      {/* Point 3 */}
      <div className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Users className="text-2xl brand-red" size={32} />
        </div>
        <h3 className="text-xl font-semibold brand-dark mb-4">🤝 Driven Team, Trusted Leadership</h3>
        <p className="text-gray-600 leading-relaxed">
          Led by Mr. Sachin Choudhary, our expert team is committed to delivering quality that exceeds expectations — through innovation, skill, and service.
        </p>
      </div>

    </div>
  </div>
</section>





      {/* Quick Enquiry */}
   <section className="py-24 bg-gradient-to-br from-gray-900 via-red-900 to-black relative overflow-hidden">
  <div className="absolute inset-0 opacity-50">
    <div className="w-full h-full bg-gradient-to-br from-red-900/10 via-transparent to-black/10"></div>
  </div>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="animate-slide-in-left">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
          Quick <span className="text-premium">Enquiry</span>
        </h2>
        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
          Transform your architectural dreams into reality. Get in touch with our experts today.
        </p>

        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <input
                placeholder="Product / Service Looking For"
                className="w-full px-4 bg-white/10 border border-white/20 text-white placeholder:text-gray-300 h-14 backdrop-blur-sm rounded"
              />
            </div>
            <div className="relative">
              <input
                placeholder="Your Name"
                className="w-full px-4 bg-white/10 border border-white/20 text-white placeholder:text-gray-300 h-14 backdrop-blur-sm rounded"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 bg-white/10 border border-white/20 text-white placeholder:text-gray-300 h-14 backdrop-blur-sm rounded"
            />
            <div className="flex gap-2">
              <select className="w-28 px-2 bg-white/10 border border-white/20 text-white h-14 rounded backdrop-blur-sm">
                <option>🇮🇳 +91</option>
              </select>
              <input
                placeholder="Phone / Mobile"
                className="flex-1 px-4 bg-white/10 border border-white/20 text-white placeholder:text-gray-300 h-14 backdrop-blur-sm rounded"
              />
            </div>
          </div>

          <textarea
            placeholder="Leave a Message For us"
            rows={5}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-gray-300 backdrop-blur-sm resize-none rounded"
          />

          <button
            type="submit"
            className="bg-gradient-red hover:scale-105 transform transition-all duration-300 text-xl px-12 py-6 rounded-full animate-glow shadow-2xl w-full md:w-auto flex items-center justify-center gap-3"
          >
            Send Message
            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" />
            </svg>
          </button>
        </form>
      </div>

      <div className="relative animate-fade-in-up">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-red blur-3xl opacity-30 animate-pulse"></div>
          <div className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg p-8">
            <img
              src="/public/image/quick-enq.png"
              alt="Contact SP GRC"
              className="w-full h-80 object-cover rounded-2xl shadow-2xl"
            />
            <div className="mt-8 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-red rounded-full flex items-center justify-center animate-glow">
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">24/7 Support</p>
                  <p className="text-gray-300 text-sm">Always here to help you</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center animate-glow">
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 17l-4 2 1-4-3-3.2 4-.4L12 8l2 3.4 4 .4-3 3.2 1 4z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">Premium Quality</p>
                  <p className="text-gray-300 text-sm">Guaranteed excellence</p>
                </div>
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

            <TestimonialForm name={""} />
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
