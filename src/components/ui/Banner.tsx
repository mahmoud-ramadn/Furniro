function Banner() {
  interface TBanner {
    icon: string;
    title: string;
    subtitle: string;
  }

  const bannerData: TBanner[] = [
    {
      icon: '/banner/customer-support.svg',
      title: 'High Quality',
      subtitle: 'Crafted from top materials',
    },
    {
      icon: '/banner/Group.svg',
      title: 'Warranty Protection',
      subtitle: 'Over 2 years',
    },
    {
      icon: '/banner/guarantee.svg',
      title: 'Free Shipping',
      subtitle: 'Order over 150 $',
    },
    {
      icon: '/banner/shipping.svg',
      title: '24 / 7 Support',
      subtitle: 'Dedicated support',
    },
  ];

  return (
    <div className="w-full bg-gradient-to-r from-primary-500 to-primary-600 flex flex-wrap items-center justify-between gap-8 py-12 px-6 md:px-16">
      {bannerData.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-5 w-full sm:w-auto text-center sm:text-left bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <div className="flex-shrink-0 bg-white/20 p-4 rounded-full">
            <img
              className="w-12 h-12 sm:w-16 sm:h-16"
              src={item.icon}
              alt={item.title}
            />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              {item.title}
            </h2>
            <p className="text-base sm:text-lg text-white/90 mt-1">
              {item.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Banner;
