import { Link } from 'react-router-dom';
import { IconHeart } from '../../assets/icons/Heart';
import { IconReverse_alt } from '../../assets/icons/Revers';
import { IconBxsShareAlt } from '../../assets/icons/Share';
import AppImg from '../ui/AppImg';
import { useCart } from '../../context/Cartcontext';
import { TProduct } from '../../types/products';
import Counter from '../ui/Counter';

interface CardProps {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  price: string;
  discount: string;
  offer?: string;
  percent?: string;
}
const Card = ({
  id,
  image,
  title,
  subtitle,
  price,
  discount,
  offer,
  percent,
}: CardProps) => {

  const { addToCart } = useCart();


  const handleAddToCart = () => {
    const product: TProduct = {
      id,
      title,
      price,
      description: '',
      images: [image],
      category: {
        image,
      },
    };

    addToCart(product);
  }





  return (
    <div className="col-span-1 md:col-span-1 lg:h-[500px] md:h-fit h-full relative bg-Cardeatios-500  rounded-sm shadow-md">

      {price ? (
        <span
          className="w-12 h-12 rounded-full absolute right-6 z-10 top-6 bg-success-500 
          flex items-center text-base font-medium text-white justify-center"
        >
          {offer}
        </span>
      ) : percent ? (
        <span
          className="w-12 h-12 rounded-full absolute right-6 z-10 top-6 bg-danger-500 
          flex items-center text-base font-medium text-white justify-center"
        >
          {percent}
        </span>
      ) : null}
      {/* Image and Hover Group */}
      <div className="relative group overflow-hidden w-full h-[301px]">
        <AppImg src={image} alt={title} width='100%' className=" h-full object-cover" />

        {/* Hover Content */}
        <div
          className="w-full h-0 absolute left-0 top-0 z-10 
          flex items-center justify-center px-4 bg-text-dark/45 
          overflow-hidden transition-all duration-300 ease-in-out 
          group-hover:h-full"
        >
          <div className="px-3  flex items-center flex-col justify-between gap-y-3  h-fit">



            <Counter productData={id} />

            <button
              onClick={handleAddToCart}
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
      </div>

      {/* Card Details */}

      <div className="py-5  w-full  px-5   cursor-pointer">
        <Link to={`/shop/${id}`} >
          <h2 className="text-2xl text-text-cardTitle font-semibold">{title}</h2>
          <p className="text-base text-text-cardSubtitle font-medium">{subtitle}</p>
          <div className="mt-2 flex justify-between items-center">
            <h3 className="text-lg text-text-cardTitle font-bold">{price}</h3>
            <span className="line-through text-text-cardSubtitle/30 font-normal text-base">
              {discount}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
