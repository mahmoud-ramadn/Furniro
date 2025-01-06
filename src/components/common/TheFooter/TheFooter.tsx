import EmailSubscription from '../../ui/EmailSubscription';

function TheFooter() {
  return (
    <footer className="  px-10    border-t-[1px]  pt-12">
      <div>
        <div className="  md:h-[419px]  flex-wrap  border-b-[1px] container mx-auto  pb-3  flex  items-start    w-full ">
          <div className=" w-[285px] space-y-14  md:mr-32 ">
            <h3 className=" font-bold  text-2xl  ">Funiro.</h3>
            <p className=" text-text-links">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>
          <div className="  space-y-12 mr-36 ">
            <h3 className=" font-medium text-base  text-text-links ">Links</h3>
            <h4 className="font-medium text-base">Home</h4>
            <h4 className="font-medium text-base">Shop</h4>
            <h4 className="font-medium text-base">About</h4>
            <h4 className="font-medium text-base">Contact</h4>
          </div>

          <div className="  space-y-12 mr-20 ">
            <h3 className=" font-medium text-base  text-text-links">Help</h3>
            <h4 className="font-medium text-base">Payment Options</h4>
            <h4 className="font-medium text-base">Returns</h4>
            <h4 className="font-medium text-base">Privacy Policies</h4>
          </div>
          <EmailSubscription />
        </div>
        <div className="  container mx-auto my-9">
          <p className=" ">2023 furino. All rights reverved</p>
        </div>
      </div>
    </footer>
  );
}

export default TheFooter;
