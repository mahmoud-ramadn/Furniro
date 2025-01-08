import AppImg from './AppImg';
import SectionTitle from './SectionTitle';

function FuniroFurniture() {
  return (
    <section className="  md:container  w-full   mx-auto my-16 space-y-5">
      <div className=" w-full text-center ">
        <h3 className="  text-xl font-medium text-[#616161]">
          Share your setup with
        </h3>
        <SectionTitle title="#FuniroFurniture" />
      </div>
      {/* grid */}
      <div className=" w-full   grid  justify-center md:grid-cols-2  lg:grid-cols-3 grid-cols-1  gap-4  ">
        <div className=" col-span-1 space-y-4">
          <div className=" flex   items-end  overflow-hidden gap-4">
            <AppImg className=" w-full" src="/Grid/leftopp.webp" alt="" />
            <AppImg className=" w-full    " src="/Grid/lefttop.webp" alt="" />
          </div>
          <div className=" flex  items-start  overflow-hidden gap-4">
            <AppImg className=" w-full" src="/Grid/leftbottom.webp" alt="" />
            <AppImg className=" w-full" src="/Grid/leftbottomm.webp" alt="" />
          </div>
        </div>

        <div className=" col-span-1     flex justify-center items-center   ">
          <AppImg
            className=" w-full h-full    object-cover "
            src="/Grid/center.webp"
            alt=""
          />
        </div>

        <div className=" space-y-4 col-span-1">
          <div className=" flex md:items-end justify-center   overflow-hidden gap-4 ">
            <AppImg className=" w-full" src="/Grid/righttop.webp" alt="" />
            <AppImg className=" w-full" src="/Grid/rightopp.webp" alt="" />
          </div>
          <div className=" flex  md:items-start md:justify-start justify-center   overflow-hidden gap-4">
            <AppImg className="w-full" src="/Grid/rightbottom.webp" alt="" />
            <AppImg className="w-full" src="/Grid/rightbottomm.webp" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FuniroFurniture;
