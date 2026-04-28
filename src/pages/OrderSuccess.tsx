import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface SuccessData {
  orderId: string;
  paymentMethod: string;
  customer: { name: string; email?: string; phone: string; address: string; notes?: string };
  items: Array<{ name: string; quantity: number; price: number }>;
  total: number;
}

const OrderSuccess = () => {
  const [order, setOrder] = useState<SuccessData | null>(null);

  useEffect(() => {
    const stored =
      sessionStorage.getItem("noor-order-success") ??
      sessionStorage.getItem("noor-order-pending");
    if (stored) {
      setOrder(JSON.parse(stored));
      sessionStorage.removeItem("noor-order-pending");
    }
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-8 max-w-2xl">
          <div className="text-center mb-8">
            <CheckCircle className="w-16 h-16 text-olive mx-auto mb-4" />
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-dark">Order Confirmed!</h1>
            <p className="text-muted-foreground mt-2">
              {order ? `Thank you, ${order.customer.name}. We've received your order.` : "Thank you for your order."}
            </p>
          </div>

          {order && (
            <Card className="border-border shadow-lg">
              <CardContent className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-6 pb-4 border-b border-border">
                  <div>
                    <h2 className="font-heading text-xl font-bold text-dark">Noor Restaurant</h2>
                    <p className="text-muted-foreground text-xs">{order.paymentMethod}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-muted-foreground text-xs">Order Ref</p>
                    <p className="font-heading font-bold text-terracotta text-lg">{order.orderId}</p>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {order.items.map((item, i) => (
                    <div key={i} className="flex justify-between text-sm">
                      <span className="text-dark">
                        {item.name} <span className="text-muted-foreground">×{item.quantity}</span>
                      </span>
                      <span className="text-dark font-medium">£{(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-4 flex justify-between font-heading font-bold text-lg">
                  <span className="text-dark">Total</span>
                  <span className="text-terracotta">£{order.total.toFixed(2)}</span>
                </div>

                <div className="border-t border-border mt-6 pt-4 space-y-1 text-sm">
                  <p><span className="text-muted-foreground">Phone:</span> <span className="text-dark">{order.customer.phone}</span></p>
                  {order.customer.email && (
                    <p><span className="text-muted-foreground">Email:</span> <span className="text-dark">{order.customer.email}</span></p>
                  )}
                  <p><span className="text-muted-foreground">Address:</span> <span className="text-dark">{order.customer.address}</span></p>
                  {order.customer.notes && (
                    <p><span className="text-muted-foreground">Notes:</span> <span className="text-dark">{order.customer.notes}</span></p>
                  )}
                </div>
              </CardContent>
            </Card>
          )}

          <div className="text-center mt-8">
            <Button asChild className="bg-terracotta text-cream hover:bg-terracotta/90">
              <Link to="/menu">Back to Menu</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderSuccess;
