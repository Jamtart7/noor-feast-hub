import { Users, UtensilsCrossed, Sparkles } from "lucide-react";

const features = [
  {
    icon: UtensilsCrossed,
    title: "Bespoke Catering",
    description:
      "From intimate gatherings to large celebrations, our chefs craft tailored menus featuring our signature Indian and Bangladeshi dishes — delivered fresh to your venue.",
  },
  {
    icon: Users,
    title: "Private Hire",
    description:
      "Reserve our restaurant for birthdays, anniversaries, corporate dinners, and family occasions. Enjoy exclusive use of the space with attentive service throughout.",
  },
  {
    icon: Sparkles,
    title: "Tailored Experience",
    description:
      "Custom menus, dietary accommodations, decor, and seating arrangements — we work with you to make every event unforgettable.",
  },
];

const Events = () => {
  return (
    <section id="events" className="py-20 md:py-28 bg-dark">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <span className="text-amber font-body text-sm uppercase tracking-[0.3em] font-semibold">
            Catering & Private Hire
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-cream mt-2">
            Events at Noor
          </h2>
          <div className="w-16 h-0.5 bg-terracotta mx-auto mt-4" />
          <p className="text-cream/70 max-w-2xl mx-auto mt-6 leading-relaxed">
            Bring the warmth and authentic flavours of Noor to your special occasion. We offer
            full-service catering and private event hosting tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-cream/5 border border-cream/10 rounded-sm p-8 text-center hover:border-amber/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-terracotta/20 text-amber flex items-center justify-center mx-auto mb-5">
                <f.icon className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-cream mb-3">{f.title}</h3>
              <p className="text-cream/70 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-cream/80 mb-6 text-sm">
            Planning something special? Get in touch to discuss your event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:01708471526"
              className="bg-terracotta text-cream px-8 py-3.5 rounded-sm font-body font-semibold text-sm uppercase tracking-widest hover:bg-terracotta/90 transition-colors"
            >
              Call 01708 471 526
            </a>
            <a
              href="mailto:info@noorrestaurant.co.uk?subject=Event%20Enquiry"
              className="border border-cream/40 text-cream px-8 py-3.5 rounded-sm font-body font-semibold text-sm uppercase tracking-widest hover:bg-cream/10 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
