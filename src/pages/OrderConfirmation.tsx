import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface OrderData {
  orderRef: string;
  timestamp: string;
  items: Array<{ name: string; quantity: number; price: number }>;
  subtotal: number;
  discount: number;
  total: number;
  customer: { name: string; phone: string; email: string; orderType: string; address: string; instructions: string };
}

const OrderConfirmation = () => {
  const [order, setOrder] = useState<OrderData | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("noor-order");
    if (stored) setOrder(JSON.parse(stored));
  }, []);

  if (!order) {
    return (
      <div className="min-h-screen bg-cream">
        <Navbar />
        <div className="pt-32 text-center px-4">
          <h1 className="font-heading text-3xl font-bold text-dark mb-4">No Order Found</h1>
          <p className="text-muted-foreground mb-6">It looks like you haven't placed an order yet.</p>
          <Link to="/order" className="bg-terracotta text-cream px-6 py-3 rounded-sm font-body font-semibold text-sm uppercase tracking-widest hover:bg-terracotta/90 transition-colors">
            Order Now
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-8 max-w-2xl">
          <div className="text-center mb-8">
            <CheckCircle className="w-16 h-16 text-olive mx-auto mb-4" />
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-dark">Order Confirmed!</h1>
            <p className="text-muted-foreground mt-2">Thank you, {order.customer.name}. Your order has been received.</p>
          </div>

          <div className="bg-popover rounded-sm p-6 md:p-8 shadow-lg border border-border">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-border">
              <div>
                <h2 className="font-heading text-xl font-bold text-dark">Noor Restaurant</h2>
                <p className="text-muted-foreground text-xs">56 Station Lane, Hornchurch, RM12 6NB</p>
              </div>
              <div className="text-right">
                <p className="font-heading font-bold text-terracotta text-lg">{order.orderRef}</p>
                <p className="text-muted-foreground text-xs">{order.timestamp}</p>
              </div>
            </div>

            <div className="space-y-2 mb-6">
              {order.items.map((item, i) => (
                <div key={i} className="flex justify-between text-sm">
                  <span className="text-dark">{item.name} <span className="text-muted-foreground">×{item.quantity}</span></span>
                  <span className="text-dark font-medium">£{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4 space-y-1.5">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>£{order.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-olive">
                <span>10% Discount</span>
                <span>-£{order.discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-heading font-bold text-lg pt-2 border-t border-border">
                <span className="text-dark">Total</span>
                <span className="text-terracotta">£{order.total.toFixed(2)}</span>
              </div>
            </div>

            <div className="border-t border-border mt-6 pt-4 space-y-1 text-sm">
              <p><span className="text-muted-foreground">Name:</span> <span className="text-dark">{order.customer.name}</span></p>
              <p><span className="text-muted-foreground">Phone:</span> <span className="text-dark">{order.customer.phone}</span></p>
              <p><span className="text-muted-foreground">Email:</span> <span className="text-dark">{order.customer.email}</span></p>
              <p><span className="text-muted-foreground">Type:</span> <span className="text-dark capitalize">{order.customer.orderType}</span></p>
              {order.customer.orderType === "delivery" && (
                <p><span className="text-muted-foreground">Address:</span> <span className="text-dark">{order.customer.address}</span></p>
              )}
              {order.customer.instructions && (
                <p><span className="text-muted-foreground">Instructions:</span> <span className="text-dark">{order.customer.instructions}</span></p>
              )}
            </div>

            <div className="mt-6 bg-muted/50 rounded-sm p-4 text-center">
              <p className="text-sm text-muted-foreground">Payment: <span className="font-semibold text-dark">Cash on Delivery</span></p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link to="/" className="text-terracotta font-medium text-sm hover:underline">Back to Home</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderConfirmation;
