import React, { useContext } from 'react';
import { FaHamburger, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';


const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  // const {photoURL} = user;
  console.log(user);

  const handleLogout = () => {
    logOut()
    .then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    })
  }



  return (
    <div>
      <navbar className="text-gray-600 body-font">
        <div className=" mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <FaHamburger className='text-orange-500	'></FaHamburger>
            <span className="ml-3 text-xl">FoodFun</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/" className="mr-5 hover:text-gray-900">Home</Link>
            <Link to="/blog" className="mr-5 hover:text-gray-900">Blog</Link>

            {
              user ? <span className='m-2'>{user.email}<Link to = "/login"><button  className='m-2' onClick={handleLogout} variant="dark">LogOut</button></Link></span>
                : <Link to="/login" className="mr-5 hover:text-gray-900"><button  variant="dark">LogIn</button></Link>
            }
            <Link to="/register" className="mr-5 hover:text-gray-900">Register</Link>
          </nav>

        </div>
      </navbar >
    </div>
  );
};

export default Navber;