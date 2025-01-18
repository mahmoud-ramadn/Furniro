import { Link } from 'react-router-dom';
import { IconBars } from '../../../assets/icons/Bars';
import User from '../../../assets/icons/User';
import Search from '../../../assets/icons/Search';
import Favorite from '../../../assets/icons/Faviort';
import Cart from '../../../assets/icons/Cart';
import { MingcuteCloseFill } from '../../../assets/icons/Close';
import AppImg from '../../ui/AppImg';
import ProductsList from '../../ui/ProductsList';
import RenderCartDropdown from '../../ecommerce/renderCartDropdown';
import useHeader from '../../../hooks/useheader';

function TheHeader() {
  const { pagesLinks, toggleCartDropdown, openMenu, toggleMenu,
    searchVisible, searchText, handleSearchInput, loading, error, filteredProducts, cart,
    deleteProduct, cartDropdownOpen, setSearchVisible, subtotal

  } = useHeader();

  return (
    <>
      <header className="w-full bg-white py-7 px-4 md:px-14 lg:px-20 fixed top-0 left-0 z-50   ">
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
            <Link to='/auth'>
            <User />
            </Link>
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
              {cartDropdownOpen && <RenderCartDropdown deleteProduct={deleteProduct} subtotal={subtotal} cart={cart} />}
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
      <div className="py-7  w-full" />
    </>
  );
}

export default TheHeader;
