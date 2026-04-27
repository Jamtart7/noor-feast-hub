import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";
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
              <a href="https://www.instagram.com/official.noorrestaurant/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center text-cream/70 hover:text-amber hover:border-amber transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/p/Noor-Restaurant-100063838591269/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center text-cream/70 hover:text-amber hover:border-amber transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.tiktok.com/@noorrestaurant0" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center text-cream/70 hover:text-amber hover:border-amber transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.66a8.16 8.16 0 0 0 4.77 1.52V6.73a4.85 4.85 0 0 1-1.84-.04Z"/>
                </svg>
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
              <li><Link to="/#events" className="text-cream/80 text-sm hover:text-amber transition-colors">Events</Link></li>
              <li><Link to="/#contact" className="text-cream/80 text-sm hover:text-amber transition-colors">Visit Us</Link></li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-cream/50 font-body text-xs uppercase tracking-[0.3em] font-semibold mb-5">Get in Touch</h4>
            <address className="not-italic text-cream/80 text-sm space-y-3">
              <p>56 Station Lane,<br />Hornchurch, RM12 6NB</p>
              <a href="tel:01708471526" className="block hover:text-amber transition-colors">01708 471 526</a>
              <a href="mailto:info@noorrestaurant.co.uk" className="block hover:text-amber transition-colors">info@noorrestaurant.co.uk</a>
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
