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
    <div className="w-full bg-primary-500 flex flex-wrap items-center justify-between gap-6 py-4 px-14 md:h-[270px]">
      {bannerData.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-4 w-full sm:w-auto text-center sm:text-left"
        >
          <div className="flex-shrink-0">
            <img
              className="w-12 h-12 sm:w-16 sm:h-16"
              src={item.icon}
              alt={item.title}
            />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-semibold">{item.title}</h2>
            <p className="text-sm sm:text-base text-text-cardSubtitle">
              {item.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Banner;
