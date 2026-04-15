import { motion } from "framer-motion";
import foodSpread from "@/assets/food-spread.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-amber font-body text-sm uppercase tracking-[0.3em] font-semibold">Welcome to</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-dark mt-2 mb-6">
              Noor Restaurant
            </h2>
            <div className="w-16 h-0.5 bg-terracotta mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              Noor — a name that evokes warmth, trust and an unforgettable dining experience. 
              Nestled in the heart of Hornchurch, East London, we bring together the rich culinary 
              traditions of India and Bangladesh with a modern, welcoming touch.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Whether you're dining in our elegant restaurant or enjoying our food from the 
              comfort of your home, every dish is crafted with care — using authentic recipes, 
              the freshest ingredients and a passion for great hospitality.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From aromatic biryanis and sizzling tandoori to our signature Noor Specialities, 
              our menu celebrates the depth and diversity of South Asian cuisine.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-sm overflow-hidden shadow-2xl">
              <img src={foodSpread} alt="Noor Restaurant food spread" className="w-full h-[400px] md:h-[500px] object-cover" loading="lazy" width={1280} height={854} />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-amber rounded-sm" />
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-terracotta/30 rounded-sm" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
