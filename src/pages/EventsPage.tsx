import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Events from "@/components/Events";

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <div className="pt-20">
        <Events />
      </div>
      <Footer />
    </div>
  );
};

export default EventsPage;
