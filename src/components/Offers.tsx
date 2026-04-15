import { motion } from "framer-motion";
import { Percent, UtensilsCrossed } from "lucide-react";

const Offers = () => {
  return (
    <section className="py-16 md:py-20 bg-terracotta">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-cream/10 backdrop-blur-sm rounded-sm p-8 md:p-10 border border-cream/20 text-center"
          >
            <Percent className="w-10 h-10 text-amber mx-auto mb-4" />
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-cream mb-3">
              10% Off Takeaway
            </h3>
            <p className="text-cream/80 font-body">
              Enjoy 10% discount on all takeaway and collection orders. 
              Applied automatically at checkout.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-cream/10 backdrop-blur-sm rounded-sm p-8 md:p-10 border border-cream/20 text-center"
          >
            <UtensilsCrossed className="w-10 h-10 text-amber mx-auto mb-4" />
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-cream mb-3">
              Sunday Buffet
            </h3>
            <p className="text-cream/80 font-body">
              Join us every Sunday from 3 PM to 10 PM for our legendary all-you-can-eat buffet. 
              A feast of flavours awaits.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
