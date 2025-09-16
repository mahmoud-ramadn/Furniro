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
        image: '',
      },
    };

    addToCart(product);
  };

  return (
    <div className="col-span-1 md:col-span-1 lg:h-[520px] md:h-fit h-full relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      {/* Offer Badge */}
      {offer ? (
        <span className="w-14 h-14 rounded-full absolute right-4 z-10 top-4 bg-success-500 flex items-center text-sm font-bold text-white justify-center shadow-lg">
          {offer}
        </span>
      ) : percent ? (
        <span className="w-14 h-14 rounded-full absolute right-4 z-10 top-4 bg-danger-500 flex items-center text-sm font-bold text-white justify-center shadow-lg">
          {percent}
        </span>
      ) : null}

      {/* Image and Hover Group */}
      <div className="relative group overflow-hidden w-full h-[300px]">
        <AppImg
          src={image || '/images/placeholder.jpg'}
          alt={title}
          width="100%"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Hover Content */}
        <div className="w-full h-0 absolute left-0 top-0 z-10 flex items-center justify-center px-4 bg-black/40 overflow-hidden transition-all duration-300 ease-in-out group-hover:h-full">
          <div className="px-3 flex flex-col items-center justify-center gap-y-4 h-fit opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            <Counter productData={id} />

            <button
              onClick={handleAddToCart}
              type="button"
              className="text-white w-[180px] font-bold h-12 flex items-center justify-center text-base bg-secondary-500 hover:bg-secondary-600 rounded-full transition-all duration-300 shadow-lg"
            >
              Add to Cart
            </button>

            <div className="flex items-center text-sm font-semibold text-white gap-x-4">
              <button
                type="button"
                className="flex flex-col items-center group/share"
              >
                <div className="p-2 bg-white/20 rounded-full group-hover/share:bg-white/30 transition-colors duration-300">
                  <IconBxsShareAlt />
                </div>
                <span className="mt-1 text-xs">Share</span>
              </button>

              <button
                type="button"
                className="flex flex-col items-center group/compare"
              >
                <div className="p-2 bg-white/20 rounded-full group-hover/compare:bg-white/30 transition-colors duration-300">
                  <IconReverse_alt />
                </div>
                <span className="mt-1 text-xs">Compare</span>
              </button>

              <button
                type="button"
                className="flex flex-col items-center group/like"
              >
                <div className="p-2 bg-white/20 rounded-full group-hover/like:bg-white/30 transition-colors duration-300">
                  <IconHeart />
                </div>
                <span className="mt-1 text-xs">Like</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Card Details */}
      <div className="py-5 w-full px-5 cursor-pointer">
        <Link to={`/shop/${id}`}>
          <h2 className="text-xl text-text-cardTitle font-bold mb-1 line-clamp-1">
            {title}
          </h2>
          <p className="text-base text-text-cardSubtitle font-medium mb-3 line-clamp-2">
            {subtitle}
          </p>

          <div className="mt-2 flex items-center gap-3">
            <h3 className="text-lg text-text-cardTitle font-bold">{price}</h3>
            {discount && (
              <span className="line-through text-text-cardSubtitle/50 font-normal text-base">
                {discount}
              </span>
            )}
          </div>

          {/* Rating would go here if available */}
          <div className="mt-3 flex items-center">
            <div className="flex text-amber-400">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <span className="text-sm text-gray-500 ml-2">(0)</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
