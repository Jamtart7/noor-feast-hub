import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import NoorLogo from "./NoorLogo";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  const links = [
    { to: "/", label: "Home" },
    { to: "/menu", label: "Menu" },
    { to: "/order", label: "Order Online" },
    { to: "/events", label: "Events" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-cream/95 backdrop-blur-md shadow-sm" : "bg-cream/90 backdrop-blur-sm"}`}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center">
          <NoorLogo size={56} />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className="text-dark font-medium text-sm uppercase tracking-widest hover:text-terracotta transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link to="/order" className="relative">
            <ShoppingBag className="w-5 h-5 text-dark hover:text-terracotta transition-colors" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-terracotta text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {itemCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-4">
          <Link to="/order" className="relative">
            <ShoppingBag className="w-5 h-5 text-dark" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-terracotta text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {itemCount}
              </span>
            )}
          </Link>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-dark">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cream/95 backdrop-blur-md border-t border-border"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {links.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-dark font-medium text-sm uppercase tracking-widest hover:text-terracotta transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
