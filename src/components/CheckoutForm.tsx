import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { orderConfig } from "@/config/orderConfig";

type FulfillmentType = "delivery" | "collection";
type PaymentMethod = "card" | "cash";

const CheckoutForm = () => {
  const { items, getTotal, clearCart } = useCart();
  const { toast } = useToast();
  
  const [fulfillmentType, setFulfillmentType] = useState<FulfillmentType>("delivery");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");
  const [isProcessing, setIsProcessing] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    notes: ""
  });

  const subtotal = getTotal();
  const discount = subtotal * 0.1; // 10% discount
  const total = subtotal - discount;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.fullName || !formData.phone) {
      toast({
        variant: "destructive",
        title: "Missing Information",
        description: "Please fill in your name and phone number."
      });
      return;
    }

    if (fulfillmentType === "delivery" && !formData.address) {
      toast({
        variant: "destructive",
        title: "Missing Address",
        description: "Please enter your delivery address."
      });
      return;
    }

    setIsProcessing(true);

    try {
      const orderData = {
        customerName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        address: fulfillmentType === "delivery" ? formData.address : "Collection",
        items: items.map(item => ({
          name: item.name,
          quantity: item.quantity,
          price: item.price
        })),
        notes: formData.notes,
        subtotal: subtotal.toFixed(2),
        discount: discount.toFixed(2),
        total: total.toFixed(2),
        fulfillmentType: fulfillmentType,
        paymentMethod: paymentMethod
      };

      if (paymentMethod === "card") {
        // Stripe checkout
        const response = await fetch(orderConfig.cardCheckout, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(orderData)
        });

        if (!response.ok) {
          throw new Error("Failed to create checkout session");
        }

        const { sessionUrl } = await response.json();
        
        // Redirect to Stripe
        window.location.href = sessionUrl;
      } else {
        // Cash order
        const response = await fetch(orderConfig.cashOrders, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(orderData)
        });

        if (!response.ok) {
          throw new Error("Failed to submit order");
        }

        const result = await response.json();

        toast({
          title: "Order Placed!",
          description: `Your order #${result.orderId} has been received. We'll call you to confirm.`
        });

        clearCart();
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          address: "",
          notes: ""
        });
      }
    } catch (error) {
      console.error("Checkout error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to process your order. Please try again."
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="font-heading text-2xl font-bold text-dark mb-6">Checkout</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Fulfillment Type */}
        <div>
          <label className="block text-sm font-medium text-dark mb-2">
            Order Type *
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setFulfillmentType("delivery")}
              className={`py-3 px-4 rounded-md border-2 font-medium transition-all ${
                fulfillmentType === "delivery"
                  ? "border-terracotta bg-terracotta/10 text-terracotta"
                  : "border-border text-muted-foreground hover:border-terracotta/50"
              }`}
            >
              Delivery
            </button>
            <button
              type="button"
              onClick={() => setFulfillmentType("collection")}
              className={`py-3 px-4 rounded-md border-2 font-medium transition-all ${
                fulfillmentType === "collection"
                  ? "border-terracotta bg-terracotta/10 text-terracotta"
                  : "border-border text-muted-foreground hover:border-terracotta/50"
              }`}
            >
              Collection
            </button>
          </div>
        </div>

        {/* Payment Method */}
        <div>
          <label className="block text-sm font-medium text-dark mb-2">
            Payment Method *
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setPaymentMethod("card")}
              className={`py-3 px-4 rounded-md border-2 font-medium transition-all ${
                paymentMethod === "card"
                  ? "border-terracotta bg-terracotta/10 text-terracotta"
                  : "border-border text-muted-foreground hover:border-terracotta/50"
              }`}
            >
              Pay by Card
            </button>
            <button
              type="button"
              onClick={() => setPaymentMethod("cash")}
              className={`py-3 px-4 rounded-md border-2 font-medium transition-all ${
                paymentMethod === "cash"
                  ? "border-terracotta bg-terracotta/10 text-terracotta"
                  : "border-border text-muted-foreground hover:border-terracotta/50"
              }`}
            >
              Cash
            </button>
          </div>
        </div>

        {/* Form Fields */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-dark mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-terracotta"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-dark mb-1">
              Phone *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-terracotta"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-dark mb-1">
              Email (optional)
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-terracotta"
            />
          </div>
        </div>

        {fulfillmentType === "delivery" && (
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-dark mb-1">
              Delivery Address *
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required={fulfillmentType === "delivery"}
              placeholder="Street address, city, postcode"
              className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-terracotta"
            />
          </div>
        )}

        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-dark mb-1">
            Order Notes (optional)
          </label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleInputChange}
            rows={3}
            placeholder="Allergies, preferences, etc."
            className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-terracotta resize-none"
          />
        </div>

        {/* Order Summary */}
        <div className="border-t border-border pt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Subtotal:</span>
            <span className="font-medium">£{subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-green-600">
            <span>10% Takeaway Discount:</span>
            <span className="font-medium">-£{discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-lg font-bold text-dark pt-2 border-t border-border">
            <span>Total:</span>
            <span>£{total.toFixed(2)}</span>
          </div>
        </div>

        <button
          type="submit"
          disabled={isProcessing}
          className="w-full bg-terracotta text-cream py-3 rounded-md font-medium hover:bg-terracotta/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isProcessing 
            ? "Processing..." 
            : paymentMethod === "card" 
              ? "Proceed to Payment" 
              : "Place Order"}
        </button>

        <p className="text-xs text-muted-foreground text-center">
          {paymentMethod === "card" 
            ? "You will be redirected to our secure payment page"
            : `Pay cash on ${fulfillmentType}`}
        </p>
      </form>
    </div>
  );
};

export default CheckoutForm;

