  import { useState } from "react";
  import { Button } from "@/components/ui/button";
  import { Link } from "wouter";

  export default function Gallery() {
    const [selectedCategory, setSelectedCategory] = useState<string>("all");

    const categories = [
      { id: "all", name: "All Images" },
      { id: "columns", name: "Columns" },
      { id: "blusters", name: "Blusters" },
      { id: "cornice", name: "Cornice" },
      { id: "plant", name: "Plant Designs" },
      { id: "pillars", name: "Pillar Designs" },
      { id: "jali", name: "Jali Designs" },
      { id: "others", name: "Others" },
      
    ];
const galleryImages = [
  // Columns (6)
  ...Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    category: "columns",
    src: `/public/image/columns/column-${i + 1}.jpeg`,
    alt: `Column Design ${i + 1}`,
    title: `Column Design ${i + 1}`
  })),

  // Blusters (20)
  ...Array.from({ length: 11 }, (_, i) => ({
    id: i + 100,
    category: "blusters",
    src: `/public/image/blusters/bluster-${i + 1}.jpeg`,
    alt: `Bluster Design ${i + 1}`,
    title: `Bluster Design ${i + 1}`
  })),

  // Jali (15)
  ...Array.from({ length: 15 }, (_, i) => ({
    id: i + 200,
    category: "jali",
    src: `/public/image/jali/jali-${i + 1}.jpeg`,
    alt: `Jali Design ${i + 1}`,
    title: `Jali Design ${i + 1}`
  })),

  // Cornice (10)
  ...Array.from({ length: 10 }, (_, i) => ({
    id: i + 300,
    category: "cornice",
    src: `/public/image/cornice/cornice-${i + 1}.jpeg`,
    alt: `Cornice Design ${i + 1}`,
    title: `Cornice Design ${i + 1}`
  })),

  // Plant Designs (14)
  ...Array.from({ length: 14 }, (_, i) => ({
    id: i + 400,
    category: "plant",
    src: `/public/image/plant/plant-${i + 1}.jpeg`,
    alt: `Plant Design ${i + 1}`,
    title: `Plant Design ${i + 1}`
  })),

  // Pillars (6)
  ...Array.from({ length: 6 }, (_, i) => ({
    id: i + 500,
    category: "pillars",
    src: `/public/image/pillars/pillar-${i + 1}.jpeg`,
    alt: `Pillar Design ${i + 1}`,
    title: `Pillar Design ${i + 1}`
  }))
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
            <Link href="/contact">
              <Button className="bg-brand-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-red-light">
                Get Free Quote
              </Button>
            </Link>
          </div>
        </section>
      </div>
    );
  }
