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
        name: "Doon GRC Column",
        category: "GRC Column",
        description: "Premium white GRC columns with exceptional durability and aesthetic appeal for luxury architectural projects.",
        imageUrl: "/image/columns/column-1.jpeg",
        rating: 5,
        featured: true
      },
      {
        name: "Dooo GRC jali",
        category: "GRC Jali",
        description: "Elegant golden finish GRC jali designed for premium architectural applications with modern geometric patterns.",
        imageUrl: "/image/jali/jali-1.jpeg",
        rating: 5,
        featured: true
      },
      {
        name: "Doon GRC blusters",
        category: "GRC blusters",
        description: "Decorative round blusters patterns with natural lighting effects, perfect for creating elegant architectural screens.",
        imageUrl: "/public/image/blusters/bluster-2.jpeg",
        rating: 5,
        featured: true
      },
      {
        name: "Doon GRC Plant",
        category: "GRC Plants",
        description: "Traditional temple dome architecture with white finish, combining spiritual aesthetics with modern construction techniques.",
        imageUrl: "/public/image/plant/plant-1.jpeg",
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
