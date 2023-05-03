import React, { useContext, useState } from 'react';
import { HiEye, HiEyeSlash } from "react-icons/hi2";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import SocialIcon from '../sheared/SocialIcon';
import { toast } from 'react-toastify';



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useContext(AuthContext)
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  console.log(from);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast(errorMessage)
      });
  };

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <form onSubmit={handleSubmit} className=" w-2/4 mx-auto p-4 bg-white shadow-md rounded-md lg:w-1/4">
        <h2 className="text-lg font-medium mb-4">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="name"
            onChange={handleEmailChange}
            className="w-full border-gray-300 border rounded-md px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-2 flex items-center">
            Password
            <button type="button" onClick={handleTogglePassword} className="ml-2 text-gray-500 focus:outline-none">
              {showPassword ? <HiEyeSlash className="h-5 w-5" /> : <HiEye className="h-5 w-5" />}
            </button>
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            onChange={handlePasswordChange}
            className="w-full border-gray-300 border rounded-md px-3 py-2"
            required
          />
          
        </div>
        <div>
          <p>New to FoodFun? <Link to="/register">Create a new account</Link> </p>
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Login
        </button>
      </form>
      <SocialIcon></SocialIcon>
    </div>
  );
}

export default Login;
