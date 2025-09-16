import Iconright from '../../assets/Iconright';
import AppImg from './AppImg';
import { useLocation } from 'react-router-dom';

function TopageBanner() {
  const location = useLocation();
  const pageName = location.pathname.split('/').pop() || 'Shop';

  // Capitalize first letter
  const formattedPageName =
    pageName.charAt(0).toUpperCase() + pageName.slice(1);

  return (
    <div className="w-full h-[316px] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/80 to-primary-800/80 z-10"></div>
      <img
        src="/banner/Bannersection.webp"
        alt="banner"
        className="w-full h-full -z-10 absolute left-0 top-0 object-cover"
      />

      <div className="text-center space-y-4 relative z-20">
        <AppImg
          src="/images/Meubel House_Logos-05.png"
          className="w-24 h-24 mx-auto"
          alt="logo"
        />
        <h1 className="font-bold text-4xl md:text-5xl text-white">
          {formattedPageName}
        </h1>
        <h2 className="flex items-center justify-center text-base font-medium text-center w-full h-6 gap-x-2 text-white/90">
          Home <Iconright /> <span>{formattedPageName}</span>
        </h2>
      </div>
    </div>
  );
}

export default TopageBanner;
