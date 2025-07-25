import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button"; // Assuming this is from shadcn/ui
import { useState } from "react";
import type { Product as ProductSchema } from "@shared/schema";

// --- Helper Icon Components (using inline SVG for portability) ---
const ShareIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
);

// प्रोडक्ट के लिए एक लोकल टाइप बनाते हैं
// We define a flexible type to accommodate all possible product fields.
type Product = {
    id: number;
    name: string;
    price: string;
    unit: string;
    moq: string;
    image: string;
    category: string;
    countryOfOrigin: string;
    material?: string;
    shape?: string;
    color?: string;
    form?: string;
    application?: string;
    thickness?: string;
    businessType?: string;
    description?: string;
    height?: string;
    finish?: string;
    components?: string;
    panel_thickness?: string;
    pattern?: string;
    feature?: string;
    style?: string;
    size?: string;
    type?: string;
    dimensions?: string;
};


// ========== GRC Jali डेटा ==========
const grcJaliProducts: Product[] = [
  {
    id: 1,
    name: "DOON GRC Jali Design 1",
    price: "₹400.00",
    unit: "Square Feet",
    moq: "1000 Square Feet",
    image: "/image/jali/jali-1.jpeg",
    businessType: "Manufacturer, Supplier",
    material: "GRC",
    shape: "Rectangular",
    color: "White",
    form: "Solid",
    countryOfOrigin: "India",
    application: "Home, Boundary Walls, Balcony",
    thickness: "25 mm",
    category: "GRC Jali",
  },
  {
    id: 2,
    name: "DOON GRC Jali Design 2",
    price: "₹400.00",
    unit: "Square Feet",
    moq: "1000 Square Feet",
    image: "/image/jali/jali-2.jpeg",
    businessType: "Manufacturer, Supplier",
    material: "GRC",
    shape: "Rectangular",
    color: "White",
    form: "Solid",
    countryOfOrigin: "India",
    application: "Home, Facade, Partition",
    thickness: "25 mm",
    category: "GRC Jali",
  },
  {
    id: 3,
    name: "DOON GRC Jali Design 3",
    price: "₹400.00",
    unit: "Square Feet",
    moq: "1000 Square Feet",
    image: "/image/jali/jali-3.jpeg",
    businessType: "Manufacturer, Supplier",
    material: "GRC",
    shape: "Rectangular",
    color: "White",
    form: "Solid",
    countryOfOrigin: "India",
    application: "Home, Garden, Decorative Partition",
    thickness: "25 mm",
    category: "GRC Jali",
  },
  {
    id: 4,
    name: "DOON GRC Jali Design 4",
    price: "₹400.00",
    unit: "Square Feet",
    moq: "1000 Square Feet",
    image: "/image/jali/jali-4.jpeg",
    businessType: "Manufacturer, Supplier",
    material: "GRC",
    shape: "Rectangular",
    color: "White",
    form: "Solid",
    countryOfOrigin: "India",
    application: "Home, Boundary, Decorative Wall",
    thickness: "25 mm",
    category: "GRC Jali",
  }
];


// ========== GRC Column डेटा ==========
const grcColumnProducts: Product[] = [
  {
    id: 1,
    name: 'Classical GRC Column',
    price: '₹2,400.00',
    unit: 'Piece',
    moq: '10 Pieces',
    image: '/image/columns/column-1.jpeg',
    businessType: 'Manufacturer',
    material: 'GRC',
    shape: 'Cylindrical',
    color: 'White',
    form: 'Solid',
    countryOfOrigin: 'India',
    application: 'Facade Decoration',
    thickness: '12 mm',
    category: 'GRC Column',
  },
  {
    id: 2,
    name: 'Modern Terrace Column',
    price: '₹3,100.00',
    unit: 'Piece',
    moq: '6 Pieces',
    image: '/image/columns/column-2.jpeg',
    businessType: 'Manufacturer, Supplier',
    material: 'GRC',
    shape: 'Round',
    color: 'Beige',
    form: 'Solid',
    countryOfOrigin: 'India',
    application: 'Terrace Support',
    thickness: '15 mm',
    category: 'GRC Column',
  },
  {
    id: 3,
    name: 'Tall White GRC Pillars',
    price: '₹3,800.00',
    unit: 'Piece',
    moq: '8 Pieces',
    image: '/image/columns/column-3.jpeg',
    businessType: 'Manufacturer',
    material: 'GRC',
    shape: 'Fluted Round',
    color: 'White',
    form: 'Solid',
    countryOfOrigin: 'India',
    application: 'Exterior Design',
    thickness: '14 mm',
    category: 'GRC Column',
  },
  {
    id: 4,
    name: 'Premium Fluted Columns',
    price: '₹3,600.00',
    unit: 'Piece',
    moq: '10 Pieces',
    image: '/image/columns/column-4.jpeg',
    businessType: 'Manufacturer',
    material: 'GRC',
    shape: 'Fluted',
    color: 'Grey White',
    form: 'Solid',
    countryOfOrigin: 'India',
    application: 'Interior & Exterior',
    thickness: '13 mm',
    category: 'GRC Column',
  },
  {
    id: 5,
    name: 'Square Panel GRC Column',
    price: '₹2,900.00',
    unit: 'Piece',
    moq: '12 Pieces',
    image: '/image/columns/column-5.jpeg',
    businessType: 'Manufacturer',
    material: 'GRC',
    shape: 'Square Fluted',
    color: 'White',
    form: 'Solid',
    countryOfOrigin: 'India',
    application: 'Pillars & Borders',
    thickness: '10 mm',
    category: 'GRC Column',
  },
];

// ========== GRC Baluster डेटा ==========
const grcBalusterProducts: Product[] = [
  {
    id: 1,
    name: 'Classic White GRC Baluster',
    price: '₹550.00',
    unit: 'Piece',
    moq: '50 Pieces',
    image: '/image/blusters/bluster-1.jpeg',
    description: 'A classic, turned GRC baluster with square top and bottom sections, ideal for traditional home exteriors and balconies.',
    material: 'GRC (Glass Reinforced Concrete)',
    height: '750 mm',
    color: 'White',
    finish: 'Smooth Matte',
    countryOfOrigin: 'India',
    application: 'Balconies, Terraces, Porches',
    category: "GRC Baluster",
  },
  {
    id: 2,
    name: 'Vase Shape GRC Balustrade System',
    price: '₹1,800.00',
    unit: 'Running Meter',
    moq: '10 Meters',
    image: '/image/blusters/bluster-2.jpeg',
    description: 'A complete balustrade system featuring elegant vase-shaped balusters, top and bottom rails, and a corner newel post. Finished in a subtle off-white.',
    material: 'GRC (Glass Reinforced Concrete)',
    height: '900 mm',
    color: 'Off-White',
    components: 'Baluster, Top Rail, Bottom Rail, Newel Post',
    countryOfOrigin: 'India',
    application: 'Rooftop Terraces, Balconies, Decking',
    category: "GRC Baluster",
  },
  {
    id: 3,
    name: 'Assorted GRC Baluster Designs',
    price: '₹400 - ₹1,200.00',
    unit: 'Piece',
    moq: '100 Pieces (can be mixed)',
    image: '/image/blusters/bluster-3.jpeg',
    description: 'A wide variety of GRC baluster designs, ranging from simple and modern to ornate and classical. Available to suit any architectural style.',
    material: 'GRC (Glass Reinforced Concrete)',
    height: '600 mm to 900 mm',
    color: 'White (Paintable)',
    finish: 'Smooth, ready to paint',
    countryOfOrigin: 'India',
    application: 'Staircases, Boundary Walls, Balconies',
    category: "GRC Baluster",
  },
  {
    id: 4,
    name: 'Robust Sandstone Finish GRC Balcony Railing',
    price: '₹2,200.00',
    unit: 'Running Meter',
    moq: '15 Meters',
    image: '/image/blusters/bluster-4.jpeg',
    description: 'A heavy-duty GRC balustrade system with stout, closely-spaced balusters. The sandstone finish provides a natural, classic look for balconies.',
    material: 'GRC (Glass Reinforced Concrete)',
    height: '1000 mm',
    color: 'Sandstone Beige',
    finish: 'Textured Stone Finish',
    countryOfOrigin: 'India',
    application: 'Apartment Balconies, Hotel Exteriors',
    category: "GRC Baluster",
  },
  {
    id: 5,
    name: 'Ornate Garden GRC Balustrade',
    price: '₹2,500.00',
    unit: 'Running Meter',
    moq: '10 Meters',
    image: '/image/blusters/bluster-5.jpeg',
    description: 'An exquisitely designed white GRC balustrade, perfect for gardens, patios, and grand villas. Features slender balusters and newel posts with spherical finials.',
    material: 'GRC (Glass Reinforced Concrete)',
    height: '850 mm',
    color: 'Pure White',
    components: 'Slender Baluster, Ornate Newel Post, Ball Finial, Rails',
    countryOfOrigin: 'India',
    application: 'Garden Landscaping, Patios, Villa Exteriors',
    category: "GRC Baluster",
  },
  {
    id: 6,
    name: 'Curved GRC Balustrade for Patios',
    price: '₹2,800.00',
    unit: 'Running Meter',
    moq: '10 Meters',
    image: '/image/blusters/bluster-6.jpeg',
    description: 'A beautifully curved GRC balustrade system, custom-made to fit curved patios and walkways. Simple yet elegant design in an off-white finish.',
    material: 'GRC (Glass Reinforced Concrete)',
    height: '900 mm',
    color: 'Off-White',
    feature: 'Customizable Radius of Curvature',
    countryOfOrigin: 'India',
    application: 'Curved Patios, Balconies, and Walkways',
    category: "GRC Baluster",
  },
  {
    id: 7,
    name: 'Stone Finish GRC Railing with Ball Finials',
    price: '₹1,950.00',
    unit: 'Running Meter',
    moq: '20 Meters',
    image: '/image/blusters/bluster-7.jpeg',
    description: 'A durable GRC railing system with a natural stone finish. Newel posts are topped with classic ball finials, suitable for public spaces and residential buildings.',
    material: 'GRC (Glass Reinforced Concrete)',
    height: '950 mm',
    color: 'Light Grey Stone Finish',
    components: 'Baluster, Newel Post, Ball Finial, Rails',
    countryOfOrigin: 'India',
    application: 'Building Perimeters, Terraces, Public Parks',
    category: "GRC Baluster",
  },
  {
    id: 8,
    name: 'Decorative GRC Jali Railing',
    price: '₹750.00',
    unit: 'Square Foot',
    moq: '100 Square Feet',
    image: '/image/blusters/bluster-8.jpeg',
    description: 'An intricate GRC Jali railing panel featuring a traditional geometric pattern. Ideal for adding a decorative and cultural touch while ensuring safety.',
    material: 'GRC (Glass Reinforced Concrete)',
    panel_thickness: '40 mm',
    color: 'Terracotta / Pink Sandstone Finish',
    pattern: 'Geometric Lattice (Jaali)',
    countryOfOrigin: 'India',
    application: 'Balconies, Corridors, Verandahs, Partition Walls',
    category: "GRC Jali", // Also fits in Jali category
  },
  {
    id: 9,
    name: 'Grand Entrance Curved Staircase Balustrade',
    price: '₹3,500.00',
    unit: 'Running Meter',
    moq: '10 Meters',
    image: '/image/blusters/bluster-9.jpeg',
    description: 'A luxurious, cast stone-finish GRC balustrade for curved staircases. Adds a majestic and elegant look to building entrances and foyers.',
    material: 'GRC / Cast Stone',
    height: '900 mm',
    color: 'Beige / Sandstone',
    feature: 'Suitable for curved staircases and balconies',
    countryOfOrigin: 'India',
    application: 'Luxury Homes, Hotels, Grand Entrances',
    category: "GRC Baluster",
  },
  {
    id: 10,
    name: 'Corner Section GRC Balustrade',
    price: '₹1,800.00',
    unit: 'Running Meter',
    moq: '10 Meters',
    image: '/image/blusters/bluster-10.jpeg',
    description: 'A complete GRC balustrade corner section view, featuring vase-shaped balusters, rails, and a sturdy newel post. Perfect for L-shaped balconies.',
    material: 'GRC (Glass Reinforced Concrete)',
    height: '900 mm',
    color: 'Off-White',
    components: 'Baluster, Top Rail, Bottom Rail, Newel Post',
    countryOfOrigin: 'India',
    application: 'Balconies, Terraces, Decking',
    category: "GRC Baluster",
  }
];

// ========== GRC Cornice डेटा ==========
const grcCorniceProducts: Product[] = [
  {
    id: 1,
    name: 'Intricate GRC Cornice Frieze',
    price: '₹950.00',
    unit: 'Running Meter',
    moq: '20 Meters',
    image: '/image/cornice/cornice-1.jpeg',
    description: 'A highly detailed GRC cornice frieze featuring multiple bands of geometric and interlocking circle patterns. Perfect for grand traditional buildings.',
    material: 'GRC (Glass Reinforced Concrete)',
    color: 'Off-White',
    application: 'Building Facades, Parapets, Interior Grand Halls',
    category: 'GRC Cornice',
    countryOfOrigin: 'India'
  },
  {
    id: 2,
    name: 'GRC Exterior Cornice with Medallions',
    price: '₹650.00',
    unit: 'Running Meter',
    moq: '30 Meters',
    image: '/image/cornice/cornice-2.jpeg',
    description: 'A modern GRC exterior cornice molding featuring clean lines and subtle circular medallion details. (3D Render)',
    material: 'GRC',
    color: 'Grey (Render), can be made in any color',
    application: 'Window & Door Surrounds, Building Eaves',
    category: 'GRC Cornice',
    countryOfOrigin: 'India'
  },
  {
    id: 3,
    name: 'Mitered GRC Stepped Cornice Corner',
    price: '₹700.00',
    unit: 'Per Corner Piece',
    moq: '4 Pieces',
    image: '/image/cornice/cornice-3.jpeg',
    description: 'A pre-fabricated mitered corner piece for a multi-layered stepped cornice design. Ensures a perfect, clean corner installation.',
    material: 'GRC / Cast Stone',
    color: 'Natural Stone Finish',
    application: 'Building corners, window frames, parapet walls',
    category: 'GRC Cornice',
    countryOfOrigin: 'India'
  },
  {
    id: 4,
    name: 'Textured GRC Dentil Block Cornice',
    price: '₹800.00',
    unit: 'Running Meter',
    moq: '25 Meters',
    image: '/image/cornice/cornice-4.jpeg',
    description: 'A robust GRC cornice with a textured finish, featuring a bold profile and rectangular dentil blocks for a classic architectural statement.',
    material: 'GRC',
    color: 'Off-White / Beige',
    finish: 'Sandstone Texture',
    application: 'Building Facades, Eaves, Porticos',
    category: 'GRC Cornice',
    countryOfOrigin: 'India'
  },
  {
    id: 5,
    name: 'Simple GRC Cove Cornice',
    price: '₹350.00',
    unit: 'Running Meter',
    moq: '50 Meters',
    image: '/image/cornice/cornice-5.jpeg',
    description: 'A simple and elegant GRC cove cornice for a smooth transition between wall and ceiling. Minimalist design suitable for modern interiors.',
    material: 'GRC',
    color: 'Beige (Paintable)',
    application: 'Interior rooms, hallways, living spaces',
    category: 'GRC Cornice',
    countryOfOrigin: 'India'
  },
  {
    id: 6,
    name: 'Ornate GRC Interior Crown Molding',
    price: '₹750.00',
    unit: 'Running Meter',
    moq: '30 Meters',
    image: '/image/cornice/cornice-6.jpeg',
    description: 'An ornate interior crown molding made from GRC, featuring a complex profile with cyma, ogee, and dentil details. Adds a touch of luxury to any room.',
    material: 'GRC',
    color: 'White (Ready to Paint)',
    application: 'Living Rooms, Dining Rooms, Master Bedrooms, Home Theaters',
    category: 'GRC Cornice',
    countryOfOrigin: 'India'
  },
  {
    id: 7,
    name: 'Modern GRC Lintel Cornice',
    price: '₹600.00',
    unit: 'Running Meter',
    moq: '25 Meters',
    image: '/image/cornice/cornice-7.jpeg',
    description: 'A clean, contemporary GRC cornice designed to sit atop columns or pilasters as part of a lintel. Features sharp angles and a subtle inlay groove.',
    material: 'GRC',
    color: 'Off-White / Cream',
    application: 'Exterior Facades, Porticos, Column Tops',
    category: 'GRC Cornice',
    countryOfOrigin: 'India'
  },
  {
    id: 8,
    name: 'Classic GRC Building Cornice',
    price: '₹850.00',
    unit: 'Running Meter',
    moq: '30 Meters',
    image: '/image/cornice/cornice-8.jpeg',
    description: 'A substantial GRC cornice for building exteriors, providing a strong horizontal element and a classic finish to the top of a facade.',
    material: 'GRC',
    color: 'Sandstone',
    application: 'Commercial Buildings, Residential Facades, Parapet Capping',
    category: 'GRC Cornice',
    countryOfOrigin: 'India'
  },
  {
    id: 9,
    name: 'GRC Cove & Bead Profile Molding',
    price: '₹400.00',
    unit: 'Running Meter',
    moq: '40 Meters',
    image: '/image/cornice/cornice-9.jpeg',
    description: 'A simple GRC molding profile featuring a concave cove and a rounded bead. Versatile for use as a cornice or decorative trim.',
    material: 'GRC',
    color: 'Light Grey (Paintable)',
    application: 'Interior and Exterior Trim, Ceiling Molding',
    category: 'GRC Cornice',
    countryOfOrigin: 'India'
  },
  {
    id: 10,
    name: 'Ornate GRC Cornice with Acanthus Leaves',
    price: '₹1,200.00',
    unit: 'Running Meter',
    moq: '20 Meters',
    image: '/image/cornice/cornice-10.jpeg',
    description: 'A magnificent and highly decorative GRC cornice featuring classical acanthus leaf and shell motifs, perfect for restoring historical buildings or creating a luxurious look.',
    material: 'GRC',
    color: 'White',
    application: 'Luxury Villas, Heritage Buildings, Grand Interiors, Hotel Lobbies',
    category: 'GRC Cornice',
    countryOfOrigin: 'India'
  }
];

// ========== GRC Plant Design डेटा ==========
const grcPlantDesignProducts: Product[] = [
  {
    id: 1,
    name: 'White GRC Barrel Planter',
    price: '₹2,500.00',
    unit: 'Piece',
    moq: '10 Pieces',
    image: '/image/plant/plant-1.jpeg',
    description: 'An elegant, barrel-shaped GRC planter with a smooth white finish and a stable pedestal base. Ideal for entranceways and patios.',
    material: 'GRC (Glass Reinforced Concrete)',
    shape: 'Barrel / Urn',
    color: 'White',
    size: 'Medium (e.g., 60cm Height)',
    countryOfOrigin: 'India',
    category: 'GRC Plant Design'
  },
  {
    id: 2,
    name: 'Large Tapered Square GRC Planter',
    price: '₹4,800.00',
    unit: 'Piece',
    moq: '5 Pieces',
    image: '/image/plant/plant-14.jpeg',
    description: 'A large, modern tapered square planter, perfect for housing small trees or large shrubs in commercial and residential outdoor spaces.',
    material: 'GRC',
    shape: 'Tapered Square',
    color: 'Grey, Black (Customizable)',
    size: 'Large (e.g., 70cm x 70cm)',
    countryOfOrigin: 'India',
    category: 'GRC Plant Design'
  },
  {
    id: 3,
    name: 'Textured White GRC Indoor Pot',
    price: '₹1,800.00',
    unit: 'Piece',
    moq: '15 Pieces',
    image: '/image/plant/plant-3.jpeg',
    description: 'A stylish indoor GRC pot featuring a contemporary hammered or dimpled texture. Available in various sizes for different houseplants.',
    material: 'GRC',
    shape: 'Cylindrical',
    color: 'White',
    finish: 'Hammered / Dimpled Texture',
    size: 'Small to Medium',
    countryOfOrigin: 'India',
    category: 'GRC Plant Design'
  },
  {
    id: 4,
    name: 'Set of Modern Indoor GRC Planters',
    price: '₹4,500.00',
    unit: 'Per Set of 3',
    moq: '5 Sets',
    image: '/image/plant/plant-4.jpeg',
    description: 'A coordinated set of modern indoor planters. Includes smooth and textured cylindrical designs to create a cohesive look for your plant collection.',
    material: 'GRC',
    shape: 'Cylindrical',
    color: 'White, Light Grey',
    finish: 'Smooth and Textured',
    size: 'Assorted (Small, Medium, Large)',
    countryOfOrigin: 'India',
    category: 'GRC Plant Design'
  },
  {
    id: 5,
    name: 'Large GRC Bowl Planter',
    price: '₹7,500.00',
    unit: 'Piece',
    moq: '2 Pieces',
    image: '/image/plant/plant-5.jpeg',
    description: 'A very large, minimalist bowl-shaped planter made from GRC. Its wide opening is ideal for creating mixed plant arrangements in modern landscapes.',
    material: 'GRC',
    shape: 'Bowl',
    color: 'White',
    size: 'Extra Large (e.g., 120cm Diameter)',
    countryOfOrigin: 'India',
    category: 'GRC Plant Design'
  },
  {
    id: 6,
    name: 'Modern Rectangular FRP Planter Box',
    price: '₹3,200.00',
    unit: 'Piece',
    moq: '10 Pieces',
    image: '/image/plant/plant-6.jpeg',
    description: 'Lightweight and durable FRP rectangular planter boxes. Available in vibrant colors and suitable for balconies, rooftops, and modern commercial spaces.',
    material: 'FRP (Fibre-reinforced plastic)',
    shape: 'Rectangular',
    color: 'White, Yellow (Customizable)',
    size: 'Medium',
    countryOfOrigin: 'India',
    category: 'GRC Plant Design'
  },
  {
    id: 7,
    name: 'Commercial Scale GRC Landscape Planters',
    price: '₹9,000.00',
    unit: 'Piece (Large Pot)',
    moq: '4 Pieces',
    image: '/image/plant/plant-7.jpeg',
    description: 'A collection of extra-large GRC planters, including classic pot shapes and low bowls, designed for large-scale commercial landscaping projects.',
    material: 'GRC',
    shape: 'Classic Pot, Bowl',
    color: 'Off-White / Stone Finish',
    size: 'Extra Large',
    application: 'Commercial Courtyards, Public Parks, Hotel Landscapes',
    countryOfOrigin: 'India',
    category: 'GRC Plant Design'
  },
  {
    id: 8,
    name: 'Geometric Faceted GRC Planter',
    price: '₹2,800.00',
    unit: 'Piece (Medium size)',
    moq: '10 Pieces',
    image: '/image/plant/plant-8.jpeg',
    description: 'A contemporary GRC planter featuring a striking geometric, faceted design. Adds a sculptural element to modern indoor and outdoor settings.',
    material: 'GRC',
    shape: 'Geometric / Faceted',
    color: 'White',
    size: 'Available in multiple sizes',
    countryOfOrigin: 'India',
    category: 'GRC Plant Design'
  },
  {
    id: 9,
    name: 'GRC Rectangular Trough Planter',
    price: '₹6,500.00',
    unit: 'Piece',
    moq: '5 Pieces',
    image: '/image/plant/plant-9.jpeg',
    description: 'A long and sleek rectangular GRC trough planter, ideal for creating green barriers, dividing spaces, or lining walkways and parking areas.',
    material: 'GRC',
    shape: 'Rectangular Trough',
    color: 'Light Beige',
    size: 'Large (e.g., 150cm Length)',
    application: 'Parking Lots, Walkways, Terrace Borders',
    countryOfOrigin: 'India',
    category: 'GRC Plant Design'
  },
  {
    id: 10,
    name: 'Terracotta Finish GRC Garden Pot',
    price: '₹5,500.00',
    unit: 'Piece',
    moq: '4 Pieces',
    image: '/image/plant/plant-10.jpeg',
    description: 'A large, classic garden pot made from GRC with a realistic terracotta finish. Features decorative bands and feet for a traditional look without the weight of clay.',
    material: 'GRC',
    shape: 'Classic Pot',
    color: 'Terracotta',
    size: 'Large',
    application: 'Garden Patios, Building Entrances, Traditional Landscapes',
    countryOfOrigin: 'India',
    category: 'GRC Plant Design'
  }
];

// ========== GRC Pillar डेटा ==========
const grcPillarProducts: Product[] = [
  {
    id: 1,
    name: 'Assorted Classical GRC Pillars',
    price: '₹18,000 - ₹45,000',
    unit: 'Piece',
    moq: '4 Pieces',
    image: '/image/pillars/pillar-1.jpeg',
    description: 'A wide selection of classical GRC pillars, including Ionic, Corinthian, and fluted designs. Perfect for adding a timeless architectural element to any project.',
    material: 'GRC (Glass Reinforced Concrete)',
    style: 'Ionic, Corinthian, Fluted, Plain',
    color: 'White (Paintable)',
    size: 'Height customizable from 2.5 to 5 meters',
    countryOfOrigin: 'India',
    category: 'GRC Pillar'
  },
  {
    id: 2,
    name: 'Ornate Corinthian GRC Porch Columns',
    price: '₹42,000.00',
    unit: 'Piece',
    moq: '2 Pieces',
    image: '/image/pillars/pillar-2.jpeg',
    description: 'Exquisitely detailed fluted GRC columns with ornate Corinthian capitals featuring acanthus leaves and scrolls. Ideal for high-end residential porches and porticos.',
    material: 'GRC',
    style: 'Corinthian, Fluted',
    color: 'White',
    size: 'Customizable to fit porch height',
    countryOfOrigin: 'India',
    category: 'GRC Pillar'
  },
  {
    id: 3,
    name: 'Collection of GFRC Pillar Designs',
    price: '₹20,000 - ₹50,000',
    unit: 'Piece',
    moq: '2 Pieces',
    image: '/image/pillars/pillar-3.jpeg',
    description: 'A versatile collection of GFRC (Glass Fiber Reinforced Concrete) pillars showcasing various designs from simple Doric to ornate Corinthian and custom capitals.',
    material: 'GFRC',
    style: 'Doric, Ionic, Corinthian, Ornate',
    color: 'Light Grey / Stone Finish',
    size: 'Standard heights available, custom orders accepted',
    countryOfOrigin: 'India',
    category: 'GRC Pillar'
  },
  {
    id: 4,
    name: 'White GRC Wedding & Event Pillars',
    price: '₹15,000.00',
    unit: 'Piece',
    moq: '6 Pieces',
    image: '/image/pillars/pillar-4.jpeg',
    description: 'Lightweight yet sturdy white GRC pillars with a fluted shaft and Corinthian-style capitals. Excellent for creating elegant backdrops for weddings, events, and stages.',
    material: 'GRC',
    style: 'Corinthian, Fluted',
    color: 'Pure White',
    size: 'Standard Height: 2.5 Meters',
    application: 'Wedding Decor, Event Staging, Interior Design',
    countryOfOrigin: 'India',
    category: 'GRC Pillar'
  },
  {
    id: 5,
    name: 'Slender GRC Pillars for Residential Facade',
    price: '₹35,000.00',
    unit: 'Piece',
    moq: '4 Pieces',
    image: '/image/pillars/pillar-5.jpeg',
    description: 'Elegant and slender fluted GRC pillars with Corinthian capitals, designed to support balconies and enhance the facade of luxury homes.',
    material: 'GRC / Cast Stone',
    style: 'Corinthian, Fluted',
    color: 'Sandstone / Light Beige',
    size: 'Custom height for multi-story buildings',
    application: 'Building Facades, Porticos, Balcony Supports',
    countryOfOrigin: 'India',
    category: 'GRC Pillar'
  },
  {
    id: 6,
    name: 'Classic Fluted Marble Column Base',
    price: 'Price on request',
    unit: 'Piece',
    moq: '1 Piece',
    image: '/image/pillars/pillar-6.jpeg',
    description: 'A detailed view of a classic Attic base for a fluted marble column. Carved from solid marble, ideal for monumental and heritage architecture projects.',
    material: 'Natural Marble',
    style: 'Classical, Fluted',
    color: 'White Marble with grey veining',
    finish: 'Honed / Polished',
    application: 'Monumental Buildings, Museums, Temples, High-end Interiors',
    countryOfOrigin: 'India',
    category: 'GRC Pillar'
  }
];

// ========== Other Products डेटा ==========
const grcDecorativeProducts: Product[] = [
  {
    id: 1,
    name: 'Ornate GRC Ceiling Medallion',
    price: '₹8,000.00',
    unit: 'Piece',
    moq: '1 Piece',
    image: '/image/others/other-1.jpg',
    description: 'A large, ornate GRC ceiling rose/medallion featuring intricate acanthus leaf patterns. Designed to be a stunning centerpiece for high ceilings in living rooms, dining halls, and lobbies.',
    material: 'GRC (Glass Reinforced Concrete)',
    type: 'Ceiling Medallion',
    color: 'Off-White (Paintable)',
    dimensions: 'Diameter: Approx. 4 feet',
    application: 'Ceiling Decoration, Chandelier Base',
    countryOfOrigin: 'India',
    category: 'GRC Other Products'
  },
  {
    id: 2,
    name: 'GRC Lord Shiva Wall Mural',
    price: '₹7,500.00',
    unit: 'Piece',
    moq: '1 Piece',
    image: '/image/others/other-2.jpg',
    description: 'A serene bas-relief wall mural of Lord Shiva in meditation, crafted from GRC with a natural stone finish. Ideal for creating a tranquil and spiritual ambiance in homes, temples, and yoga studios.',
    material: 'GRC',
    type: 'Wall Mural',
    color: 'Stone Finish',
    dimensions: 'Diameter: Approx. 3 feet',
    application: 'Wall Decoration, Spiritual Spaces, Temple Art',
    countryOfOrigin: 'India',
    category: 'GRC Other Products'
  },
  {
    id: 3,
    name: 'GRC Radha Krishna Wall Mural',
    price: '₹9,500.00',
    unit: 'Piece',
    moq: '1 Piece',
    image: '/image/others/other-3.jpg',
    description: 'A beautifully detailed circular wall mural depicting Radha and Krishna with a peacock, crafted from white GRC. An elegant piece of devotional art for any home.',
    material: 'GRC',
    type: 'Wall Mural',
    color: 'White (Paintable)',
    dimensions: 'Diameter: Approx. 3.5 feet',
    application: 'Home Decor, Prayer Rooms, Wall Art',
    countryOfOrigin: 'India',
    category: 'GRC Other Products'
  },
  {
    id: 4,
    name: 'GRC Romantic Couple Statue',
    price: '₹6,000.00',
    unit: 'Piece',
    moq: '1 Piece',
    image: '/image/others/other-4.jpg',
    description: 'A GRC statue capturing a tender moment between a romantic couple. The unfinished white texture allows for custom painting. Perfect for garden decoration or as a gift.',
    material: 'GRC',
    type: 'Statue',
    color: 'White (Ready to Paint)',
    dimensions: 'Height: Approx. 2.5 feet',
    application: 'Garden Decor, Home Decoration, Gifting',
    countryOfOrigin: 'India',
    category: 'GRC Other Products'
  },
  {
    id: 5,
    name: 'GRC Floral Vine Wall Panel',
    price: '₹12,000.00',
    unit: 'Piece',
    moq: '2 Pieces',
    image: '/image/others/other-5.jpg',
    description: 'A large, rectangular GRC wall panel featuring a symmetrical and intricate design of flowing vines, leaves, and flowers. Ideal for creating a decorative feature wall on building exteriors or boundary walls.',
    material: 'GRC',
    type: 'Wall Panel',
    color: 'Off-White',
    dimensions: 'Approx. 5 feet x 4 feet',
    application: 'Exterior Wall Cladding, Boundary Walls, Feature Walls',
    countryOfOrigin: 'India',
    category: 'GRC Other Products'
  }
];


// ========== Specification Component for the Modal ==========
const SpecItem = ({ label, value }: { label: string, value?: string | null }) => {
    if (!value) return null;
    return (
        <div className="flex justify-between border-b py-3 last:border-b-0">
            <p className="text-gray-500 font-medium">{label}</p>
            <p className="text-gray-800 font-semibold text-right">{value}</p>
        </div>
    );
};

const DetailGridItem = ({ label, value }: { label: string, value?: string | null }) => {
    if (!value) return null;
    return (
        <div className="bg-white p-4 rounded-md border">
            <strong className="text-gray-600">{label}:</strong>
            <span className="ml-2 text-gray-800">{value}</span>
        </div>
    );
};


// ========== NEW Product Detail Modal Component ==========
const ProductDetailModal = ({ product, onClose }: { product: Product, onClose: () => void }) => {
    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4"
            onClick={onClose}
        >
            <div 
                className="bg-gray-50 rounded-lg shadow-2xl w-full max-w-5xl max-h-[95vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()} // Prevents modal from closing on inner click
            >
                <div className="p-6 md:p-8">
                    {/* --- Top Section --- */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Image Section */}
                        <div className="flex items-center justify-center bg-white rounded-lg p-4 border">
                            <img src={product.image} alt={product.name} className="w-full h-auto max-h-[450px] object-contain rounded-lg" />
                        </div>

                        {/* Details Section */}
                        <div className="flex flex-col">
                            <div className="flex justify-between items-start">
                                <h2 className="text-3xl font-bold text-gray-900 leading-tight">{product.name}</h2>
                                <Button variant="ghost" size="icon" className="rounded-full text-gray-500 hover:bg-gray-200">
                                    <ShareIcon />
                                </Button>
                            </div>
                            <div className="my-4">
                                <span className="text-4xl font-extrabold text-red-600">{product.price}</span>
                                <span className="text-xl text-gray-600"> / {product.unit}</span>
                                <p className="text-md text-gray-500 mt-1">{product.moq} (Minimum Order Quantity)</p>
                            </div>
                            
                            <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
                                <SpecItem label="Business Type" value={product.businessType} />
                                <SpecItem label="Material" value={product.material} />
                                <SpecItem label="Shape" value={product.shape} />
                                <SpecItem label="Color" value={product.color} />
                            </div>

                            <div className="grid grid-cols-2 gap-3 mt-auto pt-4">
                                <Button size="lg" className="bg-gray-800 hover:bg-black flex items-center justify-center">
                                   <PhoneIcon /> Request to Call
                                </Button>
                                <Button size="lg" className="bg-red-600 hover:bg-red-700 flex items-center justify-center">
                                    <MailIcon /> Send Enquiry
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* --- Product Details Section --- */}
                    <div className="mt-10 border-t border-gray-200 pt-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Product Details</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 text-md">
                           <DetailGridItem label="Form" value={product.form} />
                           <DetailGridItem label="Thickness" value={product.thickness} />
                           <DetailGridItem label="Country of Origin" value={product.countryOfOrigin} />
                           <DetailGridItem label="Height" value={product.height} />
                           <DetailGridItem label="Finish" value={product.finish} />
                           <DetailGridItem label="Style" value={product.style} />
                           <DetailGridItem label="Size" value={product.size} />
                           <DetailGridItem label="Type" value={product.type} />
                           <DetailGridItem label="Dimensions" value={product.dimensions} />
                           <DetailGridItem label="Pattern" value={product.pattern} />
                           <DetailGridItem label="Panel Thickness" value={product.panel_thickness} />
                           <div className="sm:col-span-2 lg:col-span-3">
                               <DetailGridItem label="Application" value={product.application} />
                           </div>
                           <div className="sm:col-span-2 lg:col-span-3">
                               <DetailGridItem label="Components" value={product.components} />
                           </div>
                           <div className="sm:col-span-2 lg:col-span-3">
                               <DetailGridItem label="Feature" value={product.feature} />
                           </div>
                        </div>
                    </div>
                     {/* --- Description (if available) --- */}
                     {product.description && (
                        <div className="mt-8 border-t border-gray-200 pt-8">
                             <h3 className="text-2xl font-bold text-gray-800 mb-4">Description</h3>
                             <p className="text-gray-700 leading-relaxed bg-white p-4 rounded-md border">{product.description}</p>
                        </div>
                     )}
                </div>
                 {/* --- Footer CTA --- */}
                 <div className="bg-gray-100 p-6 text-center mt-8 sticky bottom-0 border-t">
                    <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-10 py-3">
                        Yes! I am interested
                    </Button>
                 </div>
            </div>
        </div>
    );
};


export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>("GRC Jali");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const { data: products = [], isLoading } = useQuery<ProductSchema[]>({
    queryKey: ["/api/products"],
    queryFn: async () => [], 
  });

  const productsData: { [key: string]: Product[] } = {
    "GRC Jali": grcJaliProducts,
    "GRC Column": grcColumnProducts,
    "GRC Baluster": grcBalusterProducts,
    "GRC Cornice": grcCorniceProducts,
    "GRC Plant Design": grcPlantDesignProducts,
    "GRC Pillar": grcPillarProducts,
    "GRC Other Products": grcDecorativeProducts,
  };
  
  const categories = Object.keys(productsData);
  const currentProducts = productsData[selectedCategory] || [];

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        {/* Breadcrumb */}
        <div className="bg-white py-3 border-b shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span>Home</span>
              <span className="text-gray-300">›</span>
              <span>Products</span>
              <span className="text-gray-300">›</span>
              <span className="font-semibold text-gray-800">{selectedCategory}</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          
          {/* Category Selection Buttons */}
          <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Product Categories</h2>
              <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                      <Button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          variant={selectedCategory === category ? "default" : "outline"}
                          className={`rounded-full px-4 py-2 transition-all duration-200 ${selectedCategory === category ? 'bg-red-600 text-white hover:bg-red-700 shadow-md' : 'bg-white text-gray-700 hover:bg-gray-200'}`}
                      >
                          {category}
                      </Button>
                  ))}
              </div>
          </div>
          
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{selectedCategory}</h1>
          <p className="text-gray-600 text-lg mb-8">
            Leading Manufacturer and Distributor of high-quality {selectedCategory} from Dehradun.
          </p>

          {/* Products List */}
          <div className="space-y-6">
            {currentProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-md border border-gray-200 p-4 md:p-6 transition-shadow duration-300 hover:shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  {/* Product Image */}
                  <div className="md:col-span-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="md:col-span-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-red-600 cursor-pointer" onClick={() => setSelectedProduct(product)}>{product.name}</h3>
                    <div className="flex items-baseline space-x-2 mb-3">
                      <span className="text-2xl font-bold text-red-600">{product.price}</span>
                      <span className="text-gray-600">/ {product.unit}</span>
                    </div>
                    <p className="text-gray-600 mb-4">
                      <span className="font-semibold">{product.moq}</span> <span className="text-gray-500">(MOQ)</span>
                    </p>
                    <table className="w-full text-sm">
                        <tbody>
                          <tr className="border-t"><td className="py-2 pr-3 text-gray-600 bg-gray-50 font-medium w-1/3">Material</td><td className="py-2 px-3 text-gray-800">{product.material}</td></tr>
                          <tr className="border-t"><td className="py-2 pr-3 text-gray-600 bg-gray-50 font-medium">Shape</td><td className="py-2 px-3 text-gray-800">{product.shape}</td></tr>
                          <tr className="border-t border-b"><td className="py-2 pr-3 text-gray-600 bg-gray-50 font-medium">Application</td><td className="py-2 px-3 text-gray-800">{product.application}</td></tr>
                        </tbody>
                    </table>
                  </div>

                  {/* Action Buttons */}
                  <div className="md:col-span-3 flex flex-col space-y-3 justify-center">
                    <Button 
                      variant="outline"
                      onClick={() => setSelectedProduct(product)}
                      className="border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700 font-semibold"
                    >
                      View Full Details
                    </Button>
                    <Button className="bg-red-600 text-white hover:bg-red-700 font-semibold">
                      Get Best Price
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Modal is rendered here */}
      {selectedProduct && (
        <ProductDetailModal 
            product={selectedProduct} 
            onClose={() => setSelectedProduct(null)} 
        />
      )}
    </>
  );
}