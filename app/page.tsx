import Image from "next/image";
import { Search, Home as HomeIcon, TrendingUp, BarChart3, Package, Users, Settings, ChevronDown, Plus, X } from "lucide-react";

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Sidebar */}
      <div className="w-72 bg-gray-800 text-white flex flex-col">
        <div className="p-4 border-b border-gray-700">
          <h2 className="text-sm font-medium text-gray-300">SUPPLIERS</h2>
          <h2 className="text-sm font-medium text-gray-300">& VENDORS</h2>
        </div>
        
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-700">
                <HomeIcon size={20} />
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-700">
                <TrendingUp size={20} />
                <span>Sell</span>
                <ChevronDown size={16} className="ml-auto" />
              </a>
              <ul className="ml-8 mt-2 space-y-1">
                <li><a href="#" className="block p-1 text-sm text-gray-300 hover:text-white">Open/Close</a></li>
                <li><a href="#" className="block p-1 text-sm text-gray-300 hover:text-white">Sales History</a></li>
                <li><a href="#" className="block p-1 text-sm text-gray-300 hover:text-white">Cash Management</a></li>
                <li><a href="#" className="block p-1 text-sm text-gray-300 hover:text-white">Status</a></li>
                <li><a href="#" className="block p-1 text-sm text-gray-300 hover:text-white">Setting</a></li>
                <li><a href="#" className="block p-1 text-sm text-gray-300 hover:text-white">Quotes</a></li>
              </ul>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-700">
                <BarChart3 size={20} />
                <span>Reporting</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-700">
                <Package size={20} />
                <span>Catalog</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-700">
                <Package size={20} />
                <span>Inventory</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-700">
                <Users size={20} />
                <span>Customers</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-700">
                <Settings size={20} />
                <span>Setup</span>
              </a>
            </li>
          </ul>
        </nav>
        
        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium">S</span>
            </div>
            <span className="text-sm">Sasha Merkel</span>
            <ChevronDown size={16} className="ml-auto" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-900">Furniture Counter</h1>
            <div className="flex items-center space-x-4">
              <button className="text-sm text-gray-600 hover:text-gray-900">RETRIEVE SALE</button>
              <button className="text-sm text-gray-600 hover:text-gray-900">PARK SALE</button>
              <button className="text-sm text-gray-600 hover:text-gray-900">MORE ACTIONS</button>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Enter name, SKU, handle or supplier code"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              SEARCH
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1 p-6 overflow-auto">
          <div className="grid grid-cols-4 gap-4">
            {/* Row 1 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-square bg-gray-100 flex items-center justify-center">
                <div className="w-20 h-12 bg-gray-300 rounded"></div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-square bg-gray-100 flex items-center justify-center">
                <div className="w-16 h-16 bg-amber-200 rounded-full"></div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-square bg-gray-100 flex items-center justify-center">
                <div className="w-20 h-4 bg-gray-200 rounded-full"></div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-square bg-gray-100 flex items-center justify-center">
                <div className="w-16 h-12 bg-gray-400 rounded"></div>
              </div>
            </div>
            
            {/* Row 2 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-square bg-gray-100 flex items-center justify-center">
                <div className="w-20 h-20 bg-orange-300 rounded-full"></div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-square bg-gray-100 flex items-center justify-center">
                <div className="w-20 h-12 bg-amber-800 rounded"></div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-square bg-gray-100 flex items-center justify-center">
                <div className="w-20 h-12 bg-amber-700 rounded"></div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-square bg-gray-100 flex items-center justify-center">
                <div className="w-20 h-16 bg-gray-300 rounded"></div>
              </div>
            </div>
            
            {/* Row 3 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-square bg-gray-100 flex items-center justify-center">
                <div className="w-16 h-16 bg-orange-500 rounded-lg"></div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-square bg-gray-100 flex items-center justify-center">
                <div className="w-20 h-12 bg-gray-600 rounded"></div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-square bg-gray-100 flex items-center justify-center">
                <div className="w-20 h-20 bg-gray-400 rounded-full"></div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-square bg-gray-100 flex items-center justify-center">
                <div className="w-16 h-16 bg-pink-400 rounded-lg"></div>
              </div>
            </div>
            
            {/* Row 4 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-square bg-gray-100 flex items-center justify-center">
                <div className="w-20 h-20 bg-gray-700 rounded-full"></div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-square bg-gray-100 flex items-center justify-center">
                <div className="w-20 h-16 bg-gray-200 rounded-lg"></div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-square bg-gray-100 flex items-center justify-center">
                <div className="w-16 h-16 bg-green-400 rounded-full"></div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-square bg-gray-100 flex items-center justify-center">
                <div className="w-20 h-12 bg-amber-600 rounded"></div>
              </div>
            </div>
            
            {/* Row 5 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-square bg-gray-100 flex items-center justify-center">
                <div className="w-20 h-20 bg-blue-300 rounded-lg"></div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-square bg-gray-100 flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-square bg-gray-100 flex items-center justify-center">
                <div className="w-20 h-20 bg-pink-300 rounded-lg"></div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-square bg-gray-100 flex items-center justify-center">
                <div className="w-20 h-12 bg-orange-400 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Cart Sidebar */}
      <div className="w-80 bg-white border-l border-gray-200 flex flex-col">
        {/* Add Customer Button */}
        <div className="p-4 border-b border-gray-200">
          <button className="w-full flex items-center justify-center space-x-2 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
            <Plus size={16} />
            <span className="text-sm font-medium">ADD CUSTOMER</span>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">PRODUCT</th>
                <th className="px-2 py-2 text-center text-xs font-medium text-gray-500 uppercase">QTY</th>
                <th className="px-2 py-2 text-right text-xs font-medium text-gray-500 uppercase">PRICE</th>
                <th className="px-2 py-2 text-right text-xs font-medium text-gray-500 uppercase">TOTAL</th>
                <th className="w-8"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="px-4 py-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-amber-700 rounded"></div>
                    <div>
                      <div className="text-sm font-medium">Brown Co.</div>
                      <div className="text-xs text-gray-500">767391</div>
                    </div>
                  </div>
                </td>
                <td className="px-2 py-3 text-center text-sm">2</td>
                <td className="px-2 py-3 text-right text-sm">$250.00</td>
                <td className="px-2 py-3 text-right text-sm font-medium">$500.00</td>
                <td className="px-2 py-3">
                  <button className="text-gray-400 hover:text-gray-600">
                    <X size={16} />
                  </button>
                </td>
              </tr>
              
              <tr className="border-b border-gray-100 bg-gray-50">
                <td className="px-4 py-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-200 rounded"></div>
                    <div>
                      <div className="text-sm font-medium">Creme Co.</div>
                      <div className="text-xs text-gray-500">767391</div>
                    </div>
                  </div>
                </td>
                <td className="px-2 py-3 text-center text-sm">2</td>
                <td className="px-2 py-3 text-right text-sm">$250.00</td>
                <td className="px-2 py-3 text-right text-sm font-medium">$500.00</td>
                <td className="px-2 py-3">
                  <button className="text-gray-400 hover:text-gray-600">
                    <X size={16} />
                  </button>
                </td>
              </tr>
              
              <tr className="border-b border-gray-100">
                <td className="px-4 py-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-amber-600 rounded"></div>
                    <div>
                      <div className="text-sm font-medium">Wooden S.</div>
                      <div className="text-xs text-gray-500">934869</div>
                    </div>
                  </div>
                </td>
                <td className="px-2 py-3 text-center text-sm">4</td>
                <td className="px-2 py-3 text-right text-sm">$50.00</td>
                <td className="px-2 py-3 text-right text-sm font-medium">
                  <div>$180.00</div>
                  <div className="text-xs text-gray-500 line-through">$200.00</div>
                </td>
                <td className="px-2 py-3">
                  <button className="text-gray-400 hover:text-gray-600">
                    <X size={16} />
                  </button>
                </td>
              </tr>
              
              <tr className="border-b border-gray-100 bg-gray-50">
                <td className="px-4 py-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-amber-800 rounded"></div>
                    <div>
                      <div className="text-sm font-medium">Coffee Tab.</div>
                      <div className="text-xs text-gray-500">939960</div>
                    </div>
                  </div>
                </td>
                <td className="px-2 py-3 text-center text-sm">1</td>
                <td className="px-2 py-3 text-right text-sm">$395.00</td>
                <td className="px-2 py-3 text-right text-sm font-medium">$306.00</td>
                <td className="px-2 py-3">
                  <button className="text-gray-400 hover:text-gray-600">
                    <X size={16} />
                  </button>
                </td>
              </tr>
              
              <tr className="border-b border-gray-100">
                <td className="px-4 py-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-600 rounded"></div>
                    <div>
                      <div className="text-sm font-medium">Armchair</div>
                      <div className="text-xs text-gray-500">7856446</div>
                    </div>
                  </div>
                </td>
                <td className="px-2 py-3 text-center text-sm">3</td>
                <td className="px-2 py-3 text-right text-sm">$140.00</td>
                <td className="px-2 py-3 text-right text-sm font-medium">$1200.00</td>
                <td className="px-2 py-3">
                  <button className="text-gray-400 hover:text-gray-600">
                    <X size={16} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Cart Footer */}
        <div className="border-t border-gray-200 p-4 space-y-4">
          <div className="flex justify-between text-sm">
            <span>ADD</span>
            <span>DISCOUNT</span>
            <span>PROMO</span>
            <span>TAX</span>
          </div>
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>2 Promotions</span>
              <span>-$30.00</span>
            </div>
            <div className="flex justify-between">
              <span>TAX GST 15%</span>
              <span>$339.90</span>
            </div>
          </div>
          
          <button className="w-full bg-gray-900 text-white py-3 rounded-md font-medium">
            PAY 12 ITEMS - $3005.90
          </button>
        </div>
      </div>
    </div>
  );
}
