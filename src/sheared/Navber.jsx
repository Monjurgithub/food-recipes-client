import React, { useContext, useState } from 'react';
import { FaHamburger, FaUserCircle } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';


const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();

  const isActiveRoute = (routeName) => {
    return location.pathname === routeName ? 'active' : '';
  };


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
            <div className='inline-flex'>
              <Link to="/"><FaHamburger className='text-orange-500	'></FaHamburger></Link>
              <Link to="/"><span className="ml-3 text-xl">FoodFun</span></Link>
            </div>
          </a>
          <ul className=" items-center space-x-8 lg:flex md:ml-auto flex flex-wrap  text-base justify-center">
            <li className={isActiveRoute('/')}> 
            <Link to="/">Home</Link>
            </li>
            <li className={isActiveRoute('/blog')}>
            <Link  to="/blog">Blog</Link>
            </li>

            <li>
            {
              user ? <span className='m-2 flex'><img className="w-10 rounded-full "
                src={user?.photoURL} alt="" /><Link to="/"><button className={isActiveRoute('/')} onClick={handleLogout} variant="dark">LogOut</button></Link></span>
                : <Link to="/login"><button className={isActiveRoute('/login')} variant="dark">LogIn</button></Link>
            }
            </li>






            


            <li className={isActiveRoute('/register')}>
            <Link to="/register">Register</Link>
            </li>
          </ul>

        </div>
      </navbar >
    </div>
  );
};

export default Navber;