import { Link } from 'react-router-dom';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { signOut } from 'firebase/auth';
import User from '../../../assets/icons/User';
import Search from '../../../assets/icons/Search';
import Favorite from '../../../assets/icons/Faviort';
import Cart from '../../../assets/icons/Cart';
import { MingcuteCloseFill } from '../../../assets/icons/Close';
import AppImg from '../../ui/AppImg';
import ProductsList from '../../ui/ProductsList';
import RenderCartDropdown from '../../ecommerce/renderCartDropdown';
import useHeader from '../../../hooks/useheader';
import { IconBars } from '../../../assets/icons/Bars';
import { auth } from '../../../firebase/firebase';

function TheHeader() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const userPhotoURL = Cookies.get('userPhotoURL');
  const userDisplayName = Cookies.get('userDisplayName');

  const {
    pagesLinks,
    toggleCartDropdown,
    openMenu,
    toggleMenu,
    searchVisible,
    searchText,
    handleSearchInput,
    loading,
    error,
    filteredProducts,
    cart,
    deleteProduct,
    cartDropdownOpen,
    setSearchVisible,
    subtotal,
  } = useHeader();

  const handleLogout = () => {
    Cookies.remove('userToken');
    Cookies.remove('userDisplayName');
    Cookies.remove('userPhotoURL');
    signOut(auth)
      .then(() => {
        console.log('User logged out successfully');
        window.location.reload();
      })
      .catch((err) => console.error('Logout error:', err));
  };

  return (
    <header className="w-full bg-white py-7 px-4 md:px-14 lg:px-20 fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <AppImg src="/images/logo.svg" alt="logo" className="w-8 h-8" />
          <h1 className="font-bold text-xl md:text-2xl">Furniro</h1>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden lg:block">
          <ul className="flex gap-8">
            {pagesLinks.map((page, index) => (
              <li key={index} className="text-gray-700 hover:text-gray-900">
                <Link to={page.path}>{page.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Header Actions */}
        <div className="hidden md:flex items-center gap-6">
          {userDisplayName ? (
            <div
              className="relative"
              onMouseEnter={() => setDropdownVisible(true)}
              onMouseLeave={() => setDropdownVisible(false)}
            >
              {userPhotoURL ? (
                <img
                  src={userPhotoURL}
                  alt={userDisplayName || 'User'}
                  className="w-8 h-8 rounded-full cursor-pointer object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/images/default-avatar.png';
                  }}
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer">
                  <span className="text-gray-600 font-medium text-sm">
                    {userDisplayName.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
              {dropdownVisible && (
                <div className="absolute right-0 top-2 mt-2 bg-white border rounded-md shadow-lg p-4 w-40">
                  <button
                    onClick={handleLogout}
                    className="w-full text-red-500 hover:text-red-700"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/auth">
              <User />
            </Link>
          )}

          {/* Search Icon */}
          <span
            onClick={() => setSearchVisible(!searchVisible)}
            className="cursor-pointer"
          >
            <Search />
          </span>

          {/* Favorite Icon */}
          <Favorite />

          {/* Cart Dropdown */}
          <div className="relative">
            <Link
              to="/cart"
              onClick={(e) => {
                e.preventDefault();
                toggleCartDropdown();
              }}
            >
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-secondary-500/85 text-white text-xs flex items-center justify-center rounded-full animate-bounce">
                  {cart.length}
                </span>
              )}
              <Cart />
            </Link>
            {cartDropdownOpen && (
              <RenderCartDropdown
                deleteProduct={deleteProduct}
                subtotal={subtotal}
                cart={cart}
              />
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={toggleMenu}
          className="text-2xl md:hidden"
        >
          {openMenu ? <IconBars /> : <MingcuteCloseFill />}
        </button>
      </div>

      {/* Mobile Menu */}
      {!openMenu && (
        <div className="absolute w-full left-0 top-24 bg-text-primary/55 z-50">
          <nav className="flex flex-col items-center py-8">
            <ul className="flex flex-col gap-6">
              <li>
                {userDisplayName ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setDropdownVisible(true)}
                    onMouseLeave={() => setDropdownVisible(false)}
                  >
                    {userPhotoURL ? (
                      <img
                        src={userPhotoURL}
                        alt={userDisplayName || 'User'}
                        className="w-8 h-8 rounded-full cursor-pointer object-cover"
                        onError={(e) => {
                          e.currentTarget.src = '/images/default-avatar.png';
                        }}
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer">
                        <span className="text-gray-600 font-medium text-sm">
                          {userDisplayName.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    )}
                    {dropdownVisible && (
                      <div className="absolute right-0 top-2 mt-2 bg-white border rounded-md shadow-lg p-4 w-40">
                        <button
                          onClick={handleLogout}
                          className="w-full text-red-500 hover:text-red-700"
                        >
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link to="/auth">
                    <User />
                  </Link>
                )}
              </li>
              {pagesLinks.map((page, index) => (
                <li key={index} onClick={toggleMenu} className="text-white">
                  <Link to={page.path}>{page.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      {/* Search Bar */}
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
              <div className="absolute w-full bg-white shadow-lg h-[500px] scrollbar-hidden overflow-y-scroll rounded-md mt-2">
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
  );
}

export default TheHeader;
