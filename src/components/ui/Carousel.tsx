import { useRef, useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { EpArrowRightBold } from '../../assets/ArrowRig';

function Carousel() {
  const { darkMode } = useTheme();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    '/our Products/Image 5.webp',
    '/our Products/Images-2.webp',
    '/our Products/Images-3.webp',
    '/our Products/Images-6.webp',
    '/our Products/Images-6.webp',
    '/Grid/lefttop.webp',
    '/Grid/center.webp',
    '/Grid/rightbottom.webp',
  ];

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      carouselRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleWheel = (event: WheelEvent) => {
    if (carouselRef.current) {
      const scrollAmount = event.deltaY > 0 ? 300 : -300;
      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
      event.preventDefault();
    }
  };

  const updateActiveDot = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const width = carouselRef.current.offsetWidth;
      const newIndex = Math.round(scrollLeft / width);
      setActiveIndex(newIndex);
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      const carouselElement = carouselRef.current;

      carouselElement.addEventListener('scroll', updateActiveDot);
      carouselElement.addEventListener('wheel', handleWheel, {
        passive: false,
      });

      return () => {
        carouselElement.removeEventListener('scroll', updateActiveDot);
        carouselElement.removeEventListener('wheel', handleWheel);
      };
    }
  }, []);

  return (
    <div className="col-span-1 h-full flex flex-col justify-between gap-5 relative pb-5 items-start">
      <span
        onClick={() => scrollCarousel('right')}
        className={`w-12 h-12 absolute cursor-pointer right-20 top-80 rounded-full p-5 flex items-center justify-center shadow-md transition-all duration-300 ${
          darkMode 
            ? 'bg-gray-700/80 hover:bg-gray-600/80 text-white' 
            : 'bg-white/80 hover:bg-white text-gray-800'
        }`}
      >
        <EpArrowRightBold />
      </span>

      <span
        onClick={() => scrollCarousel('left')}
        className={`w-12 h-12 absolute cursor-pointer left-20 top-80 rounded-full p-5 flex items-center justify-center shadow-md transition-all duration-300 ${
          darkMode 
            ? 'bg-gray-700/80 hover:bg-gray-600/80 text-white' 
            : 'bg-white/80 hover:bg-white text-gray-800'
        }`}
      >
        <EpArrowRightBold className="rotate-180" />
      </span>

      <div
        ref={carouselRef}
        className="overflow-x-scroll flex items-center scrollbar-hidden gap-4"
      >
        {items.map((item, index) => (
          <div 
            key={index} 
            className={`rounded-xl overflow-hidden transition-all duration-300 ${
              darkMode ? 'bg-gray-800/50' : 'bg-white/50'
            }`}
          >
            <img 
              src={item} 
              alt={`carousel-${index}`} 
              className={`transition-all duration-300 ${
                darkMode ? 'brightness-90' : 'brightness-100'
              }`}
            />
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3">
        {items.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? darkMode
                  ? 'bg-secondary-400 outline outline-secondary-400 p-2'
                  : 'bg-secondary-500 outline outline-secondary-500 p-2'
                : darkMode
                  ? 'bg-gray-600'
                  : 'bg-[#D8D8D8]'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;