import { useState, useRef, FormEvent } from "react";
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";

interface OrderDetails {
  name: string;
  phone: string;
  email: string;
  orderType: "delivery" | "collection";
  address: string;
  instructions: string;
}

const generateOrderRef = () => {
  const num = Math.floor(Math.random() * 9999) + 1;
  return `NOOR-${String(num).padStart(4, "0")}`;
};

const CheckoutForm = () => {
  const { items, subtotal, discount, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [details, setDetails] = useState<OrderDetails>({
    name: "", phone: "", email: "", orderType: "delivery", address: "", instructions: "",
  });
  const deliveryMinimum = 15;
  const belowMinimum = details.orderType === "delivery" && total < deliveryMinimum;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (items.length === 0 || belowMinimum) return;
    setSubmitting(true);

    const orderRef = generateOrderRef();
    const timestamp = new Date().toLocaleString("en-GB", { dateStyle: "full", timeStyle: "short" });

    // Build order summary for email
    const itemsText = items.map(i => `${i.name} x${i.quantity} — £${(i.price * i.quantity).toFixed(2)}`).join("\n");
    const summary = `
ORDER REFERENCE: ${orderRef}
DATE: ${timestamp}

ITEMS:
${itemsText}

Subtotal: £${subtotal.toFixed(2)}
10% Takeaway Discount: -£${discount.toFixed(2)}
TOTAL: £${total.toFixed(2)}

CUSTOMER DETAILS:
Name: ${details.name}
Phone: ${details.phone}
Email: ${details.email}
${details.orderType === "delivery" ? `Delivery Address: ${details.address}` : "Collection"}
${details.instructions ? `Special Instructions: ${details.instructions}` : ""}
    `.trim();

    // Store order for confirmation page
    sessionStorage.setItem("noor-order", JSON.stringify({
      orderRef, timestamp, items, subtotal, discount, total,
      customer: details, summary,
    }));

    // TODO: EmailJS integration - user needs to set up EmailJS service
    // For now, log the order and redirect to confirmation
    console.log("Order submitted:", summary);

    clearCart();
    setSubmitting(false);
    navigate("/order-confirmation");
  };

  return (
    <form onSubmit={handleSubmit} id="checkout" className="bg-popover rounded-sm p-6 shadow-lg border border-border space-y-5">
      <h3 className="font-heading font-bold text-dark text-xl">Checkout</h3>

      <div>
        <label className="block text-sm font-medium text-dark mb-1">Full Name *</label>
        <input
          required value={details.name}
          onChange={e => setDetails(d => ({ ...d, name: e.target.value }))}
          className="w-full border border-input rounded-sm px-3 py-2.5 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-terracotta/30"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-dark mb-1">Phone *</label>
          <input
            required type="tel" value={details.phone}
            onChange={e => setDetails(d => ({ ...d, phone: e.target.value }))}
            className="w-full border border-input rounded-sm px-3 py-2.5 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-terracotta/30"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-dark mb-1">Email *</label>
          <input
            required type="email" value={details.email}
            onChange={e => setDetails(d => ({ ...d, email: e.target.value }))}
            className="w-full border border-input rounded-sm px-3 py-2.5 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-terracotta/30"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-dark mb-2">Order Type *</label>
        <div className="flex gap-4">
          {(["delivery", "collection"] as const).map(type => (
            <label key={type} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio" name="orderType" checked={details.orderType === type}
                onChange={() => setDetails(d => ({ ...d, orderType: type }))}
                className="accent-terracotta"
              />
              <span className="text-sm capitalize text-dark">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {details.orderType === "delivery" && (
        <div>
          <label className="block text-sm font-medium text-dark mb-1">Delivery Address *</label>
          <textarea
            required value={details.address}
            onChange={e => setDetails(d => ({ ...d, address: e.target.value }))}
            rows={2}
            className="w-full border border-input rounded-sm px-3 py-2.5 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-terracotta/30 resize-none"
          />
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-dark mb-1">Special Instructions</label>
        <textarea
          value={details.instructions}
          onChange={e => setDetails(d => ({ ...d, instructions: e.target.value }))}
          rows={2} placeholder="Allergies, preferences, etc."
          className="w-full border border-input rounded-sm px-3 py-2.5 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-terracotta/30 resize-none placeholder:text-muted-foreground"
        />
      </div>

      {belowMinimum && (
        <div className="bg-amber/10 border border-amber/30 rounded-sm p-3">
          <p className="text-amber text-xs font-medium">Minimum order of £{deliveryMinimum.toFixed(2)} for delivery.</p>
        </div>
      )}

      <button
        type="submit"
        disabled={submitting || items.length === 0 || belowMinimum}
        className="w-full bg-terracotta text-cream py-3.5 rounded-sm font-body font-semibold text-sm uppercase tracking-widest hover:bg-terracotta/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? "Placing Order..." : "Place Order — Cash on Delivery"}
      </button>
    </form>
  );
};

export default CheckoutForm;
