import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] bg-cover bg-center bg-no-repeat" 
             style={{
               backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080")'
             }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            SP GRC Products
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Premium architectural solutions with unmatched quality and craftsmanship
          </p>

          {/* Product Categories */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-brand-red rounded-full"></div>
              <span className="text-white text-lg">GRC Columns & Railings</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="text-white text-lg">Decorative Jali & Planters</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-brand-red rounded-full"></div>
              <span className="text-white text-lg">Temple Domes & Custom Designs</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-brand-red text-white px-8 py-3 text-lg font-semibold hover:bg-brand-red-light">
              Explore Collection →
            </Button>
            <Button variant="outline" className="border-2 border-white text-white px-8 py-3 text-lg font-semibold hover:bg-white hover:text-gray-900">
              Contact Us
            </Button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          <div className="w-8 h-3 bg-brand-red rounded-full"></div>
          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
