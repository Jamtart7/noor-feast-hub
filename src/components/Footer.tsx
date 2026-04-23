import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";
import NoorLogo from "./NoorLogo";

const Footer = () => {
  return (
    <footer className="bg-dark py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-cream rounded-full p-1 w-14 h-14 flex items-center justify-center shrink-0">
                <NoorLogo size={48} />
              </div>
              <h3 className="font-heading text-2xl font-bold text-cream">Noor Restaurant</h3>
            </div>
            <p className="text-cream/60 text-sm leading-relaxed mb-6">
              Authentic Indian & Bangladeshi cuisine, served with warmth and tradition in the heart of Hornchurch.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center text-cream/70 hover:text-amber hover:border-amber transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center text-cream/70 hover:text-amber hover:border-amber transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center text-cream/70 hover:text-amber hover:border-amber transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigate */}
          <div className="md:pl-8">
            <h4 className="text-cream/50 font-body text-xs uppercase tracking-[0.3em] font-semibold mb-5">Navigate</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-cream/80 text-sm hover:text-amber transition-colors">Home</Link></li>
              <li><Link to="/menu" className="text-cream/80 text-sm hover:text-amber transition-colors">Menu</Link></li>
              <li><Link to="/order" className="text-cream/80 text-sm hover:text-amber transition-colors">Order Online</Link></li>
              <li><Link to="/#contact" className="text-cream/80 text-sm hover:text-amber transition-colors">Visit Us</Link></li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-cream/50 font-body text-xs uppercase tracking-[0.3em] font-semibold mb-5">Get in Touch</h4>
            <address className="not-italic text-cream/80 text-sm space-y-3">
              <p>56 Station Lane,<br />Hornchurch, RM12 6NB</p>
              <a href="tel:01708471526" className="block hover:text-amber transition-colors">01708 471 526</a>
              <a href="mailto:info@noor-restaurant.com" className="block hover:text-amber transition-colors">info@noor-restaurant.com</a>
            </address>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-12 pt-8 text-center">
          <p className="text-cream/40 text-xs">© {new Date().getFullYear()} Noor Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
