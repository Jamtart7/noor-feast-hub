import { Link } from "react-router-dom";
import { XCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const OrderCancelled = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-8 max-w-xl text-center">
          <XCircle className="w-16 h-16 text-terracotta mx-auto mb-4" />
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-dark">Payment Cancelled</h1>
          <p className="text-muted-foreground mt-3">
            Your payment was cancelled and you have not been charged. Your cart is still saved — feel free to try again.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <Button asChild className="bg-terracotta text-cream hover:bg-terracotta/90">
              <Link to="/order">Return to Checkout</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/menu">Back to Menu</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderCancelled;
