import React from 'react';
import { FaHamburger } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Navber = () => {
    return (
        <div>
            <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <FaHamburger className='text-orange-500	'></FaHamburger>
      <span className="ml-3 text-xl">FoodFun</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link to="/" className="mr-5 hover:text-gray-900">Home</Link>
      <Link to="/blog" className="mr-5 hover:text-gray-900">Blog</Link>
      <Link to="/login" className="mr-5 hover:text-gray-900">LogIn</Link>
      <Link to="/register" className="mr-5 hover:text-gray-900">Register</Link>
    </nav>
    
  </div>
</header>
        </div>
    );
};

export default Navber;