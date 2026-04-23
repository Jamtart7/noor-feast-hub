import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import noorWordmark from "@/assets/noor-wordmark.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Noor Restaurant ambiance" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/40 to-dark/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 flex justify-center"
        >
          <img
            src={noorWordmark}
            alt="Noor"
            className="w-72 md:w-96 lg:w-[28rem] h-auto select-none"
            style={{ filter: "drop-shadow(0 2px 12px rgba(0,0,0,0.55)) drop-shadow(0 0 2px rgba(255,240,220,0.35))" }}
            draggable={false}
          />
          <span className="sr-only">Noor</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-24 h-0.5 bg-amber mx-auto mb-6"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading text-lg md:text-2xl text-cream/90 italic mb-10"
        >
          Authentic Flavours. Modern Experience.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/order"
            className="bg-terracotta text-cream px-8 py-3.5 rounded-sm font-body font-semibold text-sm uppercase tracking-widest hover:bg-terracotta/90 transition-colors"
          >
            Order Online
          </Link>
          <Link
            to="/menu"
            className="border border-cream text-cream px-8 py-3.5 rounded-sm font-body font-semibold text-sm uppercase tracking-widest hover:bg-cream/10 transition-colors"
          >
            View Menu
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
