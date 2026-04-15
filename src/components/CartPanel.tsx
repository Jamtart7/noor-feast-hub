import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";

interface CartPanelProps {
  showCheckoutLink?: boolean;
}

const CartPanel = ({ showCheckoutLink = true }: CartPanelProps) => {
  const { items, updateQuantity, removeItem, subtotal, discount, total } = useCart();
  const deliveryMinimum = 15;
  const belowMinimum = total < deliveryMinimum && items.length > 0;

  if (items.length === 0) {
    return (
      <div className="bg-popover rounded-sm p-6 shadow-lg border border-border">
        <h3 className="font-heading font-bold text-dark text-lg mb-3">Your Order</h3>
        <p className="text-muted-foreground text-sm">Your cart is empty. Add items from the menu to get started.</p>
      </div>
    );
  }

  return (
    <div className="bg-popover rounded-sm p-6 shadow-lg border border-border">
      <h3 className="font-heading font-bold text-dark text-lg mb-4">Your Order</h3>

      <div className="space-y-3 max-h-[40vh] overflow-y-auto">
        {items.map(item => (
          <div key={item.id} className="flex items-center justify-between gap-2 text-sm">
            <div className="flex-1 min-w-0">
              <p className="font-medium text-dark truncate">{item.name}</p>
              <p className="text-muted-foreground text-xs">£{item.price.toFixed(2)} each</p>
            </div>
            <div className="flex items-center gap-1.5">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-6 h-6 rounded-full bg-muted flex items-center justify-center hover:bg-border transition-colors">
                <Minus className="w-3 h-3" />
              </button>
              <span className="w-6 text-center font-semibold text-dark">{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-6 h-6 rounded-full bg-muted flex items-center justify-center hover:bg-border transition-colors">
                <Plus className="w-3 h-3" />
              </button>
              <button onClick={() => removeItem(item.id)} className="w-6 h-6 rounded-full flex items-center justify-center text-muted-foreground hover:text-terracotta transition-colors ml-1">
                <Trash2 className="w-3 h-3" />
              </button>
            </div>
            <span className="font-semibold text-dark w-16 text-right">£{(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>

      <div className="border-t border-border mt-4 pt-4 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="text-dark">£{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm text-olive">
          <span>10% Takeaway Discount</span>
          <span>-£{discount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-heading font-bold text-lg pt-2 border-t border-border">
          <span className="text-dark">Total</span>
          <span className="text-terracotta">£{total.toFixed(2)}</span>
        </div>
      </div>

      {belowMinimum && (
        <div className="mt-3 bg-amber/10 border border-amber/30 rounded-sm p-3">
          <p className="text-amber text-xs font-medium">
            Minimum order of £{deliveryMinimum.toFixed(2)} required for delivery. Add £{(deliveryMinimum - total).toFixed(2)} more.
          </p>
        </div>
      )}

      {showCheckoutLink && (
        <Link
          to="/order#checkout"
          className="mt-4 block w-full bg-terracotta text-cream text-center py-3 rounded-sm font-body font-semibold text-sm uppercase tracking-widest hover:bg-terracotta/90 transition-colors"
        >
          Proceed to Checkout
        </Link>
      )}
    </div>
  );
};

export default CartPanel;
