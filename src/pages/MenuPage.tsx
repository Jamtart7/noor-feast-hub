import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MenuItemCard from "@/components/MenuItemCard";
import { menuCategories } from "@/data/menuData";

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-amber font-body text-sm uppercase tracking-[0.3em] font-semibold">Explore</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-dark mt-2">Our Menu</h1>
            <div className="w-16 h-0.5 bg-terracotta mx-auto mt-4 mb-6" />
            <Link
              to="/order"
              className="inline-block bg-terracotta text-cream px-6 py-2.5 rounded-sm font-body font-semibold text-sm uppercase tracking-widest hover:bg-terracotta/90 transition-colors"
            >
              Order Now
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Category nav */}
            <div className="lg:w-56 shrink-0">
              <div className="sticky top-24 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
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
            </div>

            {/* Items */}
            <div className="flex-1">
              {menuCategories
                .filter(cat => cat.id === activeCategory)
                .map(cat => (
                  <motion.div
                    key={cat.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="font-heading text-2xl font-bold text-dark mb-6">{cat.name}</h2>
                    <div>
                      {cat.items.map(item => (
                        <MenuItemCard key={item.id} item={item} />
                      ))}
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MenuPage;
