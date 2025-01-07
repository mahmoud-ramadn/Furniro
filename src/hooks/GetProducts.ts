
import { useQuery, gql } from '@apollo/client';
import { TProduct } from '../types/products';

const GET_PRODUCTS = gql`
  query {
    products {
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




interface ProductsResponse {
  products: TProduct[];
}



const useFetchProduct=()=>{
        const { loading, error, data }=useQuery<ProductsResponse>(GET_PRODUCTS);
    return { loading, error ,data }

}


export default useFetchProduct;