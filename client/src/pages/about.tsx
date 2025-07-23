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
                SP GRC and Handicrafts, your premier destination for high-quality Glass Reinforced Concrete (GRC) and Glass Fiber 
                Reinforced Concrete (GFRC) products. Established in 2022 by Mr. Prakash Malviya, our company is based in the 
                picturesque city of Udaipur, Rajasthan. We specialize in crafting a diverse range of architectural and decorative elements, 
                including GRC Jali, GRC Columns, GRC Domes, GRC Wall Cladding, White GRC Temple, White GRC Cornices, GRC Railings, and GRC Planters.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                At SP GRC and Handicrafts, our commitment to quality is unwavering. We adhere to stringent quality control measures at 
                every stage of production to ensure that our products meet the highest standards. Our quality policy emphasizes the use of 
                premium raw materials, state-of-the-art technology, and skilled craftsmanship. This meticulous approach guarantees 
                durability, aesthetic appeal, and long-lasting performance of our offerings.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Customer satisfaction is at the heart of our operations. We strive to understand and exceed the expectations of our clients 
                by offering tailored solutions that cater to their specific needs. From the initial consultation to the final installation, we 
                maintain open communication and provide professional support to ensure a seamless and satisfying experience. Our 
                dedicated team is always ready to address any queries and deliver products that align with your vision.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Our manufacturing unit is equipped with advanced machinery and technology, enabling us to produce a wide range of GRC 
                and GFRC products with unmatched precision and efficiency. Under the leadership of Mr. Prakash Malviya, who brings a 
                wealth of experience and a passion for excellence, our team is committed to maintaining the highest standards, positioning SP 
                GRC and Handicrafts as a leader in the field.
              </p>
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
                    <td className="py-4 px-6 text-sm text-gray-900">Mr. Prakash Malviya</td>
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

            {/* Explore Our Range Section */}
            <div className="mt-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Explore Our Range</h2>
                <Button variant="link" className="text-brand-red hover:text-brand-red-light">
                  View All →
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1558618047-3c8c5d1c9a0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200" 
                    alt="25 mm GRC Jali" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 text-center">25 mm GRC Jali</h3>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200" 
                    alt="GRC Mosque Domes" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 text-center">GRC Mosque Domes</h3>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200" 
                    alt="GRC Wall Cladding" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 text-center">GRC Wall Cladding</h3>
                  </div>
                </div>
              </div>
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
                  <h4 className="font-semibold text-gray-900">SP GRC and Handicrafts</h4>
                  <p className="text-sm text-gray-600">
                    Ward No.17, Opposite Hospital, Iron 
                    Factory Street, Udaipur, Rajasthan - 313001, India
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Call Us Now: Member</p>
                  <p className="text-sm text-gray-600">E-mail: spgrc@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}