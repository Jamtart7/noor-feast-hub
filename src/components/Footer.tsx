import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="font-heading text-2xl font-bold text-cream mb-2">Noor</h3>
            <p className="text-cream/60 text-sm">Indian & Bangladeshi Restaurant</p>
            <p className="text-cream/60 text-sm">56 Station Lane, Hornchurch, RM12 6NB</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:justify-center">
            <Link to="/" className="text-cream/70 text-sm hover:text-amber transition-colors">Home</Link>
            <Link to="/menu" className="text-cream/70 text-sm hover:text-amber transition-colors">Menu</Link>
            <Link to="/order" className="text-cream/70 text-sm hover:text-amber transition-colors">Order Online</Link>
          </div>
          <div className="text-left md:text-right">
            <a href="tel:01708471526" className="text-cream/70 text-sm hover:text-amber transition-colors block">01708 471 526</a>
            <a href="mailto:info@noor-restaurant.com" className="text-cream/70 text-sm hover:text-amber transition-colors block mt-1">info@noor-restaurant.com</a>
          </div>
        </div>
        <div className="border-t border-cream/10 mt-8 pt-8 text-center">
          <p className="text-cream/40 text-xs">© {new Date().getFullYear()} Noor Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
