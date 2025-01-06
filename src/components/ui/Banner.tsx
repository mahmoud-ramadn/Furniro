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
      subtitle: 'crafted from top materials',
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
    <div className=" w-full bg-primary-500 md:h-[270px] flex items-center flex-wrap justify-center gap-4  py-6 md:justify-between px-14">
      {bannerData.map((item, index) => (
        <div key={index} className="  flex items-center    gap-x-2">
          <img src={`${item.icon}`} alt="" />
          <div>
            <h2 className="  text-2xl font-semibold ">{item.title}</h2>
            <p className="  text-xl font-medium text-text-cardSubtitle">
              {item.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Banner;
