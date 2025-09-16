import { TProduct } from '../../types/products';
import Card from '../ecommerce/Card';

const ProductsList = ({ cardData }: { cardData: TProduct[] }) => {
  if (!cardData || cardData.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-6">
      {cardData.map((card: TProduct) => {
        const price = Number(card.price);
        const formattedPrice = `$${price.toFixed(2)}`;
        const discountedPrice = `$${(price * 0.8).toFixed(2)}`;

        return (
          <Card
            key={card.id}
            id={card.id}
            image={card.images?.[0] || '/images/placeholder.jpg'}
            title={card.title}
            subtitle={card.description || card.title}
            price={formattedPrice}
            discount={discountedPrice}
            offer="Sale"
            percent="20%"
          />
        );
      })}
    </div>
  );
};

export default ProductsList;
