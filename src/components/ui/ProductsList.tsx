import { TProduct } from '../../types/products';
import Card from '../ecommerce/Card';

const ProductsList = ({ cardData }: { cardData: TProduct[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-3 md:gap-8 gap-4">
      {cardData.map((card: TProduct) => {
        const formattedPrice = `$${card.price.toFixed(2)}`;
        const discountedPrice = `$${(card.price * 0.8).toFixed(2)}`;

        return (
          <Card
            key={card.id}
            id={card.id}
            image={card.images[0]}
            title={card.title.substring(0, 20)}
            subtitle={card.title.substring(0, 30)}
            price={formattedPrice}
            discount={discountedPrice}
            offer="New"
            percent="20%"
          />
        );
      })}
    </div>
  );
};

export default ProductsList;
