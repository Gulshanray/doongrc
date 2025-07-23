import { Smile, Building, Users } from "lucide-react";

export default function About() {
  return (
    <div>
      {/* About Header */}
      <section className="bg-brand-red text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">About SP GRC</h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Your premier destination for high-quality Glass Reinforced Concrete products
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold brand-dark mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                SP GRC and Handicrafts was established in 2023 by Mr. Prakash Malviya, 
                with a vision to provide premium Glass Reinforced Concrete (GRC) and 
                Glass Fiber Reinforced Concrete (GFRC) products to the architectural industry.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Based in Rajasthan, our company combines traditional craftsmanship with 
                modern technology to create architectural masterpieces that stand the test of time.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We specialize in manufacturing and supplying a wide range of GRC products 
                including columns, jalis, domes, wall cladding, and custom architectural elements.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Craftsman working on GRC products"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold brand-dark mb-4">
              Why Choose <span className="brand-red">SP GRC</span>
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

      {/* Our Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-brand-red text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-red-100 leading-relaxed">
                To provide exceptional quality GRC and GFRC products that enhance architectural beauty 
                while maintaining the highest standards of craftsmanship, innovation, and customer service. 
                We are committed to transforming architectural visions into reality through our premium products.
              </p>
            </div>
            
            <div className="bg-brand-dark text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To become the leading manufacturer and supplier of GRC products in India, recognized 
                for our quality, reliability, and innovative solutions. We aspire to set new benchmarks 
                in the architectural industry through continuous improvement and customer-centric approach.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
