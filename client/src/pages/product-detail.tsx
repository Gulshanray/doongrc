import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { ArrowLeft, Star, Check, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ContactForm from "@/components/contact-form";
import type { Product } from "@shared/schema";

export default function ProductDetail() {
  const { id } = useParams();
  const productId = parseInt(id || "1");

  const { data: products = [], isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const product = products.find(p => p.id === productId);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={20}
        className={`${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/4 mb-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="h-96 bg-gray-300 rounded-lg"></div>
              <div className="space-y-4">
                <div className="h-8 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                <div className="h-24 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
         <p> Thank you for your interest in our products.</p>
          <Link href="/products">
            <Button className="bg-brand-red text-white hover:bg-brand-red-light">
              <ArrowLeft className="mr-2" size={16} />
              Click and view All to Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/">
              <a className="text-gray-500 hover:text-brand-red">Home</a>
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/products">
              <a className="text-gray-500 hover:text-brand-red">Products</a>
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-brand-red font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Product Image */}
            <div className="relative">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-lg"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-brand-red text-white">
                  {product.featured ? "Featured" : product.category}
                </Badge>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center space-x-1">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-gray-600">({product.rating}.0 Rating)</span>
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                    {product.category}
                  </Badge>
                </div>
                
                {/* Pricing Section */}
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <div className="flex items-baseline space-x-2 mb-4">
                    <span className="text-3xl font-bold text-brand-red">₹ 500.00</span>
                    <span className="text-gray-600">/ Square Feet</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    <span className="font-semibold">1000 Square Feet</span> <span className="text-gray-500">(MOQ)</span>
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                      <input 
                        type="number" 
                        placeholder="1000" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Square Feet</label>
                      <div className="relative">
                        <input 
                          type="number" 
                          placeholder="1000" 
                          className="w-full px-3 py-2 pr-16 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red"
                        />
                        <Button className="absolute right-1 top-1 px-3 py-1 text-xs bg-gray-100 text-gray-700 hover:bg-gray-200">
                          Edit
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                    <Button className="bg-white border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white text-sm">
                      <Phone className="mr-1" size={14} />
                      Request to Call
                    </Button>
                    <Button className="bg-brand-red text-white hover:bg-brand-red-light text-sm">
                      <Mail className="mr-1" size={14} />
                      Send Enquiry
                    </Button>
                    <Button className="bg-brand-dark text-white hover:bg-gray-800 text-sm">
                      Get Best Price
                    </Button>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Key Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-2" size={16} />
                    <span>High-quality Glass Reinforced Concrete (GRC)</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-2" size={16} />
                    <span>Weather resistant and durable construction</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-2" size={16} />
                    <span>Custom design and size options available</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-2" size={16} />
                    <span>Professional installation service included</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-2" size={16} />
                    <span>Eco-friendly and sustainable materials</span>
                  </li>
                </ul>
              </div>

              {/* Quick Contact */}
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Get Quote for This Product</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-brand-red text-white hover:bg-brand-red-light flex-1">
                    <Phone className="mr-2" size={16} />
                    Call Now: +91 XXXXX XXXXX
                  </Button>
                  <Button variant="outline" className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white flex-1">
                    <Mail className="mr-2" size={16} />
                    Email Inquiry
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Table */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Details</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-4 px-6 text-sm font-medium text-gray-700 bg-gray-50">Business Type</td>
                    <td className="py-4 px-6 text-sm text-gray-900">Manufacturer, Supplier</td>
                    <td className="py-4 px-6 text-sm font-medium text-gray-700 bg-gray-50">Application</td>
                    <td className="py-4 px-6 text-sm text-gray-900">Home, Commercial</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-sm font-medium text-gray-700 bg-gray-50">Material</td>
                    <td className="py-4 px-6 text-sm text-gray-900">GRC (Glass Reinforced Concrete)</td>
                    <td className="py-4 px-6 text-sm font-medium text-gray-700 bg-gray-50">Country of Origin</td>
                    <td className="py-4 px-6 text-sm text-gray-900">India</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-sm font-medium text-gray-700 bg-gray-50">Shape</td>
                    <td className="py-4 px-6 text-sm text-gray-900">
                      {product.category === "GRC Jali" ? "Rectangular, Round, Custom" : 
                       product.category === "GRC Column" ? "Cylindrical, Square" : 
                       "Dome, Curved"}
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-gray-700 bg-gray-50">Form</td>
                    <td className="py-4 px-6 text-sm text-gray-900">Solid</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-sm font-medium text-gray-700 bg-gray-50">Color</td>
                    <td className="py-4 px-6 text-sm text-gray-900">White, Brown, Custom</td>
                    <td className="py-4 px-6 text-sm font-medium text-gray-700 bg-gray-50">Thickness</td>
                    <td className="py-4 px-6 text-sm text-gray-900">25 mm (Standard)</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-sm font-medium text-gray-700 bg-gray-50">Finish</td>
                    <td className="py-4 px-6 text-sm text-gray-900">Smooth, Textured</td>
                    <td className="py-4 px-6 text-sm font-medium text-gray-700 bg-gray-50">Installation</td>
                    <td className="py-4 px-6 text-sm text-gray-900">Professional Service</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-sm font-medium text-gray-700 bg-gray-50">Warranty</td>
                    <td className="py-4 px-6 text-sm text-gray-900">5 Years Manufacturing</td>
                    <td className="py-4 px-6 text-sm font-medium text-gray-700 bg-gray-50">Delivery Time</td>
                    <td className="py-4 px-6 text-sm text-gray-900">2-4 Weeks</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 text-center">
              <Button className="bg-brand-red text-white px-8 py-3 hover:bg-brand-red-light">
                Yes! I am Interested
              </Button>
            </div>
          </div>

          {/* Related Products */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products
                .filter(p => p.category === product.category && p.id !== product.id)
                .slice(0, 3)
                .map((relatedProduct) => (
                  <Link key={relatedProduct.id} href={`/products/${relatedProduct.id}`}>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                      <img
                        src={relatedProduct.imageUrl}
                        alt={relatedProduct.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-2">{relatedProduct.name}</h3>
                        <div className="flex items-center space-x-1 mb-2">
                          {renderStars(relatedProduct.rating)}
                          <span className="text-sm text-gray-600">({relatedProduct.rating}.0)</span>
                        </div>
                        <Button size="sm" className="w-full bg-brand-red text-white hover:bg-brand-red-light">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-brand-red to-red-600 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Interested in {product.name}?
            </h2>
            <p className="text-red-100 text-lg mb-6">
              Get a personalized quote and expert consultation for your project requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-brand-red px-8 py-3 hover:bg-gray-100">
                <Phone className="mr-2" size={16} />
                Call: +91 XXXXX XXXXX
              </Button>
              <Button className="bg-brand-dark text-white px-8 py-3 hover:bg-gray-800">
                <Mail className="mr-2" size={16} />
                Email: info@spgrc.com
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Products */}
      <div className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/products">
            <Button variant="outline" className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white">
              <ArrowLeft className="mr-2" size={16} />
              Back to All Products
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}