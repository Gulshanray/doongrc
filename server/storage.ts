import { 
  users, 
  products, 
  testimonials, 
  contactSubmissions,
  type User, 
  type InsertUser,
  type Product,
  type InsertProduct,
  type Testimonial,
  type InsertTestimonial,
  type ContactSubmission,
  type InsertContactSubmission
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getAllProducts(): Promise<Product[]>;
  getFeaturedProducts(): Promise<Product[]>;
  getProductsByCategory(category: string): Promise<Product[]>;
  createProduct(product: InsertProduct): Promise<Product>;
  
  getApprovedTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private products: Map<number, Product>;
  private testimonials: Map<number, Testimonial>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private currentUserId: number;
  private currentProductId: number;
  private currentTestimonialId: number;
  private currentContactId: number;

  constructor() {
    this.users = new Map();
    this.products = new Map();
    this.testimonials = new Map();
    this.contactSubmissions = new Map();
    this.currentUserId = 1;
    this.currentProductId = 1;
    this.currentTestimonialId = 1;
    this.currentContactId = 1;
    
    this.seedData();
  }

  private seedData() {
    // Seed products
    const seedProducts: InsertProduct[] = [
      {
        name: "White GRC Column",
        category: "GRC Column",
        description: "Premium white GRC columns with exceptional durability and aesthetic appeal for luxury architectural projects.",
        imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        rating: 5,
        featured: true
      },
      {
        name: "Golden GRC Column",
        category: "GRC Column", 
        description: "Elegant golden finish GRC columns designed for premium architectural applications with modern geometric patterns.",
        imageUrl: "https://pixabay.com/get/g5cd4b726fa1a59ce315fbfe48e695761779d64a225047b602e2f939a8f41229addea43302d998475bbbb36945df0e867041fd0f2dd304418f20dc7b9613de324_1280.jpg",
        rating: 5,
        featured: true
      },
      {
        name: "Round GRC Jali",
        category: "GRC Jali",
        description: "Decorative round jali patterns with natural lighting effects, perfect for creating elegant architectural screens.",
        imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        rating: 5,
        featured: true
      },
      {
        name: "GRC Temple Dome",
        category: "GRC Domes",
        description: "Traditional temple dome architecture with white finish, combining spiritual aesthetics with modern construction techniques.",
        imageUrl: "https://pixabay.com/get/g598f26f58af03f79189e71999d9e43b835a9a90b5f7f12e7f8dfad23aa025f77dd14c6ef4fba503a82445b484f668211e95aad5858b4010431d641e8ff5f926b_1280.jpg",
        rating: 5,
        featured: true
      }
    ];

    seedProducts.forEach(product => {
      this.createProduct(product);
    });

    // Seed testimonials
    const seedTestimonials = [
      {
        name: "Arjun Reddy",
        profession: "Architect",
        location: "Mumbai",
        rating: 5,
        message: "SP GRC delivered exceptional quality GRC columns for our luxury resort project. The craftsmanship is outstanding!",
        approved: true
      },
      {
        name: "Priya Sharma", 
        profession: "Interior Designer",
        location: "Delhi",
        rating: 5,
        message: "The hanging GRC jali designs transformed our temple architecture. Beautiful work and timely delivery!",
        approved: true
      },
      {
        name: "Raj Kumar",
        profession: "Builder", 
        location: "Jaipur",
        rating: 5,
        message: "Professional service and excellent quality. SP GRC is our trusted partner for all architectural projects.",
        approved: true
      }
    ];

    seedTestimonials.forEach(testimonial => {
      const { approved, ...testimonialData } = testimonial;
      const createdTestimonial = this.createTestimonial(testimonialData);
      if (approved && createdTestimonial) {
        const id = this.currentTestimonialId - 1;
        const existing = this.testimonials.get(id);
        if (existing) {
          this.testimonials.set(id, { ...existing, approved: true });
        }
      }
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getFeaturedProducts(): Promise<Product[]> {
    return Array.from(this.products.values()).filter(product => product.featured);
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(product => product.category === category);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = this.currentProductId++;
    const product: Product = { ...insertProduct, id };
    this.products.set(id, product);
    return product;
  }

  async getApprovedTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values()).filter(testimonial => testimonial.approved);
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.currentTestimonialId++;
    const testimonial: Testimonial = { 
      ...insertTestimonial, 
      id, 
      approved: false,
      createdAt: new Date()
    };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.currentContactId++;
    const submission: ContactSubmission = { 
      ...insertSubmission, 
      id,
      createdAt: new Date()
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }
}

export const storage = new MemStorage();
