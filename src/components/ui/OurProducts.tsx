import React, { useState, useEffect, useCallback, useMemo } from 'react';
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
  const [state, setState] = useState({
    visibleProducts: visibleNumber,
    showMore: false,
  });

  const productsToDisplay: TProduct[] = useMemo(() => {
    return data?.products?.slice(0, state.visibleProducts) || [];
  }, [data, state.visibleProducts]);

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      visibleProducts: visibleNumber,
    }));
  }, [visibleNumber]);

  const handleToggle = useCallback(() => {
    setState((prevState) => {
      const totalProducts = data?.products.length || 0;
      const newVisibleProducts = prevState.showMore
        ? Math.max(visibleNumber, prevState.visibleProducts - 4) 
        : Math.min(totalProducts, prevState.visibleProducts + 4); 

      return {
        visibleProducts: newVisibleProducts,
        showMore: newVisibleProducts < totalProducts, 
      };
    });

    window.scrollTo({
      top: 1200,
      behavior: 'smooth',
    });
  }, [data?.products.length, state.visibleProducts, visibleNumber]);

  if (loading) return <div>Loading, please wait...</div>;
  if (error) return <div className="text-3xl font-bold text-danger-500">Something went wrong.</div>;

  return (
    <section className="container mx-auto my-8">
      <h1 className="text-[40px] text-text-cardTitle mb-8 text-center font-bold">
        {Title}
      </h1>

      {/* Use React.lazy for better performance if ProductsList is large */}
      <React.Suspense fallback={<div>Loading products...</div>}>
        <ProductsList cardData={productsToDisplay} />
      </React.Suspense>

      <div className="flex justify-center mt-8">
        <Btn
          onClick={handleToggle}
          className="text-lg font-medium border-secondary-500 border-[1px] w-[245px] h-[48px] flex items-center justify-center hover:bg-primary-600 transition-all"
        >
          {state.showMore ? 'Show Less' : 'Show More'}
        </Btn>
      </div>
    </section>
  );
}

export default OurProducts;
