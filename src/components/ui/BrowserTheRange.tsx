import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import AppImg from './AppImg';
import SectionTitle from './SectionTitle';

interface CategoryCard {
  id: string;
  image: string;
  title: string;
  description: string;
  link: string;
  itemCount: number;
}

interface BrowseTheRangeProps {
  className?: string;
}

const BrowseTheRange: FC<BrowseTheRangeProps> = ({ className = '' }) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const categoryData: CategoryCard[] = [
    {
      id: 'dining',
      image: '/our Products/Images-4.webp',
      title: 'Dining',
      description: 'Elegant dining sets and accessories for memorable meals',
      link: '/category/dining',
      itemCount: 156,
    },
    {
      id: 'living',
      image: '/our Products/Images-6.webp',
      title: 'Living',
      description: 'Comfortable sofas, chairs and living room essentials',
      link: '/category/living',
      itemCount: 203,
    },
    {
      id: 'bedroom',
      image: '/our Products/Images-3.webp',
      title: 'Bedroom',
      description: 'Peaceful bedroom furniture for restful nights',
      link: '/category/bedroom',
      itemCount: 127,
    },
  ];

  return (
    <section className={`py-16 lg:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <SectionTitle title="Browse The Range" />
          <p className="text-lg md:text-xl text-gray-600 mt-4 leading-relaxed">
            Discover our carefully curated collection of premium furniture
            designed to transform your living spaces into havens of comfort and
            style.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {categoryData.map((category) => (
            <div
              key={category.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredCard(category.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Link to={category.link} className="block">
                {/* Card Container */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
                  {/* Image Container */}
                  <div className="relative overflow-hidden w-full h-64 md:h-72 lg:h-80">
                    <AppImg
                      className="w-full h-full object-cover"
                      src={category.image}
                      alt={`${category.title} furniture collection`}
                    />

                    {/* Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-500 ${
                        hoveredCard === category.id
                          ? 'opacity-100'
                          : 'opacity-0'
                      }`}
                    >
                      {/* Overlay Content */}
                      <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="flex items-center justify-between mb-3">
                          <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                            {category.itemCount} items
                          </span>
                          <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
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
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          </div>
                        </div>
                        <p className="text-sm opacity-90 leading-relaxed">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    {/* Corner Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-800 shadow-lg">
                        New
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-secondary-600 transition-colors duration-300">
                        {category.title}
                      </h3>
                      <div className="w-10 h-10 bg-gray-100 group-hover:bg-secondary-100 rounded-full flex items-center justify-center transition-colors duration-300">
                        <svg
                          className="w-5 h-5 text-gray-600 group-hover:text-secondary-600 transform group-hover:rotate-45 transition-all duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                          />
                        </svg>
                        <span>{category.itemCount} Products</span>
                      </div>

                      <div className="text-secondary-600 font-semibold text-sm group-hover:text-secondary-700">
                        Explore →
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Can't find what you're looking for?
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Explore our complete catalog with hundreds of premium furniture
              pieces and home décor items curated just for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/shop"
                className="bg-secondary-600 hover:bg-secondary-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
              >
                View All Products
                <svg
                  className="w-5 h-5"
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

              <Link
                to="/collections"
                className="text-gray-700 hover:text-secondary-600 px-6 py-4 font-semibold transition-colors duration-300 flex items-center gap-2"
              >
                Browse Collections
                <svg
                  className="w-4 h-4"
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
          </div>
        </div>

        {/* Features Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200">
          <div className="text-center group">
            <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary-200 transition-colors duration-300">
              <svg
                className="w-8 h-8 text-secondary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Premium Quality
            </h4>
            <p className="text-gray-600 text-sm">
              Handcrafted furniture made with the finest materials
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary-200 transition-colors duration-300">
              <svg
                className="w-8 h-8 text-secondary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Free Delivery
            </h4>
            <p className="text-gray-600 text-sm">
              Complimentary delivery on all orders over $500
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary-200 transition-colors duration-300">
              <svg
                className="w-8 h-8 text-secondary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Warranty
            </h4>
            <p className="text-gray-600 text-sm">
              5-year warranty on all furniture pieces
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseTheRange;
