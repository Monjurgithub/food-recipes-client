import React, { useContext } from 'react';
import { FaHamburger, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';


const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user?.photoURL);

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
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/" className="mr-5 hover:text-gray-900">Home</Link>
            <Link to="/blog" className="mr-5 hover:text-gray-900">Blog</Link>

            {
              user ? <span className='m-2 flex'><img className="w-10 rounded-full"
               src={user?.photoURL} alt="" /><Link to = "/login"><button  className='m-2' onClick={handleLogout} variant="dark">LogOut</button></Link></span>
                : <Link to="/login" className="mr-5 hover:text-gray-900"><button  variant="dark">LogIn</button></Link>
            }
            <Link to="/register" className="mr-5 ml-4 hover:text-gray-900">Register</Link>
          </nav>

        </div>
      </navbar >
    </div>
  );
};

export default Navber;