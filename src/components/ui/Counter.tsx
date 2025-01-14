import { useCart } from "../../context/Cartcontext";

function Counter({ productData }:{productData:string}) {
  const { incrementCount, decrementCount,getProductQuantity} = useCart();


  return (
    <>
    {
     Number(getProductQuantity(productData)) > 0 &&
     
         <div className="md:w-32 w-full h-16 border-[1px] flex items-center justify-between py-5 px-4 rounded-[10px]">
           <button
             onClick={() => decrementCount(productData)}
             className="text-base h-6 cursor-pointer font-normal"
           >
             -
           </button>
 
           {getProductQuantity(productData)}
 
           <button
             onClick={() => incrementCount(productData)}
             className="text-base h-6 cursor-pointer font-normal"
           >
             +
           </button>
         </div>
   

    }
    </>
  );
}

export default Counter;
