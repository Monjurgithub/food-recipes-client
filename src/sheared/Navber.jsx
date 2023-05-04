import React, { useContext, useState } from 'react';
import { FaHamburger, FaUserCircle } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'


const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  const [activeRoute, setActiveRoute] = useState('/');

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
    <div  className='mb-8'>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link to="/" onClick={() => setActiveRoute('/')}
                  className={`${activeRoute === '/' ? 'text-blue-500' : 'text-gray-500'
                    } hover:text-blue-500`}>Home</Link>
              </li>
              <li>
                <Link to="/blog" onClick={() => setActiveRoute('/blog')}
                  className={`${activeRoute === '/blog' ? 'text-blue-500' : 'text-gray-500'
                    } hover:text-blue-500`}>Blog</Link>
              </li>
              <li>{
              user ? <div className='flex-none gap-2' data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName}><img className="w-10 rounded-full "
                src={user?.photoURL} alt="" /><Link to="/" ><button onClick={handleLogout} variant="dark">LogOut</button></Link></div>
                : <Link to="/login" onClick={() => setActiveRoute('/login')}
                  className={`${activeRoute === '/login' ? 'text-blue-500' : 'text-gray-500'
                    } hover:text-blue-500`}><button variant="dark">LogIn</button></Link>
            }</li>
            </ul>
          </div>
          <Link to="/"><a className="btn btn-ghost normal-case text-xl">FoodFun</a></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">

            <li>
              <Link to="/" onClick={() => setActiveRoute('/')}
                className={`${activeRoute === '/' ? 'text-blue-500' : 'text-gray-500'
                  } hover:text-blue-500`}>Home</Link>
            </li>

            <li>
              <Link to="/blog" onClick={() => setActiveRoute('/blog')}
                className={`${activeRoute === '/blog' ? 'text-blue-500' : 'text-gray-500'
                  } hover:text-blue-500`}>Blog</Link>
            </li>
            <li>{
              user ? <div className='flex-none gap-2' data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName}><img className="w-10 rounded-full "
                src={user?.photoURL} alt="" /><Link to="/" ><button onClick={handleLogout} variant="dark">LogOut</button></Link></div>
                : <Link to="/login" onClick={() => setActiveRoute('/login')}
                  className={`${activeRoute === '/login' ? 'text-blue-500' : 'text-gray-500'
                    } hover:text-blue-500`}><button variant="dark">LogIn</button></Link>
            }</li>
          </ul>
        </div>
        <div className="navbar-end">
          <li >
            <Link to="/register" onClick={() => setActiveRoute('/register')}
              className={`${activeRoute === '/register' ? 'text-blue-500' : 'text-gray-500'
                } hover:text-blue-500`}><button className='btn'>Register</button></Link>
          </li>
        </div>
      </div>

      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default Navber;