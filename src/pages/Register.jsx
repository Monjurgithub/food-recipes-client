import React, { Children, useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';
import { Form } from 'react-router-dom';
import SocialIcon from '../sheared/SocialIcon';

const Register =() => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [error, setError] = useState('')


  const {createUser} = useContext(AuthContext)
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  

  const handlePhotoUrlChange = (e) => {
    setPhotoUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const form = e.target;
    // const email = form.email.value;
    // const password = form.password.value;
    setError("")
    if (password.length <= 7) {
      setError(toast("Your password must be 8 character or longer"));
      return;
    }
    createUser(email, password, name, photoUrl)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      updateProfile(user, {displayName: name})
      updateProfile(user, {photoURL: photoUrl})
      // Form.reset;
  })
  .catch((error) => {
      const errorMessage = error.message;
      setError(errorMessage);
  }
  )
  };

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
        <Form onSubmit={handleSubmit} className=" w-2/4 p-4 bg-white shadow-md rounded-md lg:w-1/4">
      <h2 className="text-lg font-medium mb-4">Register</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleNameChange}
          className="w-full border-gray-300 border rounded-md px-3 py-2"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          className="w-full border-gray-300 border rounded-md px-3 py-2"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          className="w-full border-gray-300 border rounded-md px-3 py-2"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="photoUrl" className="block text-gray-700 font-medium mb-2">Photo URL</label>
        <input
          type="url"
          id="photoUrl"
          name="photoUrl"
          value={photoUrl}
          onChange={handlePhotoUrlChange}
          className="w-full border-gray-300 border rounded-md px-3 py-2"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
        Register
      </button>
    </Form>
    <SocialIcon></SocialIcon>
    
    </div>
  );
}

export default Register;
