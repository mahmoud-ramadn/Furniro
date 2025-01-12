import { Link } from 'react-router-dom';
import { IconBars } from '../../../assets/icons/Bars';
import User from '../../../assets/icons/User';
import Search from '../../../assets/icons/Search';
import Favorite from '../../../assets/icons/Faviort';
import Cart from '../../../assets/icons/Cart';
import { useState, useMemo } from 'react';
import { MingcuteCloseFill } from '../../../assets/icons/Close';
import AppImg from '../../ui/AppImg';
import useFetchProduct from '../../../hooks/GetProducts';
import debounce from 'lodash.debounce';
import ProductsList from '../../ui/ProductsList';
import { useCart } from '../../../context/Cartcontext';
import Closes from '../../../assets/icons/Closes';
import Lock from '../../../assets/icons/lock';

function TheHeader() {
  const [openMenu, setOpenMenu] = useState(true);
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartDropdownOpen, setCartDropdownOpen] = useState(false);

  const { loading, error, data } = useFetchProduct();
  const { cart, deleteProduct,subtotal } = useCart();

  const pagesLinks = [
    { title: 'Home', path: '/' },
    { title: 'Shop', path: '/shop' },
    { title: 'About', path: '/about' },
    { title: 'Cart', path: '/cart' },
    { title: 'Contact', path: '/contact' },
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

  const renderCartDropdown = () => (
    <div className="absolute right-0 mt-2 w-[450px] bg-white h-[746px]   shadow-lg rounded-md ">
      {cart.length > 0 ? (
        <div className=" flex justify-between flex-col h-full">
          <div className=" w-[350px]     mt-7 ml-7    ">
            <div className=" w-full border-b-[1px] pb-6 border-text-links ">
              <h2 className=" text-2xl font-semibold w-full flex justify-between items-center">
                Shopping Cart  <Lock/>
              </h2>
            </div>
 <div className=' flex justify-between h-full flex-col'>

            <div className="overflow-y-scroll  h-[450px]  scrollbar-hidden">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="   flex justify-between items-center  my-5 "
                >
                  <div className="w-16 h-16 md:w-24 md:h-24 rounded-lg bg-primary-500 overflow-hidden">
                    {/* Check if images exist and have at least one element */}
                    {item.images && item.images.length > 0 ? (
                      <AppImg
                        className="w-full h-full"
                        src={item.images[0]}
                        alt="product item"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200"></div>
                    )}
                  </div>
                  <div>
                    <h3 className=" text-base font-normal">
                      {item.title}
                    </h3>
                    <p>
                      1 x{' '}
                      <span className=" text-secondary-500 text-sm">
                        RS{item.price}
                      </span>
                    </p>
                  </div>
                  <button type="button" onClick={() => deleteProduct(item)}>
                    <Closes/>
                  </button>
                </div>
              ))}
            </div>

        <div className='flex items-center justify-between'>
                <h4 className=' text-base font-normal '>Subtotal</h4>
                 <p className=' text-secondary-500 font-semibold text-base'>Rs {subtotal}</p>
                
        </div>
 </div>

          </div>

          <div className=" border-t-[1px] w-full  flex items-center gap-x-4 justify-center py-7 ">
            <Link
              to="/cart"
              className=" text-sm  font-normal  border-[1px] rounded-[50px] flex items-center  h-[30px] px-8"
            >
              cart
            </Link>
            <Link
              to="/cart"
              className=" text-sm  font-normal  border-[1px] rounded-[50px] flex items-center  h-[30px] px-8"
            >
              Checkout
            </Link>
            <Link
              to="/cart"
              className=" text-sm  font-normal  border-[1px] rounded-[50px]  flex items-center  h-[30px] px-8"
            >
              Comparison
            </Link>
          </div>
        </div>
      ) : (
        <div   className=' h-full flex  justify-center items-center'>

          <p className=" text-lg  text-text-links text-center font-bold ">Your cart is empty.</p>
        </div>
      )}
    </div>
  );

  return (
    <>
      <header className="w-full bg-white py-7 px-4 md:px-14 lg:px-20 fixed top-0 left-0 z-50 shadow-md">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <AppImg src="/images/logo.svg" alt="logo" className="w-8 h-8" />
            <h1 className="font-bold text-xl md:text-2xl">Furniro</h1>
          </Link>

          <nav className="hidden lg:block ">
            <ul className="flex gap-8">
              {pagesLinks.map((page, index) => (
                <li key={index} className="text-gray-700 hover:text-gray-900">
                  <Link to={page.path}>{page.title}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <User />
            <span
              onClick={() => setSearchVisible(!searchVisible)}
              className="cursor-pointer"
            >
              <Search />
            </span>
            <Favorite />
            <div className="relative">
              <Link to="/cart" onClick={(e) => { e.preventDefault(); toggleCartDropdown(); }}>
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 w-5 h-5  bg-secondary-500/85 text-white text-xs flex items-center justify-center rounded-full animate-bounce">
                    {cart.length}
                  </span>
                )}
                <Cart />
              </Link>
              {cartDropdownOpen && renderCartDropdown()}
            </div>

          </div>

          <button
            type="button"
            onClick={toggleMenu}
            className="text-2xl md:hidden"
          >
            {openMenu ? <IconBars /> : <MingcuteCloseFill />}
          </button>
        </div>

        {!openMenu && (
          <div className="absolute w-full  left-0 top-24 bg-text-primary/55 z-50">
            <nav className="flex flex-col items-center py-8">
              <ul className="flex flex-col gap-6">
                {pagesLinks.map((page, index) => (
                  <li key={index} onClick={toggleMenu} className="text-white">
                    <Link to={page.path}>{page.title}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}

        {searchVisible && (
          <div className="w-full hidden bg-primary-500 p-4 md:flex justify-center">
            <div className="relative w-2/3">
              <input
                type="text"
                placeholder="Search"
                value={searchText}
                onChange={handleSearchInput}
                className="w-full h-12 px-4 rounded-lg border focus:outline-none"
              />
              {searchText && (
                <div className="absolute w-full   bg-white shadow-lg  h-[500px] scrollbar-hidden    overflow-y-scroll rounded-md mt-2">
                  {loading && <p>Loading...</p>}
                  {error && <p>Error loading products</p>}
                  {filteredProducts.length > 0 ? (
                    <ProductsList cardData={filteredProducts} />
                  ) : (
                    <p>No products found</p>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </header>
      <div className="h-24" />
    </>
  );
}

export default TheHeader;
