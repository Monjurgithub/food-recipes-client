import React, { useContext } from 'react';
import { FaHamburger, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
const Navber = () => {
  const {user, logOut} = useContext(AuthContext);
  // const {photoURL} = user;
  // const {displayName} = user;
  // console.log(displayName);
  const handleLogout =() =>{
    logOut()
    .then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
}
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

      {
        user ? <span className='flex inline-flex'><img src="" alt="" /> <Link onClick={handleLogout} className="mr-5 hover:text-gray-900">LogOut</Link></span>
        : <Link to="/login" className="mr-5 hover:text-gray-900">LogIn</Link>
      }
      <Link to="/register" className="mr-5 hover:text-gray-900">Register</Link>
    </nav>
    
  </div>
</header>
        </div>
    );
};

export default Navber;