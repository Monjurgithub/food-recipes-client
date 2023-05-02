import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const SocialIcon = () => {
   const {github, google} = useContext(AuthContext)

    const handleGoogle =() =>
    {
        google()
        .then((result) => {
            const user = result.user;
            console.log(user);
          })
          .catch((error) => {
            const errorMessage = error.message;
          });


    }

    const handleGithub=()=>{
        github()
        .then((result) => {
            const user = result.user;
            console.log(user);
          })
          .catch((error) => {
            const errorMessage = error.message;
          });
        

    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className=' w-2/4 p-4 bg-white shadow-md rounded-md lg:w-1/4'>
      <img onClick={handleGoogle} className='mb-3' src="https://i.ibb.co/k87jp0T/google-btn.png" alt="" />
      <img onClick={handleGithub} src="https://i.ibb.co/WvnKFcF/github-btn.png" alt="" />
    </div>
        </div>
    );
};

export default SocialIcon;