import { Link } from "react-router-dom";
import { IconBars } from "../../../assets/icons/Bars";
import User from "../../../assets/icons/User";
import Serach from "../../../assets/icons/Search";
import Faviort from "../../../assets/icons/Faviort";
import Cart from "../../../assets/icons/Cart";
import { useState } from "react";
import { MingcuteCloseFill } from "../../../assets/icons/Close";

function TheHeader() {
  const [open,setOpen]=useState(true);

  const pagesLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "shop",
      path: "/",
    },
    {
      title: "About",
      path: "/",
    },
    {
      title: "Contact",
      path: "/",
    },
  ];
   

  const handleList=()=>{
  setOpen(!open);
  }
  

  return (
    <header className={` w-full  py-7  md:pl-14 md:pr-20   h-24  px-3  relative    `}  >
      <div className=" flex justify-between  items-center  gap-4   ">
        {/* logo */}

        <div className="md:w-[185px] flex items-center  gap-1  ">
          <img src="/images/logo.png" alt="logo" />
          <h1 className=" font-bold   text-4xl ">Furniro</h1>
        </div>

        <nav className="custom-md:hidden lg:block  hidden ">
          <ul className="md:w-[430px] flex   justify-between items-center">
            {pagesLinks.map((page, index) => (
              <li key={index} className=" text-base  font-medium">
                <Link to={page.path}>{page.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* part right */}

        <div className="md:flex  custom-md:flex hidden items-center    gap-x-11">
          <User />
          <Serach />
          <Faviort />
          <Cart />
        </div>

        <button type="button" onClick={handleList} >
            {
              open? (          <IconBars className="  text-2xl  md:hidden  custom-md:block lg:hidden block " />):  (
                 <MingcuteCloseFill/>
              )
            }
        </button>

      
      </div>

      <div className={`absolute  w-full    ${ open ?'hidden':""}  overflow-hidden   left-0  top-24  flex  items-start pt-11 justify-center  min-h-screen bg-black/80 `}>
      <nav className=" ">
          <ul className="md:w-[430px] flex   flex-col h-80   justify-between ">
            {pagesLinks.map((page, index) => (
              <li key={index} className="  text-4xl text-white  font-medium">
                <Link to={page.path}>{page.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

       </div>
    </header>
  );
}

export default TheHeader;
