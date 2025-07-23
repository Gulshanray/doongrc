import { Briefcase, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold brand-dark mb-6">
              Welcome to our Website
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              SP GRC and Handicrafts, your premier destination for high-quality Glass
              Reinforced Concrete (GRC) and Glass Fiber Reinforced Concrete (GFRC)
              products. Established in 2023 by Mr. Prakash Malviya, our company is
              based in Rajasthan.
            </p>
            <Button className="bg-brand-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-red-light">
              View more
            </Button>

            {/* Company Stats */}
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <Briefcase className="mx-auto text-3xl brand-red mb-4" size={48} />
                <h3 className="font-semibold brand-dark mb-2">Nature of Business</h3>
                <p className="text-gray-600 text-sm">Manufacturer & Supplier</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <Users className="mx-auto text-3xl brand-red mb-4" size={48} />
                <h3 className="font-semibold brand-dark mb-2">Number of Employees</h3>
                <p className="text-gray-600 text-sm">Below 10 People</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-lg shadow-xl p-6">
              <img
                src="https://pixabay.com/get/g527788cb885c29a7fa7a420323fc0e3718b80b5c7d6a879aba32331ad0f129140718c4da31c9a5fae8a8031818fe712973234549aa104f528e9674564a5b7726_1280.jpg"
                alt="Modern GRC architectural structure"
                className="w-full h-64 object-cover rounded-lg"
              />

              <div className="absolute top-8 left-8 bg-white bg-opacity-90 p-4 rounded-lg shadow-lg">
                <div className="flex space-x-4 text-sm">
                  <div className="text-center">
                    <div className="brand-red font-bold text-lg">17.6K</div>
                    <div className="text-gray-600">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-green-600 font-bold text-lg">1.3%</div>
                    <div className="text-gray-600">Growth</div>
                  </div>
                  <div className="text-center">
                    <div className="text-blue-600 font-bold text-lg">25.2</div>
                    <div className="text-gray-600">Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
