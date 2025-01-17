import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { TProduct } from '../types/products';

const GET_SINGLE_PRODUCT = gql`
  query GetSingleProduct($id: ID!) {
    product(id: $id) {
      id
      category {
        image
      }
      title
      price
      images
      description
    }
  }
`;

const useFetchSinglProduct = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery<{ product: TProduct } | null>(
    GET_SINGLE_PRODUCT,
    {
      variables: { id: id || '' }, 
      skip: !id,
      fetchPolicy: 'cache-first',
    },
  );

  return { loading, error, data, id };
};

export default useFetchSinglProduct;
