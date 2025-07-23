import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
  };

  return (
    <footer className="bg-brand-red text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* General Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">General Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-red-100 hover:text-white transition-colors">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <a className="text-red-100 hover:text-white transition-colors">
                    Products
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-red-100 hover:text-white transition-colors">
                    About Us
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-red-100 hover:text-white transition-colors">
                    Contact Us
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-red-100 hover:text-white transition-colors">
                  GRC Jali
                </a>
              </li>
              <li>
                <a href="#" className="text-red-100 hover:text-white transition-colors">
                  GRC Domes
                </a>
              </li>
              <li>
                <a href="#" className="text-red-100 hover:text-white transition-colors">
                  White GRC Temple
                </a>
              </li>
              <li>
                <a href="#" className="text-red-100 hover:text-white transition-colors">
                  GRC Column
                </a>
              </li>
              <li>
                <a href="#" className="text-red-100 hover:text-white transition-colors">
                  GRC Wall Cladding
                </a>
              </li>
              <li>
                <a href="#" className="text-red-100 hover:text-white transition-colors">
                  GRC Railing
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Mail className="mr-2" size={20} />
              Sign up to Newsletter
            </h3>
            <form onSubmit={handleNewsletterSubmit} className="flex">
              <Input
                type="email"
                placeholder="Your Email Address"
                className="flex-1 bg-white text-gray-900 border-0 rounded-l-lg rounded-r-none focus:ring-0"
              />
              <Button
                type="submit"
                className="bg-brand-dark text-white px-6 py-3 rounded-r-lg rounded-l-none hover:bg-gray-800"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-red-400 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-red-100 text-sm mb-4 md:mb-0">
              All Rights Reserved. ©  Doon GRC 2023. <br />
              <br />
              Developed & Managed by AirMaxxx Pvt. Ltd.
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-red-100 text-sm">Member</span>
              <div className="flex space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded text-white text-xs flex items-center justify-center">
                  VISA
                </div>
                <div className="w-8 h-8 bg-orange-500 rounded text-white text-xs flex items-center justify-center">
                  MC
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
