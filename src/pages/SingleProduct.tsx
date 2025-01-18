import Iconright from '../assets/Iconright';
import ProductDeatails from '../components/ui/ProductDeatails';
import useFetchSinglProduct from '../hooks/GetSingleProduct';
import Tabs from '../components/ui/Tabs';
import { TProductWithCount } from '../types/products';
import Loading from '../components/feedback/Loading';
function SingleProduct() {
  const { error, loading, data } = useFetchSinglProduct()
  return (
   <Loading loading={loading} error={error as undefined} type='SingleProduct'>
    <section>
      <div className=" w-full h-[130px]  flex items-center   px-10   md:px-[100px] bg-primary-500">
        <div className="text-base font-normal   ">
          <h1 className=" flex  items-center  gap-[14px]  ">
            <span className=" flex  items-center text-[#9F9F9F]    gap-[14px] ">
              Home <Iconright /> Shope
            </span>
            <Iconright />
            <span
              className=" border-l-2 flex items-center   
             border-[#9F9F9F]  pl-8 "
            >
              {data?.product.title.substring(0, 10)}
            </span>
          </h1>
        </div>
      </div>
      <div className=" container px-4">
        <ProductDeatails productData={data?.product as TProductWithCount} />
      </div>
      <hr className=" h-[1px] mb-12" />
      <Tabs />
    </section>
   </Loading>
  );
}

export default SingleProduct;
