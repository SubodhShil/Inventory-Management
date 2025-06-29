'use client';

import Image from "next/image";
import { Search, Home as HomeIcon, TrendingUp, BarChart3, Package, Users, Settings, ChevronDown, Plus, X, Minus } from "lucide-react";
import { useStore } from '../lib/store';
import { useState, useEffect } from 'react';

export default function Home() {
  const {
    filteredProducts,
    searchQuery,
    cartItems,
    activeMenuItem,
    sellMenuExpanded,
    loadingProductId,
    subtotal,
    tax,
    discount,
    total,
    totalItems,
    setSearchQuery,
    addToCart,
    removeFromCart,
    updateQuantity,
    setActiveMenuItem,
    toggleSellMenu,
    setLoadingProductId
  } = useStore();

  const [searchInput, setSearchInput] = useState(searchQuery);

  // Real-time search
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setSearchQuery(searchInput);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchInput, setSearchQuery]);

  const handleProductClick = async (product: any) => {
    setLoadingProductId(product.id);
    // Simulate loading
    await new Promise(resolve => setTimeout(resolve, 500));
    addToCart(product);
    setLoadingProductId(null);
  };

  const menuItems = [
    { name: 'Home', icon: HomeIcon, hasSubmenu: false },
    { name: 'Sell', icon: TrendingUp, hasSubmenu: true },
    { name: 'Reporting', icon: BarChart3, hasSubmenu: false },
    { name: 'Catalog', icon: Package, hasSubmenu: false },
    { name: 'Inventory', icon: Package, hasSubmenu: false },
    { name: 'Customers', icon: Users, hasSubmenu: false },
    { name: 'Setup', icon: Settings, hasSubmenu: false }
  ];

  const getProductSize = (product: any) => {
    const sizes = ['w-16 h-12', 'w-20 h-12', 'w-16 h-16', 'w-20 h-20', 'w-20 h-16', 'w-20 h-4'];
    return sizes[parseInt(product.id) % sizes.length];
  };

  const getProductShape = (product: any) => {
    switch (product.shape) {
      case 'circle': return 'rounded-full';
      case 'rounded': return 'rounded-lg';
      default: return 'rounded';
    }
  };
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
            {menuItems.map((item) => (
              <li key={item.name}>
                <button 
                  onClick={() => {
                    setActiveMenuItem(item.name);
                    if (item.hasSubmenu) toggleSellMenu();
                  }}
                  className={`flex items-center w-full text-left space-x-3 p-2 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 ${activeMenuItem === item.name ? 'bg-gray-700' : ''}`}
                >
                  <item.icon size={20} />
                  <span>{item.name}</span>
                  {item.hasSubmenu && (
                    <ChevronDown 
                      size={16} 
                      className={`ml-auto transition-transform duration-200 ${sellMenuExpanded ? 'rotate-180' : ''}`} 
                    />
                  )}
                </button>
                
                {item.name === 'Sell' && sellMenuExpanded && (
                  <ul className="ml-8 mt-2 space-y-1">
                    {['Open/Close', 'Sales History', 'Cash Management', 'Status', 'Setting', 'Quotes'].map((subItem) => (
                      <li key={subItem}>
                        <button 
                          onClick={() => setActiveMenuItem(`Sell-${subItem}`)}
                          className={`block w-full text-left p-1 text-sm ${activeMenuItem === `Sell-${subItem}` ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                        >
                          {subItem}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="p-4 border-t border-gray-700">
          <button className="flex items-center w-full space-x-3 focus:outline-none">
            <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium">S</span>
            </div>
            <span className="text-sm">Sasha Merkel</span>
            <ChevronDown size={16} className="ml-auto" />
          </button>
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
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Enter name, SKU, handle or supplier code"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button 
              onClick={() => setSearchQuery(searchInput)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-800 transition-colors"
            >
              SEARCH
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1 p-6 overflow-auto">
          {filteredProducts.length === 0 ? (
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <div className="text-gray-400 text-lg mb-2">No products found</div>
                <div className="text-gray-500 text-sm">Try adjusting your search terms</div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-4">
              {filteredProducts.map((product) => (
                <button
                  key={product.id}
                  onClick={() => handleProductClick(product)}
                  disabled={loadingProductId === product.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="aspect-square bg-gray-100 flex items-center justify-center relative">
                    {loadingProductId === product.id ? (
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                    ) : (
                      <div className={`${getProductSize(product)} ${product.color} ${getProductShape(product)}`}></div>
                    )}
                  </div>
                  <div className="p-2 text-left">
                    <div className="text-xs font-medium text-gray-900 truncate">{product.name}</div>
                    <div className="text-xs text-gray-500">{product.sku}</div>
                    <div className="text-xs font-semibold text-gray-900">${product.price.toFixed(2)}</div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Right Cart Sidebar */}
      <div className="w-80 bg-white border-l border-gray-200 flex flex-col">
        {/* Add Customer Button */}
        <div className="p-4 border-b border-gray-200">
          <button className="w-full flex items-center justify-center space-x-2 py-2 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 active:bg-gray-100 transition-colors">
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
              {cartItems.map((item, index) => (
                <tr key={item.id} className={`border-b border-gray-100 ${index % 2 === 1 ? 'bg-gray-50' : ''}`}>
                  <td className="px-4 py-3">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 ${item.product.color} rounded`}></div>
                      <div>
                        <div className="text-sm font-medium">{item.product.name}</div>
                        <div className="text-xs text-gray-500">{item.product.sku}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-2 py-3">
                    <div className="flex items-center justify-center space-x-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-600 focus:outline-none"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-600 focus:outline-none"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </td>
                  <td className="px-2 py-3 text-right text-sm">
                    ${(item.discountedPrice || item.originalPrice).toFixed(2)}
                  </td>
                  <td className="px-2 py-3 text-right text-sm font-medium">
                    <div>${((item.discountedPrice || item.originalPrice) * item.quantity).toFixed(2)}</div>
                    {item.discountedPrice && item.discountedPrice < item.originalPrice && (
                      <div className="text-xs text-gray-500 line-through">
                        ${(item.originalPrice * item.quantity).toFixed(2)}
                      </div>
                    )}
                  </td>
                  <td className="px-2 py-3">
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-gray-600 focus:outline-none"
                    >
                      <X size={16} />
                    </button>
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>

        {/* Cart Footer */}
        <div className="border-t border-gray-200 p-4 space-y-3">
          <div className="flex justify-between text-sm">
            <span>ADD</span>
            <span>DISCOUNT</span>
            <span>PROMO</span>
            <span>TAX</span>
          </div>
          
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
               <span>{cartItems.length} Product{cartItems.length !== 1 ? 's' : ''}</span>
               <span>${subtotal.toFixed(2)}</span>
             </div>
             <div className="flex justify-between text-sm">
               <span>TAX 10%</span>
               <span>${tax.toFixed(2)}</span>
             </div>
             {discount > 0 && (
               <div className="flex justify-between text-sm text-green-600">
                 <span>DISCOUNT</span>
                 <span>-${discount.toFixed(2)}</span>
               </div>
             )}
           </div>
           
           <div className="flex justify-between font-bold text-lg border-t pt-2">
             <span>PAY ({totalItems} ITEM{totalItems !== 1 ? 'S' : ''})</span>
             <span>${total.toFixed(2)}</span>
           </div>
        </div>
      </div>
    </div>
  );
}
