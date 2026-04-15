import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MenuItemCard from "@/components/MenuItemCard";
import CartPanel from "@/components/CartPanel";
import CheckoutForm from "@/components/CheckoutForm";
import { menuCategories } from "@/data/menuData";
import { useCart } from "@/contexts/CartContext";

const OrderPage = () => {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const { items } = useCart();

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="text-amber font-body text-sm uppercase tracking-[0.3em] font-semibold">Takeaway & Delivery</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-dark mt-2">Order Online</h1>
            <div className="w-16 h-0.5 bg-terracotta mx-auto mt-4" />
            <p className="text-muted-foreground text-sm mt-3">10% discount applied automatically on all orders</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left: Menu */}
            <div className="flex-1">
              {/* Category tabs */}
              <div className="flex gap-2 overflow-x-auto pb-3 mb-6">
                {menuCategories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`whitespace-nowrap px-4 py-2 rounded-sm text-sm font-medium transition-all ${
                      activeCategory === cat.id
                        ? "bg-terracotta text-cream"
                        : "bg-muted text-muted-foreground hover:bg-border"
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              {menuCategories
                .filter(cat => cat.id === activeCategory)
                .map(cat => (
                  <motion.div
                    key={cat.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="font-heading text-2xl font-bold text-dark mb-4">{cat.name}</h2>
                    <div>
                      {cat.items.map(item => (
                        <MenuItemCard key={item.id} item={item} showAddButton />
                      ))}
                    </div>
                  </motion.div>
                ))}
            </div>

            {/* Right: Cart & Checkout */}
            <div className="lg:w-[380px] shrink-0">
              <div className="sticky top-24 space-y-6">
                <CartPanel showCheckoutLink={false} />
                {items.length > 0 && <CheckoutForm />}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderPage;
