import { useState, FormEvent } from "react";
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Banknote, CreditCard, Loader2 } from "lucide-react";
import { ORDER_API } from "@/config/orderConfig";

type PaymentMethod = "cash" | "card";

const orderSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255).optional().or(z.literal("")),
  phone: z.string().trim().min(7, "Phone is required").max(20),
  address: z.string().trim().min(5, "Delivery address is required").max(300),
  notes: z.string().trim().max(500).optional().or(z.literal("")),
});

const CheckoutForm = () => {
  const { items, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [payment, setPayment] = useState<PaymentMethod>("cash");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (items.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    const parsed = orderSchema.safeParse(form);
    if (!parsed.success) {
      const firstError = Object.values(parsed.error.flatten().fieldErrors)[0]?.[0];
      toast.error(firstError ?? "Please check the form");
      return;
    }

    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      address: form.address.trim(),
      notes: form.notes.trim(),
      items: items.map(i => ({ name: i.name, quantity: i.quantity, price: i.price })),
      total: Number(total.toFixed(2)),
    };

    setSubmitting(true);
    try {
      if (payment === "cash") {
        const res = await fetch(ORDER_API.cashOrder, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error(`Server returned ${res.status}`);
        const data = await res.json().catch(() => ({}));
        const orderId = data.orderId ?? data.order_id ?? data.id ?? `NOOR-${Date.now()}`;

        sessionStorage.setItem("noor-order-success", JSON.stringify({
          orderId,
          paymentMethod: "Cash on Delivery",
          customer: payload,
          items: payload.items,
          total: payload.total,
        }));

        clearCart();
        toast.success("Order placed successfully!");
        navigate("/order-success");
      } else {
        const res = await fetch(ORDER_API.cardCheckout, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error(`Server returned ${res.status}`);
        const data = await res.json();
        const checkoutUrl = data.url ?? data.checkoutUrl ?? data.checkout_url;
        if (!checkoutUrl) throw new Error("Missing checkout URL from server");

        // Persist for the success page in case Stripe redirects back
        sessionStorage.setItem("noor-order-pending", JSON.stringify({
          orderId: data.orderId ?? data.order_id ?? data.id ?? null,
          paymentMethod: "Card (Stripe)",
          customer: payload,
          items: payload.items,
          total: payload.total,
        }));

        window.location.href = checkoutUrl;
      }
    } catch (err) {
      console.error("[Checkout] Error:", err);
      toast.error(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setSubmitting(false);
    }
  };

  const buttonLabel = submitting
    ? "Processing..."
    : payment === "cash"
    ? `Place Order — £${total.toFixed(2)}`
    : `Pay £${total.toFixed(2)} with Card`;

  return (
    <Card id="checkout" className="border-border shadow-lg">
      <CardHeader>
        <CardTitle className="font-heading text-xl text-dark">Checkout</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1.5">
            <Label htmlFor="name">Full Name *</Label>
            <Input id="name" required value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="phone">Phone *</Label>
              <Input id="phone" type="tel" required value={form.phone}
                onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">Email <span className="text-muted-foreground text-xs">(optional)</span></Label>
              <Input id="email" type="email" value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="address">Delivery Address *</Label>
            <Textarea id="address" required rows={2} value={form.address}
              onChange={e => setForm(f => ({ ...f, address: e.target.value }))} />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="notes">Order Notes <span className="text-muted-foreground text-xs">(optional)</span></Label>
            <Textarea id="notes" rows={2} placeholder="Allergies, preferences, etc."
              value={form.notes}
              onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} />
          </div>

          <div className="space-y-2">
            <Label>Payment Method *</Label>
            <RadioGroup
              value={payment}
              onValueChange={(v) => setPayment(v as PaymentMethod)}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              <label
                htmlFor="pay-cash"
                className={`flex items-start gap-3 rounded-sm border p-3 cursor-pointer transition-colors ${
                  payment === "cash" ? "border-terracotta bg-terracotta/5" : "border-border hover:bg-muted"
                }`}
              >
                <RadioGroupItem value="cash" id="pay-cash" className="mt-1" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 font-medium text-dark text-sm">
                    <Banknote className="w-4 h-4" /> Cash on Delivery
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">Pay when your order arrives.</p>
                </div>
              </label>

              <label
                htmlFor="pay-card"
                className={`flex items-start gap-3 rounded-sm border p-3 cursor-pointer transition-colors ${
                  payment === "card" ? "border-terracotta bg-terracotta/5" : "border-border hover:bg-muted"
                }`}
              >
                <RadioGroupItem value="card" id="pay-card" className="mt-1" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 font-medium text-dark text-sm">
                    <CreditCard className="w-4 h-4" /> Pay by Card
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">Secure payment via Stripe.</p>
                </div>
              </label>
            </RadioGroup>
          </div>

          <div className="rounded-sm bg-muted p-3 flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Total to pay</span>
            <span className="font-heading font-bold text-lg text-terracotta">£{total.toFixed(2)}</span>
          </div>

          <Button
            type="submit"
            disabled={submitting || items.length === 0}
            className="w-full bg-terracotta text-cream hover:bg-terracotta/90 py-6 text-sm uppercase tracking-widest font-semibold"
          >
            {submitting && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
            {buttonLabel}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CheckoutForm;
