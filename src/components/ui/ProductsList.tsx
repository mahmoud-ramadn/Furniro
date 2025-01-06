import Card from '../ecommerce/Card';
interface CardProps {
  image: string;
  title: string;
  subtitle: string;
  price: string;
  discount: string;
  offer?: string;
  percent?: string;
}

const ProductsList = ({ CardData }: { CardData: CardProps[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 py-3 md:gap-8 gap-4">
      {CardData.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          subtitle={card.subtitle}
          price={card.price}
          discount={card.discount}
          offer={card.offer}
          percent={card.percent}
        />
      ))}
    </div>
  );
};

export default ProductsList;
