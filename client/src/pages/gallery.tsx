import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "All Images" },
    { id: "columns", name: "Columns" },
    { id: "jali", name: "Jali Designs" },
    { id: "domes", name: "Domes" },
    { id: "projects", name: "Projects" },
  ];

  const galleryImages = [
    {
      id: 1,
      category: "columns",
      src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "White GRC Column craftsmanship",
      title: "Premium GRC Columns"
    },
    {
      id: 2,
      category: "columns",
      src: "https://pixabay.com/get/g5cd4b726fa1a59ce315fbfe48e695761779d64a225047b602e2f939a8f41229addea43302d998475bbbb36945df0e867041fd0f2dd304418f20dc7b9613de324_1280.jpg",
      alt: "Modern architectural columns",
      title: "Modern Column Design"
    },
    {
      id: 3,
      category: "jali",
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Round decorative jali pattern",
      title: "Round GRC Jali"
    },
    {
      id: 4,
      category: "domes",
      src: "https://pixabay.com/get/g598f26f58af03f79189e71999d9e43b835a9a90b5f7f12e7f8dfad23aa025f77dd14c6ef4fba503a82445b484f668211e95aad5858b4010431d641e8ff5f926b_1280.jpg",
      alt: "Traditional temple dome",
      title: "GRC Temple Dome"
    },
    {
      id: 5,
      category: "projects",
      src: "https://pixabay.com/get/g527788cb885c29a7fa7a420323fc0e3718b80b5c7d6a879aba32331ad0f129140718c4da31c9a5fae8a8031818fe712973234549aa104f528e9674564a5b7726_1280.jpg",
      alt: "Modern GRC architectural structure",
      title: "Architectural Project"
    },
    {
      id: 6,
      category: "projects",
      src: "https://pixabay.com/get/gd2ad6b244881f97b5d09b4288bbf590110c834ee818cb63b3f7b01c815fe80139d3f1414241577f02acc5188208aa3425aa2549e847e8dd9a29e58337f29a117_1280.jpg",
      alt: "Construction site with rectangular elements",
      title: "Large Scale Project"
    },
    {
      id: 7,
      category: "jali",
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Decorative jali with natural lighting",
      title: "Hanging Jali Design"
    },
    {
      id: 8,
      category: "columns",
      src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Craftsman working on column details",
      title: "Handcrafted Excellence"
    }
  ];

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  return (
    <div>
      {/* Gallery Header */}
      <section className="bg-brand-red text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Gallery</h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Explore our portfolio of completed projects and architectural masterpieces
          </p>
        </div>
      </section>

      {/* Gallery Content */}
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

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                      <p className="text-sm">View Details</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold brand-dark mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us help you transform your architectural vision into reality with our premium GRC products.
          </p>
          <Button className="bg-brand-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-red-light">
            Get Free Quote
          </Button>
        </div>
      </section>
    </div>
  );
}
