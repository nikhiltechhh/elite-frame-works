import { useState } from 'react';
import { ShoppingCart, X, Trash2, Plus, Minus, CheckCircle, Sparkles, Star, Users } from 'lucide-react';

const Gadgets = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const gadgets = [
    {
      id: 1,
      title: 'USB Rubber Ducky',
      originalPrice: 8000,
      discountPrice: 4000,
      image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&h=600&fit=crop',
      description: 'Keystroke injection tool for penetration testing',
      category: 'USB Devices',
      rating: 4.7,
      users: '3,240'
    },
    {
      id: 2,
      title: 'Wi-Fi Pineapple',
      originalPrice: 20000,
      discountPrice: 10000,
      image: 'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=800&h=600&fit=crop',
      description: 'Wireless auditing and penetration testing platform',
      category: 'Network Tools',
      rating: 4.9,
      users: '5,680'
    },
    {
      id: 3,
      title: 'Flipper Zero',
      originalPrice: 30000,
      discountPrice: 15000,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
      description: 'Multi-tool device for hackers and geeks',
      category: 'Multi-Tools',
      rating: 4.9,
      users: '12,450'
    },
    {
      id: 4,
      title: 'HackRF One',
      originalPrice: 50000,
      discountPrice: 25000,
      image: 'https://images.unsplash.com/photo-1591799265444-d66432b91588?w=800&h=600&fit=crop',
      description: 'Software-defined radio platform for RF analysis',
      category: 'SDR Tools',
      rating: 4.8,
      users: '4,320'
    },
    {
      id: 5,
      title: 'Raspberry Pi Zero W',
      originalPrice: 3000,
      discountPrice: 1500,
      image: 'https://images.unsplash.com/photo-1553406830-ef2513450d76?w=800&h=600&fit=crop',
      description: 'Compact wireless-enabled single-board computer',
      category: 'SBC',
      rating: 4.8,
      users: '18,920'
    },
    {
      id: 6,
      title: 'Proxmark3',
      originalPrice: 35000,
      discountPrice: 17500,
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop',
      description: 'RFID research and penetration testing tool',
      category: 'RFID Tools',
      rating: 4.7,
      users: '2,840'
    },
    {
      id: 7,
      title: 'KeyGrabber USB Keylogger',
      originalPrice: 12000,
      discountPrice: 6000,
      image: 'https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?w=800&h=600&fit=crop',
      description: 'Hardware keylogger for security assessments',
      category: 'USB Devices',
      rating: 4.6,
      users: '1,920'
    },
    {
      id: 8,
      title: 'Bash Bunny',
      originalPrice: 18000,
      discountPrice: 9000,
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop',
      description: 'Multi-function USB attack and automation platform',
      category: 'USB Devices',
      rating: 4.8,
      users: '4,560'
    },
    {
      id: 9,
      title: 'LAN Turtle',
      originalPrice: 15000,
      discountPrice: 7500,
      image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&h=600&fit=crop',
      description: 'Covert network implant for remote access',
      category: 'Network Tools',
      rating: 4.7,
      users: '3,120'
    },
    {
      id: 10,
      title: 'ESP8266/ESP32',
      originalPrice: 2000,
      discountPrice: 1000,
      image: 'https://images.unsplash.com/photo-1608564697071-ddf911d81370?w=800&h=600&fit=crop',
      description: 'Wi-Fi and Bluetooth microcontroller modules',
      category: 'IoT Devices',
      rating: 4.9,
      users: '22,340'
    },
    {
      id: 11,
      title: 'Bluetooth Jammer',
      originalPrice: 25000,
      discountPrice: 12500,
      image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=600&fit=crop',
      description: 'Signal disruption device for security testing',
      category: 'RF Tools',
      rating: 4.5,
      users: '1,680'
    }
  ];

  const addToCart = (gadget: any) => {
    const existingItem = cart.find(item => item.id === gadget.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === gadget.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...gadget, quantity: 1 }]);
    }
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };

  const removeFromCart = (gadgetId: number) => {
    setCart(cart.filter(item => item.id !== gadgetId));
  };

  const updateQuantity = (gadgetId: number, delta: number) => {
    setCart(cart.map(item => {
      if (item.id === gadgetId) {
        const newQuantity = item.quantity + delta;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.discountPrice * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalSavings = () => {
    return cart.reduce((total, item) => total + ((item.originalPrice - item.discountPrice) * item.quantity), 0);
  };

  return (
  <div className="min-h-screen bg-background font-gaming text-foreground overflow-x-hidden relative">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-glow-pulse"></div>
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Success Notification */}
      {showSuccess && (
        <div className="fixed top-6 right-6 bg-gradient-to-r from-success to-emerald-500 text-success-foreground px-6 py-4 rounded-2xl shadow-2xl z-50 flex items-center gap-3 animate-slide-in-right">
          <CheckCircle size={24} className="animate-scale-in" />
          <div>
            <p className="font-bold">Success!</p>
            <p className="text-sm opacity-90">Added to cart</p>
          </div>
        </div>
      )}

      {/* Hero Banner */}
      <div className="relative z-10 py-12 md:py-20 px-4">
        <div className="container mx-auto text-center">
          {/* Optional promo badge (kept commented) */}
          {/* <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 px-6 py-2 rounded-full mb-6 backdrop-blur-sm animate-slide-in-up">
            <Sparkles size={20} className="text-yellow-400 animate-glow-pulse" />
            <span className="text-yellow-300 font-semibold">Limited Time Offer</span>
          </div> */}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
            Premium Hacking Gadgets
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-4 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            Professional penetration testing tools at 50% OFF
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm md:text-base animate-slide-in-up mt-6" style={{ animationDelay: '0.3s' }}>
            <div className="bg-card/50 backdrop-blur-md px-6 py-3 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <span className="text-muted-foreground">🛠️ </span>
              <span className="font-semibold">Pro-Grade Tools</span>
            </div>
            <div className="bg-card/50 backdrop-blur-md px-6 py-3 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <span className="text-muted-foreground">⭐ </span>
              <span className="font-semibold">4.7 Average Rating</span>
            </div>
            <div className="bg-card/50 backdrop-blur-md px-6 py-3 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <span className="text-muted-foreground">🔥 </span>
              <span className="font-semibold text-orange-400">50% OFF Today</span>
            </div>
          </div>
        </div>
      </div>

      {/* Gadgets Grid */}
      <div className="relative z-10 container mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {gadgets.map((gadget, index) => (
            <div
              key={gadget.id}
              className="group bg-card/50 backdrop-blur-lg rounded-3xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 animate-slide-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={gadget.image}
                  alt={gadget.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-glow-pulse">
                    50% OFF
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <div className="bg-black/60 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-medium border border-white/20">
                    {gadget.category}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex items-center gap-4 text-white text-sm">
                    <div className="flex items-center gap-1">
                      <Star size={16} className="fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{gadget.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={16} />
                      <span className="font-semibold">{gadget.users}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {gadget.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
                  {gadget.description}
                </p>
                <div className="flex items-baseline gap-3 mb-5">
                  <span className="text-3xl font-black text-white">
  ₹{gadget.discountPrice.toLocaleString()}
</span>

                  <span className="text-base text-foreground/50 line-through">
                    ₹{gadget.originalPrice.toLocaleString()}
                  </span>
                </div>
                <button
                  onClick={() => addToCart(gadget)}
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-bold py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-primary/30 transform hover:scale-105"
                >
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Cart Button */}
      {cart.length > 0 && (
        <button
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-primary to-accent text-primary-foreground p-5 rounded-full shadow-2xl hover:shadow-primary/50 hover:scale-110 transition-all duration-300 z-40 group animate-scale-in"
        >
          <ShoppingCart size={28} />
          <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-lg animate-glow-pulse">
            {getTotalItems()}
          </span>
          <div className="absolute bottom-full right-0 mb-2 bg-black/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            View Cart
          </div>
        </button>
      )}

      {/* Cart Sidebar Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 transition-opacity duration-300 animate-scale-in"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Cart Sidebar */}
      <div
        className={`fixed right-0 top-0 h-full w-full sm:w-[90vw] md:w-[480px] bg-gradient-to-b from-card via-card to-background shadow-2xl z-50 transition-transform duration-500 ease-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        } border-l border-primary/30`}
      >
        <div className="flex flex-col h-full">
          {/* Cart Header */}
          <div className="p-6 border-b border-border bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-md">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-2xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Shopping Cart
              </h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-muted-foreground hover:text-foreground hover:rotate-90 transition-all duration-300 bg-secondary/50 p-2 rounded-full hover:bg-secondary"
              >
                <X size={24} />
              </button>
            </div>
            {cart.length > 0 && (
              <p className="text-sm text-muted-foreground">
                {getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'} in cart
              </p>
            )}
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-8 rounded-full mb-6 animate-float">
                  <ShoppingCart size={64} className="text-primary" />
                </div>
                <p className="text-xl font-semibold text-foreground mb-2">Your cart is empty</p>
                <p className="text-muted-foreground">Add gadgets to get started!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="bg-card/50 backdrop-blur-lg rounded-2xl p-4 border border-border hover:border-primary/30 transition-all duration-300 group animate-slide-in-up"
                  >
                    <div className="flex gap-4">
                      <div className="relative flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-24 h-24 object-cover rounded-xl"
                        />
                        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                          50%
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-sm mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                          {item.title}  
                        </h3>
                        <p className="text-xs text-muted-foreground mb-2">{item.category}</p>
                        <div className="flex items-baseline gap-2 mb-3">
                          <span className="text-lg font-bold text-success">
                            ₹{item.discountPrice.toLocaleString()}
                          </span>
                          <span className="text-xs text-foreground/50 line-through">
                            ₹{item.originalPrice.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 bg-secondary/50 rounded-lg p-1">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="bg-transparent hover:bg-transparent p-1.5 rounded-lg transition-colors"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="px-3 py-1 font-bold text-sm">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="bg-transparent hover:bg-transparent p-1.5 rounded-lg transition-colors"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-destructive hover:text-destructive/80 hover:scale-110 transition-all p-2"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Cart Footer */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-border bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-md space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Subtotal:</span>
                  <span className="font-semibold">₹{getTotalPrice().toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">You Save:</span>
                  <span className="font-bold text-success">₹{getTotalSavings().toLocaleString()}</span>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">Total:</span>
                  <span className="text-3xl font-black bg-gradient-to-r from-success to-emerald-400 bg-clip-text text-transparent">
                    ₹{getTotalPrice().toLocaleString()}
                  </span>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-success to-emerald-600 hover:from-success/90 hover:to-emerald-600/90 text-success-foreground font-bold py-4 rounded-xl transition-all duration-300 text-lg shadow-lg hover:shadow-success/30 transform hover:scale-105">
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gadgets;
