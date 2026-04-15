import { Plus } from "lucide-react";
import { MenuItem } from "@/data/menuData";
import { useCart } from "@/contexts/CartContext";
import { motion } from "framer-motion";

interface MenuItemCardProps {
  item: MenuItem;
  showAddButton?: boolean;
}

const MenuItemCard = ({ item, showAddButton = false }: MenuItemCardProps) => {
  const { addItem } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex items-start justify-between gap-4 py-4 border-b border-border/50 last:border-0 group"
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h4 className="font-heading font-semibold text-dark text-base">{item.name}</h4>
          {item.isPopular && (
            <span className="bg-amber/15 text-amber text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-sm">Popular</span>
          )}
        </div>
        <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{item.description}</p>
      </div>
      <div className="flex items-center gap-3 shrink-0">
        <span className="font-heading font-bold text-terracotta text-lg">£{item.price.toFixed(2)}</span>
        {showAddButton && (
          <button
            onClick={() => addItem(item)}
            className="bg-olive text-cream w-8 h-8 rounded-full flex items-center justify-center hover:bg-olive/90 transition-colors opacity-70 group-hover:opacity-100"
            aria-label={`Add ${item.name} to cart`}
          >
            <Plus className="w-4 h-4" />
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default MenuItemCard;
