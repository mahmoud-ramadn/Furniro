import { useRef, useState, useEffect } from 'react';
import { EpArrowRightBold } from '../../assets/ArrowRig';

function Carousel() {
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

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
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
      carouselRef.current.addEventListener('scroll', updateActiveDot);

      carouselRef.current.addEventListener('wheel', handleWheel, { passive: false });
    }
    return () => {
      if (carouselRef.current) {
        carouselRef.current.removeEventListener('scroll', updateActiveDot);
        carouselRef.current.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <div className="col-span-1 h-full flex flex-col justify-between gap-5 relative pb-5 items-start">
      <span
        onClick={() => scrollCarousel('right')}
        className="w-12 h-12 absolute cursor-pointer right-20 top-80 rounded-full p-5 flex items-center justify-center bg-white shadow-md"
      >
        <EpArrowRightBold />
      </span>

      <span
        onClick={() => scrollCarousel('left')}
        className="w-12 h-12 absolute cursor-pointer left-20 top-80 rounded-full p-5 flex items-center justify-center bg-white shadow-md"
      >
        <EpArrowRightBold className="rotate-180" />
      </span>

      <div
        ref={carouselRef}
        className="overflow-x-scroll flex items-center scrollbar-hidden gap-4"
      >
        {items.map((item, index) => (
          <img key={index} src={item} alt={`carousel-${index}`} />
        ))}
      </div>

      <div className="flex items-center gap-3">
        {items.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full ${activeIndex === index
                ? 'bg-secondary-500 outline outline-secondary-500 p-2'
                : 'bg-[#D8D8D8]'
              }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
