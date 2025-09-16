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
import ThemeToggle from '../../ui/ThemeToggle';
import { useTheme } from '../../../context/ThemeContext';

function TheHeader() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const userPhotoURL = Cookies.get('userPhotoURL');
  const userDisplayName = Cookies.get('userDisplayName');
  const { darkMode } = useTheme();

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

  const renderUserProfile = () => (
    <div
      className="relative group"
      onMouseEnter={() => setDropdownVisible(true)}
      onMouseLeave={() => setDropdownVisible(false)}
    >
      {userPhotoURL ? (
        <img
          src={userPhotoURL}
          alt={userDisplayName || 'User'}
          className="w-9 h-9 rounded-full cursor-pointer object-cover ring-2 ring-transparent hover:ring-secondary-500 transition-all duration-200"
          onError={(e) => {
            e.currentTarget.src = '/images/default-avatar.png';
          }}
        />
      ) : (
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-secondary-400 to-secondary-600 flex items-center justify-center cursor-pointer hover:shadow-lg transition-all duration-200">
          <span className="text-white font-semibold text-sm">
            {userDisplayName?.charAt(0).toUpperCase() || 'U'}
          </span>
        </div>
      )}

      {/* User Dropdown */}
      {dropdownVisible && (
        <div className="absolute right-0 top-12 bg-white border border-gray-200 rounded-lg shadow-xl p-3 w-48 z-50 transform opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
          <div className="mb-3 pb-3 border-b border-gray-100">
            <p className="font-medium text-gray-900 truncate">
              {userDisplayName || 'User'}
            </p>
            <p className="text-sm text-gray-500">Welcome back!</p>
          </div>
          <button
            onClick={handleLogout}
            className="w-full text-left px-3 py-2 text-red-600 hover:bg-red-50 rounded-md transition-colors duration-150 font-medium"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );

  const renderSearchResults = () => (
    <div className="absolute w-full bg-white shadow-2xl border border-gray-100 rounded-xl mt-3 max-h-96 overflow-hidden z-50">
      <div className="p-4 border-b border-gray-100">
        <h3 className="font-semibold text-gray-900">Search Results</h3>
        {filteredProducts.length > 0 && (
          <p className="text-sm text-gray-500 mt-1">
            {filteredProducts.length} products found
          </p>
        )}
      </div>

      <div className="max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {loading && (
          <div className="p-8 text-center">
            <div className="animate-spin w-6 h-6 border-2 border-secondary-500 border-t-transparent rounded-full mx-auto"></div>
            <p className="mt-2 text-gray-500">Searching...</p>
          </div>
        )}

        {error && (
          <div className="p-8 text-center text-red-500">
            <p>Error loading products</p>
          </div>
        )}

        {!loading && !error && filteredProducts.length > 0 && (
          <ProductsList cardData={filteredProducts.slice(0, 6)} />
        )}

        {!loading && !error && filteredProducts.length === 0 && searchText && (
          <div className="p-8 text-center text-gray-500">
            <p>No products found for "{searchText}"</p>
            <p className="text-sm mt-1">Try different keywords</p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Header */}
      <header className="w-full bg-white shadow-sm border-b border-gray-100 py-4 px-4 md:px-8 lg:px-12 fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            <AppImg
              src="/images/logo.svg"
              alt="logo"
              className="w-8 h-8 transition-transform duration-200 group-hover:scale-105"
            />
            <h1 className="font-bold text-xl md:text-2xl text-gray-900 tracking-tight">
              Furniro
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {pagesLinks.map((page, index) => (
                <li key={index}>
                  <Link
                    to={page.path}
                    className="text-gray-700 hover:text-secondary-600 font-medium transition-colors duration-200 relative group"
                  >
                    {page.title}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Header Actions */}
          <div className="hidden md:flex items-center gap-5">
            {/* User Profile */}
            {userDisplayName ? (
              renderUserProfile()
            ) : (
              <Link
                to="/auth"
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
              >
                <User />
              </Link>
            )}

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Search Button */}
            <button
              onClick={() => setSearchVisible(!searchVisible)}
              className={`p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200 ${
                searchVisible
                  ? 'bg-secondary-50 text-secondary-600'
                  : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Favorites */}
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200">
              <Favorite className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>

            {/* Cart with Dropdown */}
            <div className="relative">
              <button
                onClick={toggleCartDropdown}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200 relative"
              >
                <div className="w-5 h-5">
                  <Cart />
                </div>
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-secondary-500 text-white text-xs flex items-center justify-center rounded-full font-medium animate-pulse">
                    {cart.length}
                  </span>
                )}
              </button>

              {cartDropdownOpen && (
                <div className="absolute right-0 top-12 z-50">
                  <RenderCartDropdown
                    deleteProduct={deleteProduct}
                    subtotal={subtotal}
                    cart={cart}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            {openMenu ? (
              <IconBars className="w-6 h-6 text-gray-700" />
            ) : (
              <IconBars className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {!openMenu && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden">
          <div className="fixed right-0 top-0 h-full w-80 bg-white dark:bg-gray-800 shadow-2xl transform transition-transform duration-300">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Menu
              </h2>
              <button
                onClick={toggleMenu}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
              >
                <MingcuteCloseFill className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div className="p-6 space-y-6">
              {/* User Section */}
              <div className="pb-6 border-b border-gray-200 dark:border-gray-700">
                {userDisplayName ? (
                  <div className="flex items-center gap-3">
                    {userPhotoURL ? (
                      <img
                        src={userPhotoURL}
                        alt={userDisplayName || 'User'}
                        className="w-12 h-12 rounded-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = '/images/default-avatar.png';
                        }}
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary-400 to-secondary-600 flex items-center justify-center">
                        <span className="text-white font-semibold">
                          {userDisplayName?.charAt(0).toUpperCase() || 'U'}
                        </span>
                      </div>
                    )}
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {userDisplayName || 'User'}
                      </p>
                      <button
                        onClick={handleLogout}
                        className="text-sm text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                ) : (
                  <Link
                    to="/auth"
                    onClick={toggleMenu}
                    className="flex items-center gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg"
                  >
                    <div className="w-6 h-6 text-gray-700 dark:text-gray-300">
                      <User />
                    </div>
                    <span className="font-medium text-gray-900 dark:text-white">
                      Sign In
                    </span>
                  </Link>
                )}
              </div>

              {/* Navigation Links */}
              <nav>
                <ul className="space-y-2">
                  {pagesLinks.map((page, index) => (
                    <li key={index}>
                      <Link
                        to={page.path}
                        onClick={toggleMenu}
                        className="block p-3 text-gray-700 hover:bg-gray-50 hover:text-secondary-600 rounded-lg font-medium transition-colors duration-200 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-secondary-400"
                      >
                        {page.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Mobile Actions */}
              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-around">
                  <button
                    onClick={() => setSearchVisible(!searchVisible)}
                    className="flex flex-col items-center gap-1 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg"
                  >
                    <Search className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      Search
                    </span>
                  </button>

                  <button className="flex flex-col items-center gap-1 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg">
                    <Favorite className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      Favorites
                    </span>
                  </button>

                  <button
                    onClick={() => {
                      toggleCartDropdown();
                      toggleMenu();
                    }}
                    className="flex flex-col items-center gap-1 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg relative"
                  >
                    <div className="w-6 h-6 text-gray-700 dark:text-gray-300">
                      <Cart />
                    </div>
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      Cart
                    </span>
                    {cart.length > 0 && (
                      <span className="absolute top-1 right-2 w-4 h-4 bg-secondary-500 text-white text-xs flex items-center justify-center rounded-full">
                        {cart.length}
                      </span>
                    )}
                  </button>

                  {/* Theme Toggle for Mobile */}
                  <div className="flex flex-col items-center gap-1 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg">
                    <ThemeToggle />
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      {darkMode ? 'Light' : 'Dark'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Search Bar */}
      {searchVisible && (
        <div className="fixed top-20 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-40 px-4 md:px-8 lg:px-12 py-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for products, brands, categories..."
                  value={searchText}
                  onChange={handleSearchInput}
                  className="w-full h-14 pl-12 pr-12 rounded-xl border-2 border-gray-200 focus:border-secondary-500 focus:outline-none text-gray-900 placeholder-gray-500 transition-colors duration-200"
                  autoFocus
                />
                <button
                  onClick={() => setSearchVisible(false)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full"
                >
                  <MingcuteCloseFill className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              {searchText && renderSearchResults()}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TheHeader;
