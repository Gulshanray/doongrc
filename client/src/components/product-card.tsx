import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import type { Product } from "@shared/schema";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={`${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <Card className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="font-semibold text-lg brand-dark mb-2">{product.name}</h3>
        <Badge variant="secondary" className="bg-red-100 text-brand-red text-xs mb-3">
          {product.category}
        </Badge>
        <div className="flex items-center mb-4">
          <div className="flex space-x-1">
            {renderStars(product.rating)}
          </div>
          <span className="text-gray-600 text-sm ml-2">({product.rating}.0)</span>
        </div>
        <Link href={`/products/${product.id}`}>
          <Button className="w-full bg-brand-red text-white hover:bg-brand-red-light">
            VIEW DETAILS →
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
