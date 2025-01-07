import { TProduct } from '../../types/products';
import Card from '../ecommerce/Card';




interface ProductsResponse {
  products: TProduct[];
}

const ProductsList = ({ cardData }: { cardData: ProductsResponse }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 py-3 md:gap-8 gap-4">
      {cardData.products.map((card:TProduct) => (
        <Card
          key={card.id} 
          id={card.id}
          image={card.images[0]}
          title={card.title.substring(0,20)}
          subtitle={card.title.substring(0,30)}
          price={`$${card.price}`}
          discount={`$${(card.price * 0.8).toFixed(2)}`} 
          offer="New"
          percent={`$${(card.price * 0.8).toFixed(2)}`}  
        />
      ))}
    </div>
  );
};

export default ProductsList;
