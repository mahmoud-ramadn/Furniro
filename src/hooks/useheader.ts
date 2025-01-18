
import { useState,useMemo } from "react";
import useFetchProduct from "./GetProducts";
import debounce from "lodash.debounce";
import { useCart } from "../context/Cartcontext";




const useHeader=()=>{
 const [openMenu, setOpenMenu] = useState(true);
 const [searchVisible, setSearchVisible] = useState(false);
 const [searchText, setSearchText] = useState('');
 const [filteredProducts, setFilteredProducts] = useState([]);
 const [cartDropdownOpen, setCartDropdownOpen] = useState(false);
 const { loading, error, data } = useFetchProduct();
 const { cart, deleteProduct, subtotal } = useCart();
 const pagesLinks = [
   { title: 'Home', path: '/' },
   { title: 'Shop', path: '/shop' },
   { title: 'About', path: '/' },
   { title: 'Cart', path: '/cart' },
   { title: 'Contact', path: '/contact' },
   { title: 'blog', path: '/blog' },
 ];
 const toggleMenu = () => setOpenMenu(!openMenu);

 const toggleCartDropdown = () => setCartDropdownOpen(!cartDropdownOpen);

 const handleSearch = useMemo(
   () =>
     debounce((value: string) => {
       if (!data?.products) return;
       const results = data.products.filter((product) =>
         product.title.toLowerCase().includes(value.toLowerCase()),
       );
       setFilteredProducts(results as never);
     }, 500),
   [data],
 );

 const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
   const value = e.target.value;
   setSearchText(value);
   handleSearch(value);
 };




    return{
        pagesLinks,handleSearch,openMenu,searchVisible,searchText,loading,error ,filteredProducts,
        cart,setSearchText,deleteProduct,cartDropdownOpen,handleSearchInput,subtotal,setSearchVisible
,toggleCartDropdown,toggleMenu
        
    }

}


export default useHeader;