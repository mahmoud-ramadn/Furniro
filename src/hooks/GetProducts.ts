import { useQuery, gql } from '@apollo/client';
import { TProduct } from '../types/products';

const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      title
      price
      images
      description
    }
  }
`;

interface ProductsResponse {
  products: TProduct[];
}

const useFetchProduct = () => {
  const { loading, error, data, refetch } = useQuery<ProductsResponse>(
    GET_PRODUCTS,
    {
      fetchPolicy: 'cache-first',
    },
  );

  // Error Handling: You can customize how you want to handle errors
  if (error) {
    console.error('Error fetching products:', error);
  }

  // You can return the error, loading, data, and refetch function to the component
  return { loading, error, data: data || { products: [] }, refetch };
};

export default useFetchProduct;
