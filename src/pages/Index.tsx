import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Offers from "@/components/Offers";
import Footer from "@/components/Footer";
import PhotoCarousel from "@/components/PhotoCarousel"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Photo Gallery - ADD THIS SECTION */}
      <section className="py-12 bg-cream">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-8">
            <span className="text-amber font-body text-sm uppercase tracking-[0.3em] font-semibold">Gallery</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mt-2">Experience Noor</h2>
            <div className="w-16 h-0.5 bg-terracotta mx-auto mt-4" />
          </div>
          <PhotoCarousel />
        </div>
      </section>
      {/* END Photo Gallery */}
      
      <About />
      <Offers />
      <Footer />
    </div>
  );
};

export default Index;
