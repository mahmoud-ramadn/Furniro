import { useState } from 'react';
import Btn from './Btn';
import OurProducts from './OurProducts';

function Tabs() {
  const [activeTab, setActiveTab] = useState<string>('Description');

  const handleActiveTab = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div className="container mb-16 px-4">
      <div
        className="
                mx-auto
          md:w-[649px] flex justify-between
          font-normal md:text-2xl text-base text-text-links
            mb-9

        "
      >
        <Btn
          onClick={() => handleActiveTab('Description')}
          className={`${activeTab === 'Description' && 'text-[#000]'}`}
        >
          Description
        </Btn>
        <Btn
          onClick={() => handleActiveTab('Additional Information')}
          className={`${
            activeTab === 'Additional Information' && 'text-[#000]'
          }`}
        >
          Additional Information
        </Btn>
        <Btn
          onClick={() => handleActiveTab('Reviews')}
          className={`${activeTab === 'Reviews' && 'text-[#000]'}`}
        >
          Reviews [5]
        </Btn>
      </div>

      <div
        className="mx-auto md:h-44 lg:w-[1026px] overflow-hidden  w-full flex flex-col justify-between text-text-links
                 md:text-base text-sm font-normal  "
      >
        <p>
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
          portable active stereo speaker takes the unmistakable look and sound
          of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <p>
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound that is both articulate and pronounced. The analogue
          knobs allow you to fine tune the controls to your personal preferences
          while the guitar-influenced leather strap enables easy and stylish
          travel.
        </p>
      </div>

      <div className="  justify-center flex mt-9 flex-wrap  gap-8 items-center ">
        <div className="md:w-[605px] md:h-[348px] bg-primary-500 rounded ">
          <img src="/sofa.webp" alt="" />
        </div>
        <div className="md:w-[605px] md:h-[348px] bg-primary-500 rounded">
          <img src="/sofa1.webp" alt="" />
        </div>
      </div>


      <OurProducts Title="Related Products" visibleNumber={4} />
    </div>
  );
}

export default Tabs;
