import { Phone, Mail, MapPin, Clock } from "lucide-react";

const hours = [
  { day: "Monday", time: "5:00 PM – 11:00 PM" },
  { day: "Tuesday", time: "Closed" },
  { day: "Wednesday", time: "5:00 PM – 11:00 PM" },
  { day: "Thursday", time: "5:00 PM – 11:00 PM" },
  { day: "Friday", time: "5:00 PM – 11:00 PM" },
  { day: "Saturday", time: "5:00 PM – 11:00 PM" },
  { day: "Sunday", time: "3:00 PM – 10:00 PM (Buffet)" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <span className="text-amber font-body text-sm uppercase tracking-[0.3em] font-semibold">Get in Touch</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-dark mt-2">Contact Us</h2>
          <div className="w-16 h-0.5 bg-terracotta mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-terracotta mt-1 shrink-0" />
              <div>
                <h4 className="font-heading font-semibold text-dark">Address</h4>
                <p className="text-muted-foreground text-sm">56 Station Lane, Hornchurch, RM12 6NB</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-terracotta mt-1 shrink-0" />
              <div>
                <h4 className="font-heading font-semibold text-dark">Phone</h4>
                <a href="tel:01708471526" className="text-muted-foreground text-sm hover:text-terracotta transition-colors">01708 471 526</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-terracotta mt-1 shrink-0" />
              <div>
                <h4 className="font-heading font-semibold text-dark">Email</h4>
                <a href="mailto:info@noor-restaurant.com" className="text-muted-foreground text-sm hover:text-terracotta transition-colors">info@noor-restaurant.com</a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-terracotta" />
              <h4 className="font-heading font-semibold text-dark">Opening Hours</h4>
            </div>
            <div className="space-y-2">
              {hours.map(h => (
                <div key={h.day} className={`flex justify-between text-sm py-1.5 ${h.time === "Closed" ? "text-terracotta" : "text-muted-foreground"}`}>
                  <span className="font-medium text-dark">{h.day}</span>
                  <span>{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="rounded-sm overflow-hidden shadow-lg h-[300px] lg:h-full min-h-[300px]">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Noor+Restaurant,56+Station+Lane,Hornchurch,RM12+6NB,UK&zoom=16"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Noor Restaurant location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
