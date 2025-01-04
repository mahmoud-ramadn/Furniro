import EmailSubscription from "../../ui/EmailSubscription";

function TheFooter() {
  return (
    <footer className=" md:px-24 px-10   border-t-[1px] py-9">
      <div className="  md:h-[419px]  flex-wrap  border-b-[1px]  pb-3  flex  justify-between items-start    w-full ">
        <div className=" w-[285px] space-y-14 ">
          <h3 className=" font-bold  text-2xl  ">Funiro.</h3>
          <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
        </div>
        <div className="  space-y-12 ">
          <h3 className=" font-medium text-base  text-[#9F9F9F]">Links</h3>
          <h4 className="font-medium text-base">Home</h4>
          <h4 className="font-medium text-base">Shop</h4>
          <h4 className="font-medium text-base">About</h4>
          <h4 className="font-medium text-base">Contact</h4>
        </div>

        <div className="  space-y-12 ">
          <h3 className=" font-medium text-base  text-[#9F9F9F]">Help</h3>
          <h4 className="font-medium text-base">Payment Options</h4>
          <h4 className="font-medium text-base">Returns</h4>
          <h4 className="font-medium text-base">Privacy Policies</h4>
        </div>

        {/* <div className=" space-y-12 ">
    <h3 className=" font-medium text-base  text-[#9F9F9F]">Newsletter</h3>


    <div className="  w-full flex items-center space-x-3">

    <input type="email"  

    placeholder="Enter Your Email Address"
    className=" md:w-[200px]   border-black  focus:outline-none  border-b-[1px] placeholder:text-[#9F9F9F] text-sm font-normal  " />

 <button className=" text-sm  focus:outline-none font-medium border-b-[1px] border-black">SUBSCRIBE</button>
    </div>


    </div> */}

        <EmailSubscription />
      </div>
      <p className=" my-9">2023 furino. All rights reverved</p>
    </footer>
  );
}

export default TheFooter;
