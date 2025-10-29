import { useState, useEffect } from "react";
import { Menu, X, Search, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Authdialog from "./Authdialog";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [authDialogOpen, setAuthDialogOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("signup");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "#about" },
    { name: "TOURNAMENT", href: "#tournament" },
    { name: "COURSES", href: "/course" },
    { name: "GADGETS", href: "/gadgets" },
    { name: "CONTACT US", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg shadow-primary/10" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group cursor-pointer">
              <div className="relative">
                <div className="w-10 h-10 bg-primary clip-angle flex items-center justify-center group-hover:shadow-[0_0_20px_hsl(var(--gaming-glow)/0.6)] transition-all duration-300">
                  <div className="w-6 h-6 border-2 border-background" />
                </div>
              </div>
              <span className="text-2xl font-bold tracking-wider">
                Skill<span className="text-primary text-glow">Coders</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
                {navItems.map((item, index) => (
                  item.href.startsWith("/") ? (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-sm font-semibold text-foreground/80 hover:text-primary transition-all duration-300 relative group cursor-pointer"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                    </Link>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-sm font-semibold text-foreground/80 hover:text-primary transition-all duration-300 relative group cursor-pointer"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                    </a>
                  )
                ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              {/* Search Icon */}
              <button className="p-2 hover:text-primary transition-colors cursor-pointer hidden md:block">
                <Search className="w-5 h-5" />
              </button>

              {/* Sign In Button */}
              <Button 
                variant="gaming" 
                size="lg" 
                className="hidden md:flex gap-2"
                onClick={() => {
                  setAuthMode("signup");
                  setAuthDialogOpen(true);
                }}
              >
                <LogIn className="w-4 h-4" />
                SIGN UP
              </Button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 hover:text-primary transition-colors cursor-pointer"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <div className="flex flex-col gap-1.5">
                    <span className="w-4 h-0.5 bg-current transition-all" />
                    <span className="w-6 h-0.5 bg-current transition-all" />
                    <span className="w-6 h-0.5 bg-current transition-all" />
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-background/95 backdrop-blur-md transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div
          className={`absolute top-20 left-0 right-0 bg-card/95 backdrop-blur-md border-t border-primary/20 transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <nav className="container mx-auto px-4 py-8 flex flex-col gap-6">
            {navItems.map((item, index) => (
              item.href.startsWith("/") ? (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-bold text-foreground hover:text-primary transition-all duration-300 animate-slide-in cursor-pointer"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-bold text-foreground hover:text-primary transition-all duration-300 animate-slide-in cursor-pointer"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.name}
                </a>
              )
            ))}
            <Button 
              variant="gaming" 
              size="lg" 
              className="w-full mt-4 gap-2"
              onClick={() => {
                setAuthMode("signup");
                setAuthDialogOpen(true);
                setIsMobileMenuOpen(false);
              }}
            >
              <LogIn className="w-4 h-4" />
              SIGN UP
            </Button>
          </nav>
        </div>
      </div>

      {/* Auth Dialog */}
      <Authdialog 
        open={authDialogOpen} 
        onOpenChange={setAuthDialogOpen}
        defaultMode={authMode}
      />
    </>
  );
};

export default Header;
