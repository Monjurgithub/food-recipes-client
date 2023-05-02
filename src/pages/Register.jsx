import React from 'react';
import { useState } from 'react';

const Register =() => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');

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
    // Handle form submission here
  };

  return (
    <div className='flex justify-center items-center h-screen'>
        <form onSubmit={handleSubmit} className=" w-2/4 p-4 bg-white shadow-md rounded-md lg:w-1/4">
      <h2 className="text-lg font-medium mb-4">Register</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
        <input
          type="text"
          id="name"
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
          value={photoUrl}
          onChange={handlePhotoUrlChange}
          className="w-full border-gray-300 border rounded-md px-3 py-2"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
        Register
      </button>
    </form>
    </div>
  );
}

export default Register;
