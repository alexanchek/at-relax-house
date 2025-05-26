import { useEffect, useState } from "react";

const rooms: string[] = [
  '/rooms/1.jpg',
  '/rooms/2.jpg',
  '/rooms/3.jpg',
  '/rooms/4.jpg',
  '/rooms/6.jpg',
  '/rooms/5.jpg',
];

const RoomsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640); // sm breakpoint
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  // Update isMobile state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide every 3 seconds, reset on user interaction
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const imagesPerSlide = isMobile ? 1 : 2;
        return prev + imagesPerSlide >= rooms.length ? 0 : prev + imagesPerSlide;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [isMobile, currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const imagesPerSlide = isMobile ? 1 : 2;
      return prev === 0 ? rooms.length - imagesPerSlide : prev - imagesPerSlide;
    });
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const imagesPerSlide = isMobile ? 1 : 2;
      return prev + imagesPerSlide >= rooms.length ? 0 : prev + imagesPerSlide;
    });
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index * (isMobile ? 1 : 2));
  };

  // Handle touch start
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchEndX(null); // Reset touch end
  };

  // Handle touch move
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndX(e.touches[0].clientX);
  };

  // Handle touch end
  const handleTouchEnd = () => {
    if (touchStartX !== null && touchEndX !== null) {
      const swipeDistance = touchStartX - touchEndX;
      const minSwipeDistance = 50; // Minimum distance for a swipe

      if (swipeDistance > minSwipeDistance) {
        nextSlide(); // Swipe left -> next
      } else if (swipeDistance < -minSwipeDistance) {
        prevSlide(); // Swipe right -> previous
      }
    }
    // Reset touch positions
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-8 px-4">
      <div
        className="overflow-hidden rounded-lg"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${(currentIndex / (isMobile ? 1 : 2)) * 100}%)` }}
        >
          {rooms.map((src, index) => (
            <div
              key={index}
              className="min-w-[100%] sm:min-w-[50%] flex justify-center items-center px-2"
            >
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="object-contain max-h-[400px] w-full"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition sm:p-3"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition sm:p-3"
      >
        ❯
      </button>
      {/* Dots Navigation */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: isMobile ? rooms.length : Math.ceil(rooms.length / 2) }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${Math.floor(currentIndex / (isMobile ? 1 : 2)) === index ? 'bg-gray-800' : 'bg-gray-400'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default RoomsSlider;