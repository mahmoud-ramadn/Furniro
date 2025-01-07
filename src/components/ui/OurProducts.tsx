import { useState, useEffect } from 'react';
import useFetchProduct from '../../hooks/GetProducts';
import ProductsList from './ProductsList';
import ShowMoreBtn from './ShowMoreBtn';


function OurProducts() {
  const { loading, data, error } = useFetchProduct();
  const [visibleProducts, setVisibleProducts] = useState<number>(8);
  useEffect(() => {
    if (data) {
      setVisibleProducts(8);
    }
    if (visibleProducts > 24) {
      setVisibleProducts(16)
    }
  }, [data]);

  if (loading) return <div>Loading, please wait...</div>;
  if (error) return <div className="text-3xl font-bold text-danger-500">Something went wrong.</div>;
  const productsToDisplay = data?.products.slice(0, visibleProducts);
  return (
    <section className="container mx-auto my-8">
      <h1 className="text-[40px] text-text-cardTitle mb-8 text-center font-bold">
        Our Products
      </h1>
      <ProductsList cardData={{ products : productsToDisplay }} />
      <ShowMoreBtn onClick={() => setVisibleProducts(visibleProducts + 4)} />
    </section>
  );
}

export default OurProducts;
