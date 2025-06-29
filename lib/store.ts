import { create } from 'zustand';

export interface Product {
  id: string;
  name: string;
  sku: string;
  price: number;
  color: string;
  shape: 'rectangle' | 'circle' | 'rounded';
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  originalPrice: number;
  discountedPrice?: number;
}

interface StoreState {
  // State
  products: Product[];
  filteredProducts: Product[];
  searchQuery: string;
  cartItems: CartItem[];
  activeMenuItem: string;
  sellMenuExpanded: boolean;
  loadingProductId: string | null;
  
  // Computed values
  subtotal: number;
  tax: number;
  discount: number;
  total: number;
  totalItems: number;
  
  // Actions
  setSearchQuery: (query: string) => void;
  addToCart: (product: Product) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  setActiveMenuItem: (item: string) => void;
  toggleSellMenu: () => void;
  setLoadingProductId: (productId: string | null) => void;
  updateComputedValues: () => void;
}

// Sample products data
const sampleProducts: Product[] = [
  { id: '1', name: 'Gray Table', sku: '767391', price: 250, color: 'bg-gray-300', shape: 'rectangle' },
  { id: '2', name: 'Amber Bowl', sku: '767392', price: 180, color: 'bg-amber-200', shape: 'circle' },
  { id: '3', name: 'White Plate', sku: '767393', price: 45, color: 'bg-gray-200', shape: 'circle' },
  { id: '4', name: 'Dark Chair', sku: '767394', price: 320, color: 'bg-gray-400', shape: 'rectangle' },
  { id: '5', name: 'Orange Vase', sku: '767395', price: 95, color: 'bg-orange-300', shape: 'circle' },
  { id: '6', name: 'Brown Coffee Table', sku: '767396', price: 450, color: 'bg-amber-800', shape: 'rectangle' },
  { id: '7', name: 'Wooden Tray', sku: '767397', price: 75, color: 'bg-amber-700', shape: 'rectangle' },
  { id: '8', name: 'Modern Lamp', sku: '767398', price: 220, color: 'bg-gray-300', shape: 'rectangle' },
  { id: '9', name: 'Orange Cushion', sku: '767399', price: 65, color: 'bg-orange-500', shape: 'rounded' },
  { id: '10', name: 'Slate Tray', sku: '767400', price: 85, color: 'bg-gray-600', shape: 'rectangle' },
  { id: '11', name: 'Gray Bowls', sku: '767401', price: 120, color: 'bg-gray-400', shape: 'circle' },
  { id: '12', name: 'Pink Organizer', sku: '767402', price: 55, color: 'bg-pink-400', shape: 'rounded' },
  { id: '13', name: 'Black Plates', sku: '767403', price: 90, color: 'bg-gray-700', shape: 'circle' },
  { id: '14', name: 'White Bowls', sku: '767404', price: 110, color: 'bg-gray-200', shape: 'rounded' },
  { id: '15', name: 'Green Cups', sku: '767405', price: 70, color: 'bg-green-400', shape: 'circle' },
  { id: '16', name: 'Wooden Box', sku: '767406', price: 140, color: 'bg-amber-600', shape: 'rectangle' },
  { id: '17', name: 'Ceramic Set', sku: '767407', price: 200, color: 'bg-gray-300', shape: 'circle' },
  { id: '18', name: 'Pink Bowls', sku: '767408', price: 85, color: 'bg-pink-300', shape: 'circle' },
  { id: '19', name: 'Wood Cutting Board', sku: '767409', price: 95, color: 'bg-amber-700', shape: 'rectangle' },
  { id: '20', name: 'Tea Set', sku: '767410', price: 160, color: 'bg-gray-400', shape: 'circle' }
];

// Initial cart items (matching the existing UI)
const initialCartItems: CartItem[] = [
  {
    id: 'cart-1',
    product: { id: '6', name: 'Brown Co.', sku: '767391', price: 250, color: 'bg-amber-700', shape: 'rectangle' },
    quantity: 2,
    originalPrice: 250
  },
  {
    id: 'cart-2',
    product: { id: '2', name: 'Creme Co.', sku: '767391', price: 250, color: 'bg-gray-200', shape: 'rectangle' },
    quantity: 2,
    originalPrice: 250
  },
  {
    id: 'cart-3',
    product: { id: '16', name: 'Wooden S.', sku: '934869', price: 50, color: 'bg-amber-600', shape: 'rectangle' },
    quantity: 4,
    originalPrice: 50,
    discountedPrice: 45
  },
  {
    id: 'cart-4',
    product: { id: '6', name: 'Coffee Tab.', sku: '939960', price: 395, color: 'bg-amber-800', shape: 'rectangle' },
    quantity: 1,
    originalPrice: 395,
    discountedPrice: 306
  },
  {
    id: 'cart-5',
    product: { id: '10', name: 'Armchair', sku: '7856446', price: 140, color: 'bg-gray-600', shape: 'rectangle' },
    quantity: 3,
    originalPrice: 140,
    discountedPrice: 400
  }
];

const calculateComputedValues = (cartItems: CartItem[]) => {
  const subtotal = cartItems.reduce((total, item) => {
    const price = item.discountedPrice || item.originalPrice;
    return total + (price * item.quantity);
  }, 0);
  
  const tax = subtotal * 0.1; // 10% tax
  
  const discount = cartItems.reduce((total, item) => {
    if (item.discountedPrice && item.discountedPrice < item.originalPrice) {
      return total + ((item.originalPrice - item.discountedPrice) * item.quantity);
    }
    return total;
  }, 0);
  
  const total = subtotal + tax - discount;
  
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  return { subtotal, tax, discount, total, totalItems };
};

export const useStore = create<StoreState>((set, get) => {
  const initialComputedValues = calculateComputedValues(initialCartItems);
  
  return {
    // Initial state
    products: sampleProducts,
    filteredProducts: sampleProducts,
    searchQuery: '',
    cartItems: initialCartItems,
    activeMenuItem: 'Home',
    sellMenuExpanded: true,
    loadingProductId: null,
    
    // Initial computed values
    ...initialComputedValues,
  
  // Actions
  updateComputedValues: () => {
    const { cartItems } = get();
    const computedValues = calculateComputedValues(cartItems);
    set(computedValues);
  },
  
  setSearchQuery: (query: string) => {
    set((state) => {
      const filtered = query.trim() === '' 
        ? state.products 
        : state.products.filter(product => 
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.sku.toLowerCase().includes(query.toLowerCase())
          );
      return {
        searchQuery: query,
        filteredProducts: filtered
      };
    });
  },
  
  addToCart: (product: Product) => {
    set((state) => {
      const existingItem = state.cartItems.find(item => item.product.id === product.id);
      
      let newCartItems;
      if (existingItem) {
        newCartItems = state.cartItems.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        const newItem: CartItem = {
          id: `cart-${Date.now()}`,
          product,
          quantity: 1,
          originalPrice: product.price
        };
        newCartItems = [...state.cartItems, newItem];
      }
      
      const computedValues = calculateComputedValues(newCartItems);
      return {
        cartItems: newCartItems,
        ...computedValues
      };
    });
  },
  
  removeFromCart: (itemId: string) => {
    set((state) => {
      const newCartItems = state.cartItems.filter(item => item.id !== itemId);
      const computedValues = calculateComputedValues(newCartItems);
      return {
        cartItems: newCartItems,
        ...computedValues
      };
    });
  },
  
  updateQuantity: (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      get().removeFromCart(itemId);
      return;
    }
    
    set((state) => {
      const newCartItems = state.cartItems.map(item =>
        item.id === itemId
          ? { ...item, quantity }
          : item
      );
      
      const computedValues = calculateComputedValues(newCartItems);
      return {
        cartItems: newCartItems,
        ...computedValues
      };
    });
  },
  
  setActiveMenuItem: (item: string) => {
    set({ activeMenuItem: item });
  },
  
  toggleSellMenu: () => {
    set((state) => ({ sellMenuExpanded: !state.sellMenuExpanded }));
  },
  
  setLoadingProductId: (productId: string | null) => {
    set({ loadingProductId: productId });
  }
};
});