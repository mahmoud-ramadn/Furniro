import Iconright from '../../assets/Iconright';
import AppImg from './AppImg';

import { useLocation } from 'react-router-dom';

function TopageBanner() {
  const location = useLocation();

  const pageName = location.pathname.split('/');

  return (
    <div className=" w-full  h-[316px]   flex items-center justify-center    relative overflow-hidden ">
      <img
        src="/banner/Bannersection.webp"
        alt=" banersection"
        className=" w-full h-full -z-10 absolute left-0 top-0 blur-sm object-cover "
      />

      <div className="  text-center md:space-y-3">
        <AppImg
          src="/images/Meubel House_Logos-05.png"
          className=" w-full h-full"
          alt="logo"
        />
        <h1 className="  font-medium text-5xl    ">{pageName}</h1>
        <h1 className=" flex items-center  justify-center md:text-base text-sm  font-medium text-center w-full   h-6  gap-x-2 ">
          Home <Iconright /> <span> {pageName} </span>{' '}
        </h1>
      </div>
    </div>
  );
}

export default TopageBanner;
