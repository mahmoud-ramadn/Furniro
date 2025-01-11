import OurProducts from '../components/ui/OurProducts';
import FuniroFurniture from '../components/ui/FuniroFurniture';
import BrowserTheRange from '../components/ui/BrowserTheRange';
import BeautifulRoomSection from '../components/ui/BeautifulRoomSection';
import HeroSection from '../components/ui/HeroSection';
import { useEffect } from 'react';
import useFetchProduct from '../hooks/GetProducts';
import AppImg from '../components/ui/AppImg';
function Home() {
  const { loading } = useFetchProduct();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return (
      <div className="font-bold md:text-5xl  text-lg w-full min-h-screen flex items-center justify-center  bg-primary-500 rounded-md">
        <AppImg className='' src='/images/logo.svg' alt='loading' />
      </div>
    );
  }

  return (
    <main className=" overflow-hidden">
      <HeroSection />
      <BrowserTheRange />
      <div className=" px-4">
        <OurProducts visibleNumber={8} Title=" Our Products" />
      </div>
      <BeautifulRoomSection />
      <FuniroFurniture />
    </main>
  );
}

export default Home;
