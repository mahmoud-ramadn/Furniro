import AppImg from './AppImg';
import SectionTitle from './SectionTitle';

function BrowserTheRange() {
  const CardImage = [
    {
      one: '/our Products/Images-4.webp',
      CatgoriesTite: 'Dining',
    },
    {
      one: '/our Products/Images-6.webp',
      CatgoriesTite: 'Living',
    },
    {
      one: '/our Products/Images-3.webp',
      CatgoriesTite: 'Bedroom',
    },
  ];
  return (
    <section className=" container mx-auto md:px-32  px-4 text-center">
      <div className=" space-y-3 mb-14 ">
        <SectionTitle title="Browse The Range" />
        <p className="  md:text-xl font-normal  text-base   text-text-secondary ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className=" w-full grid   md:grid-cols-4   lg:grid-cols-3  mb-14     gap-5     grid-cols-1">
        {CardImage.map((item, index) => {
          return (
            <>
              <div className="  md:col-span-2  lg:col-span-1 col-span-1 md:h-[520px] flex   space-y-7  flex-col justify-between  ">
                <AppImg
                  className=" w-full   rounded-md h-[480px] "
                  src={item.one}
                  alt="cardimg"
                  key={index}
                />
                <h3 className="  md:text-2xl text-lg font-semibold   text-text-primary ">
                  {item.CatgoriesTite}
                </h3>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
}

export default BrowserTheRange;
