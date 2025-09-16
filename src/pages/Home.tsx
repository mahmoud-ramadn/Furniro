import OurProducts from '../components/ui/OurProducts';
import FuniroFurniture from '../components/ui/FuniroFurniture';
import BrowserTheRange from '../components/ui/BrowserTheRange';
import BeautifulRoomSection from '../components/ui/BeautifulRoomSection';
import HeroSection from '../components/ui/HeroSection';
import useFetchProduct from '../hooks/GetProducts';
import Loading from '../components/feedback/Loading';
function Home() {
  const { loading,error } = useFetchProduct();  
  

  return (
    <Loading error={error as undefined} type='Home' loading={loading}>
    <main className=" overflow-hidden px-0">
      <HeroSection />
      <BrowserTheRange />
      <div className=" px-4">
        <OurProducts visibleNumber={8} Title=" Our Products" />
      </div>
      <BeautifulRoomSection />
      <FuniroFurniture />
    </main>
    </Loading>
  );
}

export default Home;
