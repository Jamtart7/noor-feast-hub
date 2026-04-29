import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const restaurantPhotos = [
  {
    id: 1,
    url: "/images/restaurant-1.jpg",
    alt: "Noor Restaurant Interior"
  },
  {
    id: 2,
    url: "/images/restaurant-2.jpg",
    alt: "Noor Restaurant Dining Area"
  },
  {
    id: 3,
    url: "/images/food-1.jpg",
    alt: "Delicious Curry Dishes"
  },
  {
    id: 4,
    url: "/images/food-2.jpg",
    alt: "Biryani Platter"
  },
  {
    id: 5,
    url: "/images/food-3.jpg",
    alt: "Signature Dishes"
  },
  {
    id: 6,
    url: "/images/food-4.jpg",
    alt: "Traditional Indian Cuisine"
  },
  {
    id: 7,
    url: "/images/dining-1.jpg",
    alt: "Group Dining Experience"
  },
  {
    id: 8,
    url: "/images/dining-2.jpg",
    alt: "Family Dining"
  }
];

const PhotoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % restaurantPhotos.length);
    }, 4000); // Change photo every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => 
      prev === 0 ? restaurantPhotos.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % restaurantPhotos.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-lg group">
      {/* Images */}
      <div className="relative h-full">
        {restaurantPhotos.map((photo, index) => (
          <div
            key={photo.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={photo.url}
              alt={photo.alt}
              className="w-full h-full object-cover"
            />
            {/* Overlay gradient for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-dark p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-label="Previous photo"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-dark p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-label="Next photo"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {restaurantPhotos.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoCarousel;
