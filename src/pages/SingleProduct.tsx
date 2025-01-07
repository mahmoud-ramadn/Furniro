import { useLocation } from "react-router-dom";
import Iconright from "../assets/Iconright";
import ProductDeatails from "../components/ui/ProductDeatails";
import useFetchSinglProduct from "../hooks/GetSingleProduct";
function SingleProduct() {

  window.scrollTo(0, 0);


  const pageName = useLocation();

  console.log(pageName.pathname);

  const { error, loading, data } = useFetchSinglProduct();



  if (loading) return <div className=" font-bold text-5xl p w-full min-h-screen flex items-center justify-center   bg-primary-200 rounded-md    animate-ping ">

    <h1> Loading ...</h1> 
  </div>

  if (error) return <div> some thing want worng</div>

  return (
    <section>
      <div className=" w-full h-[100px]   flex items-center  px-10   md:px-[100px] bg-primary-500">
        <div className="   text-base font-normal   ">
          <h1 className=" flex  items-center  gap-[14px]  ">
            <span className=" flex  items-center text-[#9F9F9F]    gap-[14px] "> Home <Iconright /> Shope </span>  <Iconright /> <span className=" h-9 border-l-2 flex items-center   
             border-[#9F9F9F]  pl-8 "> {data?.product.title.substring(0, 10)}</span> </h1>


        </div>
      </div>
      <div className=" container    ">
       <ProductDeatails productData={data} />
      </div>
      <hr className=" h-[1px] mb-12" />


    </section>
  )
}

export default SingleProduct