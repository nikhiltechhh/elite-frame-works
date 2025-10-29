import { useState } from 'react';
import { ShoppingCart, X, Trash2, Plus, Minus, CheckCircle, Sparkles, Star, Users } from 'lucide-react';

const Index = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const courses = [
    {
      id: 1,
      title: 'C Programming Mastery',
      originalPrice: 5000,
      discountPrice: 2500,
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
      description: 'Master C programming from basics to advanced concepts',
      category: 'Programming',
      rating: 4.8,
      students: '12,450'
    },
    {
      id: 2,
      title: 'Java Complete Course',
      originalPrice: 5000,
      discountPrice: 2500,
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
      description: 'Comprehensive Java development bootcamp',
      category: 'Programming',
      rating: 4.9,
      students: '18,320'
    },
    {
      id: 3,
      title: 'Ethical Hacking for Beginners',
      originalPrice: 2000,
      discountPrice: 1000,
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop',
      description: 'Start your journey in cybersecurity Concepts',
      category: 'Cybersecurity',
      rating: 4.7,
      students: '9,840'
    },
    {
      id: 4,
      title: 'Ethical Hacking VAPT',
      originalPrice: 6000,
      discountPrice: 3000,
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop',
      description: 'Advanced Vulnerability Assessment & Penetration Testing',
      category: 'Cybersecurity',
      rating: 4.9,
      students: '7,560'
    },
    {
      id: 5,
      title: 'SOC Analyst Professional',
      originalPrice: 6000,
      discountPrice: 3000,
      image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&h=600&fit=crop',
      description: 'Become a Security Operations Center expert',
      category: 'Cybersecurity',
      rating: 4.8,
      students: '5,920'
    },
    {
      id: 6,
      title: 'Web Development Bootcamp',
      originalPrice: 5000,
      discountPrice: 2500,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
      description: 'Full-stack web development from scratch',
      category: 'Web Development',
      rating: 4.9,
      students: '22,150'
    },
    {
      id: 7,
      title: 'Python with AI/ML',
      originalPrice: 5000,
      discountPrice: 2500,
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=600&fit=crop',
      description: 'Python programming with AI and Machine Learning',
      category: 'AI & Data Science',
      rating: 4.9,
      students: '16,780'
    },
    {
      id: 8,
      title: 'API Testing Masterclass',
      originalPrice: 10000,
      discountPrice: 5000,
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=600&fit=crop',
      description: 'Complete API testing and automation course',
      category: 'Testing',
      rating: 4.8,
      students: '8,430'
    }
  ];

  const addToCart = (course: any) => {
    const existingItem = cart.find(item => item.id === course.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === course.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...course, quantity: 1 }]);
    }
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };

  const removeFromCart = (courseId: number) => {
    setCart(cart.filter(item => item.id !== courseId));
  };

  const updateQuantity = (courseId: number, delta: number) => {
    setCart(cart.map(item => {
      if (item.id === courseId) {
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
  <div className="min-h-screen bg-background font-gaming text-foreground overflow-x-hidden relative mt-20">
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
      <div className="relative z-10 py-12 md:py-20 px-4 ">
        <div className="container mx-auto text-center -mt-12">
          {/* Optional badge (kept commented out) */}
          {/* <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 px-6 py-2 rounded-full mb-6 backdrop-blur-sm animate-slide-in-up">
            <Sparkles size={20} className="text-yellow-400 animate-glow-pulse" />
            <span className="text-yellow-300 font-semibold">Limited Time Offer</span>
          </div> */}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
            Transform Your Career
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-4 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            Master in-demand skills with our premium courses at 50% OFF
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm md:text-base animate-slide-in-up mt-6" style={{ animationDelay: '0.3s' }}>
            <div className="bg-card/50 backdrop-blur-md px-6 py-3 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <span className="text-muted-foreground">🎓 </span>
              <span className="font-semibold">100K+ Students</span>
            </div>
            <div className="bg-card/50 backdrop-blur-md px-6 py-3 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <span className="text-muted-foreground">⭐ </span>
              <span className="font-semibold">4.8 Average Rating</span>
            </div>
            <div className="bg-card/50 backdrop-blur-md px-6 py-3 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <span className="text-muted-foreground">🔥 </span>
              <span className="font-semibold text-orange-400">50% OFF Today</span>
            </div>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="relative z-10 container mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className="group bg-card/50 backdrop-blur-lg rounded-3xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 animate-slide-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
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
                    {course.category}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex items-center gap-4 text-white text-sm">
                    <div className="flex items-center gap-1">
                      <Star size={16} className="fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{course.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={16} />
                      <span className="font-semibold">{course.students}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
                  {course.description}
                </p>
                <div className="flex items-baseline gap-3 mb-5">
                  <span className="text-3xl font-black bg-gradient-to-r from-success to-emerald-400">
                    ₹{course.discountPrice.toLocaleString()}
                  </span>
                  <span className="line-through text-white">
                    ₹{course.originalPrice.toLocaleString()}
                  </span>
                </div>
                <button
                  onClick={() => addToCart(course)}
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
                <p className="text-muted-foreground">Add courses to get started!</p>
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

export default Index;
