import { useQuery } from "@tanstack/react-query";
import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import type { Product } from "@shared/schema";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const { data: products = [], isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const categories = [
    { id: "all", name: "All Products" },
    { id: "GRC Column", name: "GRC Columns" },
    { id: "GRC Jali", name: "GRC Jali" },
    { id: "GRC Domes", name: "GRC Domes" },
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div>
      {/* Products Header */}
      <section className="bg-brand-red text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Products</h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Discover our complete range of premium GRC and GFRC architectural products
          </p>
        </div>
      </section>

      {/* Product Categories & Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`px-6 py-2 rounded-full ${
                  selectedCategory === category.id
                    ? "bg-brand-red text-white"
                    : "border-brand-red text-brand-red hover:bg-brand-red hover:text-white"
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="bg-gray-200 rounded-lg h-96 animate-pulse" />
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Product Categories Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold brand-dark mb-4">Product Categories</h2>
            <p className="text-lg text-gray-600">Explore our diverse range of architectural solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
                alt="GRC Columns"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold brand-dark mb-3">GRC Columns</h3>
              <p className="text-gray-600 mb-4">
                Premium architectural columns with exceptional durability and aesthetic appeal for luxury projects.
              </p>
              <Button 
                variant="outline" 
                className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white"
                onClick={() => setSelectedCategory("GRC Column")}
              >
                View Products
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
                alt="GRC Jali"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold brand-dark mb-3">GRC Jali</h3>
              <p className="text-gray-600 mb-4">
                Decorative jali patterns with natural lighting effects, perfect for creating elegant architectural screens.
              </p>
              <Button 
                variant="outline" 
                className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white"
                onClick={() => setSelectedCategory("GRC Jali")}
              >
                View Products
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <img
                src="https://pixabay.com/get/g598f26f58af03f79189e71999d9e43b835a9a90b5f7f12e7f8dfad23aa025f77dd14c6ef4fba503a82445b484f668211e95aad5858b4010431d641e8ff5f926b_1280.jpg"
                alt="GRC Domes"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold brand-dark mb-3">GRC Domes</h3>
              <p className="text-gray-600 mb-4">
                Traditional temple dome architecture combining spiritual aesthetics with modern construction techniques.
              </p>
              <Button 
                variant="outline" 
                className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white"
                onClick={() => setSelectedCategory("GRC Domes")}
              >
                View Products
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
