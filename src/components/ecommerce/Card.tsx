import { IconHeart } from '../../assets/icons/Heart';
import { IconReverse_alt } from '../../assets/icons/Revers';
import { IconBxsShareAlt } from '../../assets/icons/Share';

interface CardProps {
  image: string;
  title: string;
  subtitle: string;
  price: string;
  discount: string;
  offer?: string;
  percent?: string;
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  subtitle,
  price,
  discount,
  offer,
  percent,
}) => {
  return (
    <div className="col-span-1 md:col-span-1 h-[446px] relative group bg-Cardeatios-500 rounded-sm shadow-md">
      {offer ? (
        <span
          className="w-12 h-12 rounded-full absolute right-6 top-6 bg-success-500 
      flex items-center text-base font-medium text-white justify-center"
        >
          {offer}
        </span>
      ) : percent ? (
        <span
          className="w-12 h-12 rounded-full absolute right-6 top-6 bg-danger-500 
      flex items-center text-base font-medium text-white justify-center"
        >
          {percent}
        </span>
      ) : null}

      <div
        className="w-full h-[0%] absolute left-0 overflow-hidden top-1/2 
        -translate-y-1/2 group-hover:h-[100%] duration-100 ease-linear 
        transition-all flex items-center justify-center px-4 bg-text-dark/45"
      >
        <div className="px-3 flex items-center flex-col justify-between h-24">
          <button
            type="button"
            className="text-secondary-500 w-[202px] font-semibold h-12 flex items-center 
                      justify-center text-base bg-white"
          >
            Add to Cart
          </button>
          <div className="flex items-center text-base font-semibold text-white gap-x-5">
            <button type="button" className="flex items-center">
              <IconBxsShareAlt /> Share
            </button>
            <button type="button" className="flex items-center">
              <IconReverse_alt /> Compare
            </button>
            <button type="button" className="flex items-center">
              <IconHeart /> Like
            </button>
          </div>
        </div>
      </div>
      <img src={image} alt={title} className="w-full h-[301px] object-cover" />
      <div className="py-5 px-4">
        <h2 className="text-2xl text-text-cardTitle font-semibold">{title}</h2>
        <p className="text-base text-text-cardSubtitle font-medium">
          {subtitle}
        </p>
        <div className="mt-2 flex justify-between items-center">
          <h3 className="text-lg text-text-cardTitle font-bold">{price}</h3>
          <span className="line-through text-text-cardSubtitle/30 font-normal text-base">
            {discount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
