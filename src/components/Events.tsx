import { Users, UtensilsCrossed, Sparkles, Check } from "lucide-react";

const Events = () => {
  return (
    <section id="events" className="py-20 md:py-28 bg-dark">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber font-body text-sm uppercase tracking-[0.3em] font-semibold">
            Catering & Private Hire
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-cream mt-2">
            Events at Noor
          </h2>
          <div className="w-16 h-0.5 bg-terracotta mx-auto mt-4" />
          <p className="text-cream/70 max-w-2xl mx-auto mt-6 leading-relaxed">
            Bring the warmth and authentic flavours of Noor to your special occasion.
            We offer full-service catering and private event hosting tailored to your needs.
          </p>
        </div>

        {/* Bespoke Catering */}
        <div className="bg-cream/5 border border-cream/10 rounded-sm p-8 md:p-12 mb-8 hover:border-amber/40 transition-colors">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-12 h-12 rounded-full bg-terracotta/20 text-amber flex items-center justify-center shrink-0">
              <UtensilsCrossed className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-2xl md:text-3xl font-semibold text-cream">
              Bespoke Catering
            </h3>
          </div>
          <p className="text-cream/80 leading-relaxed mb-5">
            From intimate gatherings of ten to grand celebrations of several hundred, our chefs
            craft tailored menus featuring our signature Indian and Bangladeshi dishes — prepared
            fresh on the day and delivered to your venue. Whether you're hosting a wedding,
            corporate function, festival celebration, or a relaxed family get-together, we bring
            the full Noor experience to you.
          </p>
          <p className="text-cream/70 leading-relaxed mb-5">
            Every menu is built around your guests. Choose from aromatic biryanis, slow-cooked
            curries, sizzling tandoori platters, fresh-baked naans and a wide range of vegetarian,
            vegan and halal options. Our team handles delivery, set-up and clean-up, so you can
            focus on your guests.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 text-cream/80 text-sm">
            {[
              "Custom menu design with our head chef",
              "Halal, vegetarian & vegan options",
              "Live tandoori & buffet stations available",
              "Full delivery, set-up and service",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-amber mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Private Hire */}
        <div className="bg-cream/5 border border-cream/10 rounded-sm p-8 md:p-12 mb-8 hover:border-amber/40 transition-colors">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-12 h-12 rounded-full bg-terracotta/20 text-amber flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-2xl md:text-3xl font-semibold text-cream">
              Private Hire
            </h3>
          </div>
          <p className="text-cream/80 leading-relaxed mb-5">
            Reserve our restaurant exclusively for your event. Our Hornchurch venue offers a warm,
            elegant setting that's perfect for birthdays, anniversaries, engagement parties,
            corporate dinners, christenings and milestone celebrations. With exclusive use of the
            space, you and your guests enjoy our full attention from start to finish.
          </p>
          <p className="text-cream/70 leading-relaxed mb-5">
            We accommodate seated dinners, buffet-style service and stand-up receptions. Our team
            will help with the floor plan, timings and a service style that suits the mood of
            your evening — whether that's relaxed and family-friendly or polished and formal.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 text-cream/80 text-sm">
            {[
              "Exclusive use of the restaurant",
              "Seated, buffet or reception layouts",
              "Dedicated event coordinator",
              "Flexible afternoon & evening slots",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-amber mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tailored Experience */}
        <div className="bg-cream/5 border border-cream/10 rounded-sm p-8 md:p-12 mb-12 hover:border-amber/40 transition-colors">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-12 h-12 rounded-full bg-terracotta/20 text-amber flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-2xl md:text-3xl font-semibold text-cream">
              Tailored Experience
            </h3>
          </div>
          <p className="text-cream/80 leading-relaxed mb-5">
            No two events are the same, and neither are our packages. We work closely with you on
            every detail — from custom menus and dietary accommodations to decor, seating
            arrangements and service style — to make sure your event feels unmistakably yours.
          </p>
          <p className="text-cream/70 leading-relaxed mb-5">
            Whether you'd like a multi-course tasting menu, a themed buffet, a children's
            section, allergy-aware preparation, or special touches like welcome drinks and table
            decor, we'll plan it together. Our goal is simple: an experience your guests will
            remember long after the last plate is cleared.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 text-cream/80 text-sm">
            {[
              "Personalised menu tasting available",
              "Allergy & dietary requirements handled",
              "Decor, seating & flow planning",
              "Full support from enquiry to event day",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-amber mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
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
