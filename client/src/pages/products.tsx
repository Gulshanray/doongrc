import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import type { Product } from "@shared/schema";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>("GRC Jali");

  const { data: products = [], isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const grcJaliProducts = [
    {
      id: 1,
      name: "Rectangular GRC Jali",
      price: "₹400.00",
      unit: "Square Feet",
      moq: "1000 Square Feet",
      image: "https://images.unsplash.com/photo-1558618047-3c8c5d1c9a0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
      businessType: "Manufacturer, Supplier",
      material: "GRC",
      shape: "Rectangular",
      color: "White",
      form: "Solid",
      countryOfOrigin: "India",
      application: "Home",
      thickness: "25 mm"
    },
    {
      id: 2,
      name: "Round GRC Jali",
      price: "₹500.00",
      unit: "Square Feet",
      moq: "1000 Square Feet",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
      businessType: "Manufacturer, Supplier",
      material: "GRC",
      shape: "Round",
      color: "Gray",
      form: "Solid",
      countryOfOrigin: "India",
      application: "Home",
      thickness: "25 mm"
    },
    {
      id: 3,
      name: "Square GRC Jali",
      price: "₹450.00",
      unit: "Square Feet",
      moq: "1000 Square Feet",
      image: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
      businessType: "Manufacturer, Supplier",
      material: "GRC",
      shape: "Square",
      color: "White",
      form: "Solid",
      countryOfOrigin: "India",
      application: "Home",
      thickness: "25 mm"
    },
    {
      id: 4,
      name: "25 mm GRC Jali",
      price: "₹500.00",
      unit: "Square Feet",
      moq: "1000 Square Feet",
      image: "https://images.unsplash.com/photo-1558618047-3c8c5d1c9a0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
      businessType: "Manufacturer, Supplier",
      material: "GRC",
      shape: "Rectangular",
      color: "White",
      form: "Solid",
      countryOfOrigin: "India",
      application: "Home",
      thickness: "25 mm"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>Home</span>
            <span>»</span>
            <span>Products</span>
            <span>»</span>
            <span className="font-medium text-gray-900">GRC Jali</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">GRC Jali</h1>
        <p className="text-gray-600 mb-8">
          Leading Manufacturer and Distributor of Rectangular GRC Jali, Round GRC Jali, Square GRC Jali and many more from Udaipur.
        </p>

        {/* Products List */}
        <div className="space-y-6">
          {grcJaliProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Product Image */}
                <div className="lg:col-span-1">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="mt-2 text-center">
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Hover to zoom</span>
                  </div>
                </div>

                {/* Product Details */}
                <div className="lg:col-span-2">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-2xl font-bold text-brand-red">{product.price}</span>
                    <span className="text-gray-600">/ {product.unit}</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    <span className="font-semibold">{product.moq}</span> <span className="text-gray-500">(MOQ)</span>
                  </p>

                  {/* Product Specifications Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <tbody className="space-y-2">
                        <tr>
                          <td className="py-2 px-3 text-gray-700 bg-gray-50 font-medium w-1/3">Business Type</td>
                          <td className="py-2 px-3 text-gray-900">{product.businessType}</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3 text-gray-700 bg-gray-50 font-medium">Material</td>
                          <td className="py-2 px-3 text-gray-900">{product.material}</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3 text-gray-700 bg-gray-50 font-medium">Shape</td>
                          <td className="py-2 px-3 text-gray-900">{product.shape}</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3 text-gray-700 bg-gray-50 font-medium">Color</td>
                          <td className="py-2 px-3 text-gray-900">{product.color}</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3 text-gray-700 bg-gray-50 font-medium">Form</td>
                          <td className="py-2 px-3 text-gray-900">{product.form}</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3 text-gray-700 bg-gray-50 font-medium">Country of Origin</td>
                          <td className="py-2 px-3 text-gray-900">{product.countryOfOrigin}</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3 text-gray-700 bg-gray-50 font-medium">Application</td>
                          <td className="py-2 px-3 text-gray-900">{product.application}</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3 text-gray-700 bg-gray-50 font-medium">Thickness</td>
                          <td className="py-2 px-3 text-gray-900">{product.thickness}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="lg:col-span-1 flex flex-col space-y-3">
                  <Button className="bg-red-600 text-white hover:bg-red-700 text-sm">
                    Get Best Price
                  </Button>
                  <Button className="bg-red-600 text-white hover:bg-red-700 text-sm">
                    ↗ Request to Call
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
