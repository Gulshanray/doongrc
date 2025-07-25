import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>Home</span>
            <span>»</span>
            <span className="font-medium text-gray-900">About Us</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">About Us</h1>
            
            {/* Company Description */}
            <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
           <p className="text-gray-700 leading-relaxed mb-4">
  DOON GRC is your trusted destination for premium quality Glass Reinforced Concrete (GRC) products. 
  Founded by Mr. Sachin Choudhary and based in the industrial town of Selaqui, Dehradun, Uttarakhand, 
  we specialize in crafting a wide range of architectural and decorative GRC elements such as 
  GRC Jali, GRC Columns, GRC Domes, Wall Cladding, GRC Temples, GRC Cornices, Railings, and Custom Facades.
</p>

<p className="text-gray-700 leading-relaxed mb-4">
  At DOON GRC, we are deeply committed to delivering superior quality. Each product undergoes 
  strict quality checks, combining the finest raw materials with advanced manufacturing technology. 
  Our experienced craftsmen ensure that every piece meets the highest standards of strength, 
  durability, and aesthetic appeal — giving your designs the excellence they deserve.
</p>

<p className="text-gray-700 leading-relaxed mb-4">
  Customer satisfaction is our top priority. We listen carefully to your design needs and offer 
  personalized solutions to match your vision. From concept to completion, our team ensures a smooth 
  process through transparent communication, on-time delivery, and professional after-sales support.
</p>

<p className="text-gray-700 leading-relaxed">
  Backed by a fully equipped manufacturing unit in Selaqui, our team led by Mr. Sachin Choudhary continues 
  to innovate and expand our product offerings. With a passion for excellence and a focus on customer-centric 
  service, DOON GRC stands tall as a leading manufacturer in the field of GRC in North India.
</p>

     </div>


    
<div className="bg-gray-50 py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Section Title and Introduction */}
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision & Mission</h2>
      <p className="text-lg text-gray-600">
        At DOON GRC, we are committed to excellence in every aspect of our business.
      </p>
    </div>

    {/* Vision and Mission Section (As per your image) */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      
      {/* OUR VISION Column */}
      <div>
        <h2 className="text-2xl font-bold uppercase tracking-wider" style={{ color: '#1a3c5a' }}>
          Our Vision
        </h2>
        <div className="mt-3 mb-5 h-1 w-24" style={{ backgroundColor: '#1a3c5a' }}></div>
        <p className="text-base text-gray-700 leading-loose">
          To become the most trusted and innovative leader in GRC manufacturing across the region, recognized for our unparalleled quality, design excellence, and our commitment to building a more beautiful architectural future.
        </p>
      </div>

      {/* OUR MISSION Column */}
      <div>
        <h2 className="text-2xl font-bold uppercase tracking-wider" style={{ color: '#1a3c5a' }}>
          Our Mission
        </h2>
        <div className="mt-3 mb-5 h-1 w-24" style={{ backgroundColor: '#1a3c5a' }}></div>
        <p className="text-base text-gray-700 leading-loose">
          To empower our clients by transforming their unique designs into superior GRC products. We achieve this through continuous innovation, ethical business practices, and a deep respect for our customers' vision, ensuring every project is a testament to durability and artistry.
        </p>
      </div>

    </div>
  </div>
</div>

            {/* Company Details Table */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <table className="w-full">
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-4 px-6 text-sm font-medium text-gray-700 bg-gray-50 w-1/3">Nature of Business</td>
                    <td className="py-4 px-6 text-sm text-gray-900">Manufacturer & Supplier</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-sm font-medium text-gray-700 bg-gray-50">Number of Employees</td>
                    <td className="py-4 px-6 text-sm text-gray-900">Below 20 People</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-sm font-medium text-gray-700 bg-gray-50">Year of Establishment</td>
                    <td className="py-4 px-6 text-sm text-gray-900">2022</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-sm font-medium text-gray-700 bg-gray-50">Market Covered</td>
                    <td className="py-4 px-6 text-sm text-gray-900">Pan India</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-sm font-medium text-gray-700 bg-gray-50">Name of CEO</td>
                    <td className="py-4 px-6 text-sm text-gray-900">Mr. Sachin Choudhary</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-sm font-medium text-gray-700 bg-gray-50">GST No</td>
                    <td className="py-4 px-6 text-sm text-gray-900">08ASTPM3652H7Z5</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-sm font-medium text-gray-700 bg-gray-50">Annual Turnover</td>
                    <td className="py-4 px-6 text-sm text-gray-900">Below 50 Lac</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-sm font-medium text-gray-700 bg-gray-50">Legal Status of Firm</td>
                    <td className="py-4 px-6 text-sm text-gray-900">Proprietorship</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>         



          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-brand-red mb-4 border-b border-gray-200 pb-2">Products</h3>
              <ul className="space-y-3">
                <li className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-700">GRC Jali</span>
                  <span className="text-gray-400">+</span>
                </li>
                <li className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-700">GRC Column</span>
                  <span className="text-gray-400">+</span>
                </li>
                <li className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-700">GRC Domes</span>
                  <span className="text-gray-400">+</span>
                </li>
                <li className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-700">GRC Wall Cladding</span>
                  <span className="text-gray-400">+</span>
                </li>
                <li className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-700">White GRC Temple</span>
                  <span className="text-gray-400">+</span>
                </li>
                <li className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-700">GRC Wall Panel</span>
                  <span className="text-gray-400">+</span>
                </li>
                <li className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-700">White GRC Cornices</span>
                  <span className="text-gray-400">+</span>
                </li>
                <li className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-700">GRC Railing</span>
                  <span className="text-gray-400">+</span>
                </li>
                <li className="flex items-center justify-between py-2">
                  <span className="text-gray-700">GRC Planter</span>
                  <span className="text-gray-400">+</span>
                </li>
              </ul>
            </div>

            {/* Contact Us Section */}
            <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
              <h3 className="text-lg font-semibold text-brand-red mb-4 border-b border-gray-200 pb-2">Contact Us</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-900"> DOON  GRC</h4>
                  <p className="text-sm text-gray-600">
                📍 Corporate Office:
Doon Complex, Main Market Selaqui, Chakrata Road, Dehradun  248011
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Call Us Now: Rohit (Marketing Head)  9761977739</p>
                  <p className="text-sm text-gray-600">Email: santosh.shreekrishn1@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}