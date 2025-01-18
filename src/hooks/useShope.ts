

import useFetchProduct from "./GetProducts"
import { useState } from "react";
const useShopeProducts=()=>{
  const { loading, data, error } = useFetchProduct();
 const [currentPage, setCurrentPage] = useState(1);
   const itemsPerPage = 16;

 const totalPages = Math.ceil((data?.products.length || 0) / itemsPerPage);
 const startIndex = (currentPage - 1) * itemsPerPage;
 const productsToDisplay = data?.products.slice(
   startIndex,
   startIndex + itemsPerPage,
 );
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

return { loading,data,error,currentPage,itemsPerPage ,totalPages,
    
    handleNext,handlePageClick ,productsToDisplay}
}



export default useShopeProducts