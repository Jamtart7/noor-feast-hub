import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Offers from "@/components/Offers";
import Events from "@/components/Events";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Offers />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
