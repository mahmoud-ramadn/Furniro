import { Link } from 'react-router-dom';
import { IconBars } from '../../../assets/icons/Bars';
// import User from '../../../assets/icons/User';
// import Search from '../../../assets/icons/Search';
// import Favorite from '../../../assets/icons/Faviort';
import Cart from '../../../assets/icons/Cart';
import { useState } from 'react';
import { MingcuteCloseFill } from '../../../assets/icons/Close';
import AppImg from '../../ui/AppImg';

function TheHeader() {
  const [open, setOpen] = useState(true);

  const pagesLinks = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'shop',
      path: '/shope',
    },
    {
      title: 'About',
      path: '/',
    },
    {
      title: 'Contact',
      path: '/',
    },
  ];

  const handleList = () => {
    setOpen(!open);
  };




  
  return (
    <>
    <header className="w-full bg-white py-7 px-3 md:px-14 lg:px-20 h-24  fixed left-0 top-0 z-50 ">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-1 md:w-[185px]">
          <AppImg src="/images/logo.svg" alt="logo" className="w-8 h-8" />
          <h1 className="font-bold text-2xl md:text-4xl">Furniro</h1>
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex gap-8 md:gap-14 lg:gap-20 items-center">
            {pagesLinks.map((page, index) => (
              <li key={index} className="text-base font-medium text-gray-700">
                <Link to={page.path} className="hover:text-gray-900">
                  {page.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:flex items-center gap-x-6">
          {/* <User />
          <Search />
          <Favorite />*/}
          <Cart /> 
        </div>

        <button
          type="button"
          onClick={handleList}
          className="text-2xl md:hidden"
        >
          {open ? <IconBars /> : <MingcuteCloseFill />}
        </button>
      </div>
      <div
        className={`absolute w-full ${open ? 'hidden' : 'flex'
          } flex-col items-center pt-11 justify-center min-h-screen md:hidden bg-text-primary/65  z-20 top-24 left-0`}
      >
        <nav>
          <ul className="flex flex-col gap-6">
            {pagesLinks.map((page, index) => (
              <li
                key={index}
                className="text-2xl font-medium text-white hover:text-gray-300"
              >
                <Link to={page.path}>{page.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
    <div className='w-full shadow-md bg-white py-7 px-3 md:px-14 lg:px-20 h-24'>

    </div>
    </>
  );
}

export default TheHeader;
