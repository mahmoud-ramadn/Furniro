import SectionTitle from "./SectionTitle"



function FuniroFurniture() {
  return (
    <section className=" my-16 space-y-5">
        <div className=" w-full text-center ">
            <h3 className="  text-xl font-medium text-[#616161]">Share your setup with</h3>
              <SectionTitle title="#FuniroFurniture"/>
        </div>
        {/* grid */}
        <div className=" w-full   flex items-center flex-wrap   gap-4  justify-center">
            <div className=" space-y-4">
            <div className=" flex items-end  overflow-hidden gap-4">
                <img src="/Grid/leftTop.jpg" alt="" />
                <img src="/Grid/LeftTopp.jpg" alt="" />


            </div>
            <div className=" flex items-end  overflow-hidden gap-4">

                <img src="/Grid/Leftbottom.jpg" alt="" />
                <img src="/Grid/Leftbottomm.jpg" alt="" />


            </div>
            </div>


            <div>
            <img src="/Grid/center.jpg" alt="" />
            </div>

             <div className=" space-y-4">     
            <div className=" flex md:items-end justify-center   overflow-hidden gap-4 ">
                <img src="/Grid/rightop.jpg" alt="" />
                <img src="/Grid/righttop.jpg" alt="" />
            </div>
            <div className=" flex md:items-end md:justify-start justify-center   overflow-hidden gap-4">
                <img src="/Grid/rightbottom.jpg" alt="" />
                <img src="/Grid/rightbottomm.jpg" alt="" />
            </div>
             </div>



        </div>




    </section>
  )
}

export default FuniroFurniture