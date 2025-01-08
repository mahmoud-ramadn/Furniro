import { useState, useEffect } from 'react';
import useFetchProduct from '../../hooks/GetProducts';
import ProductsList from './ProductsList';
import { TProduct } from '../../types/products';
import Btn from './Btn';

interface OurProductsProps {
  visibleNumber: number;
  Title: string;
}

function OurProducts({ visibleNumber, Title }: OurProductsProps) {
  const { loading, data, error } = useFetchProduct();
  const [visibleProducts, setVisibleProducts] = useState<number>(visibleNumber);
  const [showMore, setShowMore] = useState<boolean>(false); 

  useEffect(() => {
    if (data) {
      setVisibleProducts(visibleNumber);
    }
  }, [data, visibleNumber]);

  const handleToggle = () => {
    if (showMore) {
      setVisibleProducts( visibleProducts+4  );
    } else {      
      setVisibleProducts(Math.min(visibleNumber, data?.products.length || 0));
    }
    setShowMore(!showMore); 
    window.scrollTo({
      top: 1200,
      behavior: 'smooth',
    });
  };

  if (loading) return <div>Loading, please wait...</div>;
  if (error) return <div className="text-3xl font-bold text-danger-500">Something went wrong.</div>;

  const productsToDisplay: TProduct[] = data?.products?.slice(0, visibleProducts) || [];

  return (
    <section className="container mx-auto my-8">
      <h1 className="text-[40px] text-text-cardTitle mb-8 text-center font-bold">
        {Title}
      </h1>
      <ProductsList cardData={productsToDisplay} />
      <div className="flex justify-center mt-8">
        <Btn
          onClick={handleToggle}
          className="px-6 py-2 text-lg font-medium text-white bg-primary-500 rounded-md hover:bg-primary-600 transition"
        >
          {showMore ? 'Show Less' : 'Show More'}
        </Btn>
      </div>
    </section>
  );
}

export default OurProducts;
