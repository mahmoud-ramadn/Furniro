import EmailSubscription from '../../ui/EmailSubscription';

function TheFooter() {
  return (
    <footer className="px-4 md:px-10 border-t pt-8 ">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between gap-y-8 md:gap-y-0 pb-6">
          <div className="w-full md:w-auto md:max-w-[285px] space-y-6">
            <h3 className="font-bold text-2xl">Funiro.</h3>
            <p className="text-text-links">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>
          <div className="w-1/2 md:w-auto space-y-3">
            <h3 className="font-medium text-text-links">Links</h3>
            <ul className="space-y-2">
              <li className="text-gray-800">Home</li>
              <li className="text-gray-800">Shop</li>
              <li className="text-gray-800">About</li>
              <li className="text-gray-800">Contact</li>
            </ul>
          </div>
          <div className="w-1/2 md:w-auto space-y-3">
            <h3 className="font-medium  text-text-links">Help</h3>
            <ul className="space-y-2">
              <li className="text-gray-800">Payment Options</li>
              <li className="text-gray-800">Returns</li>
              <li className="text-gray-800">Privacy Policies</li>
            </ul>
          </div>
          <div className="w-full md:w-auto">
            <EmailSubscription />
          </div>
        </div>

        <div className="border-t pt-4">
          <p className=" text-gray-600">
            &copy; 2025 Funiro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default TheFooter;
