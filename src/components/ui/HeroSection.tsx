import { Link } from 'react-router-dom';
import { FC, useState } from 'react';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: FC<HeroSectionProps> = ({ className = '' }) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [imageError, setImageError] = useState<boolean>(false);

  const handleImageLoad = (): void => {
    setImageLoaded(true);
  };

  const handleImageError = (): void => {
    setImageError(true);
    setImageLoaded(true);
  };

  return (
    <section
      className={`relative w-full h-screen flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {!imageLoaded && (
          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse flex items-center justify-center">
            <div className="text-gray-400 text-lg font-medium">Loading...</div>
          </div>
        )}

        {!imageError && (
          <img
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Modern interior design with elegant furniture"
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        )}

        {imageError && (
          <div className="w-full h-full bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center">
            <div className="text-center text-amber-800">
              <div className="text-6xl mb-4">🏠</div>
              <div className="text-xl font-semibold">Beautiful Interiors</div>
            </div>
          </div>
        )}

        {/* Simple Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-medium mb-8 border border-white/10">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            New Collection
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your
            <br />
            <span className="text-secondary-400">Living Space</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white/90 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Discover premium furniture and home décor that combines elegance
            with functionality
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/shop"
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 min-w-[180px]"
            >
              Shop Now
            </Link>

            <Link
              to="/collections"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 min-w-[180px]"
            >
              View Collections
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex justify-center items-center gap-8 mt-16 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-white/80 text-sm">Products</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">10K+</div>
              <div className="text-white/80 text-sm">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">5★</div>
              <div className="text-white/80 text-sm">Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
