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
      className={`relative w-full min-h-[600px] lg:h-[716px] flex justify-end items-center overflow-hidden ${className}`}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        {!imageLoaded && (
          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse flex items-center justify-center">
            <div className="text-gray-400 text-lg">Loading...</div>
          </div>
        )}

        {!imageError && (
          <img
            className={`w-full h-full object-cover transition-opacity duration-700 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            srcSet="/images/scandinavian-interior-mockup-wall-decal-background 1 (1).webp 1x, /images/scandinavian-interior-mockup-wall-decal-background 1 (1)@2x.webp 2x"
            src="/images/scandinavian-interior-mockup-wall-decal-background 1 (1).webp"
            alt="Scandinavian interior mockup with wall decal background"
            loading="lazy"
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        )}

        {imageError && (
          <div className="w-full h-full bg-gradient-to-br from-amber-100 to-orange-200 flex items-center justify-center">
            <div className="text-center text-amber-700">
              <div className="text-4xl mb-2">🏠</div>
              <div>Beautiful Interior</div>
            </div>
          </div>
        )}

        {/* Gradient Overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/40"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-secondary-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 left-1/4 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full flex justify-center lg:justify-end items-center px-4 md:px-8 lg:px-14">
        <div className="w-full max-w-2xl lg:max-w-xl xl:max-w-2xl">
          {/* Content Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-8 md:p-10 lg:p-12 shadow-2xl border border-white/20 transform hover:scale-[1.02] transition-all duration-500 hover:shadow-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
              <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
              New Arrival
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-secondary-500 to-secondary-700 bg-clip-text text-transparent">
                Discover Our
              </span>
              <br />
              <span className="text-gray-800">New Collection</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 font-medium mb-8 leading-relaxed max-w-lg">
              Transform your space with our curated collection of premium
              furniture and home décor that blends style with functionality.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Link
                to="/shop"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden min-w-[200px]"
                aria-label="Shop now to discover our new furniture collection"
              >
                {/* Button background animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-secondary-600 to-secondary-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                {/* Button content */}
                <span className="relative z-10 flex items-center gap-2">
                  SHOP NOW
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
                </span>
              </Link>

              {/* Secondary CTA */}
              <Link
                to="/collections"
                className="text-gray-700 hover:text-secondary-600 font-semibold text-lg transition-colors duration-300 flex items-center gap-2 group"
              >
                View Collections
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-2 text-gray-600">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium">Free Shipping</span>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <svg
                  className="w-5 h-5 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium">Quality Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
        <div className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors duration-300">
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
            <div className="w-1 h-3 bg-current rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
