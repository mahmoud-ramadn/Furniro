import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';
import { SolarArrowRightOutline } from '../../assets/icons/ArrowRight';

interface RoomInspiration {
  id: string;
  number: string;
  category: string;
  title: string;
  image: string;
  description: string;
}

interface BeautifulRoomSectionProps {
  className?: string;
}

const BeautifulRoomSection: FC<BeautifulRoomSectionProps> = ({
  className = '',
}) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [currentRoom, setCurrentRoom] = useState<number>(0);

  const roomInspirations: RoomInspiration[] = [
    {
      id: 'bedroom',
      number: '01',
      category: 'Bed Room',
      title: 'Inner Peace',
      image:
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description:
        'A serene bedroom sanctuary designed for ultimate relaxation',
    },
    {
      id: 'living',
      number: '02',
      category: 'Living Room',
      title: 'Modern Comfort',
      image:
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description:
        'Contemporary living space that combines style and functionality',
    },
    {
      id: 'dining',
      number: '03',
      category: 'Dining Room',
      title: 'Elegant Dining',
      image:
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Sophisticated dining area perfect for memorable gatherings',
    },
  ];

  const handleImageLoad = (): void => {
    setImageLoaded(true);
  };

  const nextRoom = (): void => {
    setCurrentRoom((prev) => (prev + 1) % roomInspirations.length);
  };

  const currentRoomData = roomInspirations[currentRoom];

  return (
    <section className={`relative py-16 lg:py-24 overflow-hidden ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary-500 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center min-h-[600px]">
          {/* Left Content */}
          <div className="lg:col-span-2 text-white">
            <div className="max-w-lg">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                Room Inspiration
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                <span className="block">50+</span>
                <span className="text-secondary-300">Beautiful Rooms</span>
                <span className="block">Inspiration</span>
              </h2>

              {/* Description */}
              <p className="text-xl text-white/90 font-light mb-8 leading-relaxed">
                Our designers have created stunning room prototypes that will
                inspire your next home transformation project.
              </p>

              {/* CTA Button */}
              <Link
                to="/gallery"
                className="inline-flex items-center gap-3 bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
              >
                <span>Explore More</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>

              {/* Stats */}
              <div className="flex items-center gap-8 mt-12 pt-8 border-t border-white/20">
                <div>
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-white/80 text-sm">Room Designs</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">100+</div>
                  <div className="text-white/80 text-sm">Happy Clients</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">5★</div>
                  <div className="text-white/80 text-sm">Rating</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Featured Room and Carousel */}
          <div className="lg:col-span-3 grid md:grid-cols-2 gap-8 h-full">
            {/* Featured Room Card */}
            <div className="relative group">
              <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                {/* Room Image */}
                <div className="relative w-full h-full">
                  {!imageLoaded && (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse flex items-center justify-center">
                      <div className="text-gray-400">Loading...</div>
                    </div>
                  )}

                  <img
                    className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    src={currentRoomData.image}
                    alt={`${currentRoomData.title} - ${currentRoomData.category}`}
                    onLoad={handleImageLoad}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                {/* Room Info Card */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl transform transition-all duration-500 group-hover:translate-y-0 translate-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-secondary-600 font-bold text-lg">
                            {currentRoomData.number}
                          </span>
                          <div className="w-8 h-0.5 bg-secondary-600"></div>
                          <span className="text-gray-600 font-medium">
                            {currentRoomData.category}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {currentRoomData.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {currentRoomData.description}
                        </p>
                      </div>

                      {/* Next Button */}
                      <button
                        onClick={nextRoom}
                        className="ml-4 w-12 h-12 bg-secondary-500 hover:bg-secondary-600 text-white rounded-lg flex items-center justify-center transition-colors duration-300 shadow-lg hover:shadow-xl"
                        aria-label="Next room inspiration"
                      >
                        <SolarArrowRightOutline className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Room Number Badge */}
                <div className="absolute top-6 right-6">
                  <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {currentRoom + 1} of {roomInspirations.length}
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Section */}
            <div className="flex items-center">
              <div className="w-full h-[500px] lg:h-[600px]">
                <Carousel />
              </div>
            </div>
          </div>
        </div>

        {/* Room Navigation Dots */}
        <div className="flex justify-center mt-12 gap-3">
          {roomInspirations.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentRoom(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentRoom
                  ? 'bg-white shadow-lg'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`View room ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeautifulRoomSection;