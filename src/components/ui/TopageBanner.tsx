import { FC, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Iconright from '../../assets/Iconright';
import AppImg from './AppImg';

interface TopageBannerProps {
  className?: string;
  customTitle?: string;
  showBreadcrumb?: boolean;
}

const TopageBanner: FC<TopageBannerProps> = ({
  className = '',
  customTitle,
  showBreadcrumb = true,
}) => {
  const location = useLocation();
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [imageError, setImageError] = useState<boolean>(false);

  // Get page name from URL or use custom title
  const getPageName = (): string => {
    if (customTitle) return customTitle;

    const pathSegments = location.pathname.split('/').filter(Boolean);
    const pageName = pathSegments[pathSegments.length - 1] || 'Home';

    // Handle special cases and format page names
    const specialCases: Record<string, string> = {
      shop: 'Shop',
      about: 'About Us',
      contact: 'Contact',
      blog: 'Blog',
      cart: 'Shopping Cart',
      checkout: 'Checkout',
      account: 'My Account',
      wishlist: 'Wishlist',
    };

    return (
      specialCases[pageName.toLowerCase()] ||
      pageName.charAt(0).toUpperCase() + pageName.slice(1).replace(/-/g, ' ')
    );
  };

  const formattedPageName = getPageName();

  // Generate breadcrumb path
  const generateBreadcrumb = () => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbItems = [{ name: 'Home', path: '/' }];

    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === pathSegments.length - 1;

      breadcrumbItems.push({
        name:
          segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
        path: isLast ? currentPath : currentPath,
      });
    });

    return breadcrumbItems;
  };

  const breadcrumbItems = generateBreadcrumb();

  const handleImageLoad = (): void => {
    setImageLoaded(true);
  };

  const handleImageError = (): void => {
    setImageError(true);
    setImageLoaded(true);
  };

  return (
    <section
      className={`relative w-full h-64 md:h-80 lg:h-96 flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* Background Image with Loading State */}
      <div className="absolute inset-0">
        {!imageLoaded && (
          <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 animate-pulse flex items-center justify-center">
            <div className="text-gray-500 text-lg font-medium">Loading...</div>
          </div>
        )}

        {!imageError && (
          <img
            src="/banner/Bannersection.webp"
            alt={`${formattedPageName} page banner`}
            className={`w-full h-full object-cover object-center transition-all duration-1000 ${
              imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        )}

        {imageError && (
          <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-6xl mb-4 opacity-50">🏠</div>
              <div className="text-xl font-semibold">Welcome to Furniro</div>
            </div>
          </div>
        )}
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        {/* Logo with Animation */}
        <div className="mb-6">
          <div className="inline-block p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 shadow-2xl hover:bg-white/20 transition-all duration-500 group">
            <AppImg
              src="/images/Meubel House_Logos-05.png"
              className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 transition-all duration-500 group-hover:scale-110 filter drop-shadow-lg"
              alt="Furniro logo"
            />
          </div>
        </div>

        {/* Page Title */}
        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 tracking-tight">
          <span className="inline-block animate-fade-in-up">
            {formattedPageName}
          </span>
        </h1>

        {/* Breadcrumb Navigation */}
        {showBreadcrumb && (
          <nav
            className="flex items-center justify-center text-sm md:text-base font-medium text-white/90 animate-fade-in-up delay-300"
            aria-label="Breadcrumb"
          >
            <ol className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              {breadcrumbItems.map((item, index) => (
                <li key={index} className="flex items-center">
                  {index > 0 && (
                    <span className="mx-2 text-white/60">
                      <Iconright />
                    </span>
                  )}

                  {index === breadcrumbItems.length - 1 ? (
                    <span
                      className="text-white font-semibold"
                      aria-current="page"
                    >
                      {item.name}
                    </span>
                  ) : (
                    <Link
                      to={item.path}
                      className="text-white/80 hover:text-white transition-colors duration-200 hover:underline"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Subtitle or Description */}
        <div className="mt-6 animate-fade-in-up delay-500">
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {getPageDescription(formattedPageName)}
          </p>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent"></div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

// Helper function to get page descriptions
const getPageDescription = (pageName: string): string => {
  const descriptions: Record<string, string> = {
    Shop: 'Discover our premium collection of handcrafted furniture',
    'About Us': 'Learn about our passion for creating beautiful living spaces',
    Contact: 'Get in touch with our expert team for personalized assistance',
    Blog: 'Stay updated with the latest trends and design inspiration',
    'Shopping Cart': 'Review your selected items before checkout',
    Checkout: 'Complete your purchase securely and safely',
    'My Account': 'Manage your profile and track your orders',
    Wishlist: 'Save your favorite items for later',
  };

  return (
    descriptions[pageName] || 'Welcome to our premium furniture collection'
  );
};

export default TopageBanner;

// Add custom CSS for animations

