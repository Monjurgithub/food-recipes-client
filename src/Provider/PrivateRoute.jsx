import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = () => {
    const { user, loading } = useContext(AuthContext);
    let location = useLocation();
    if(loading)
    {
        return (
            
      <span>Loading...</span>
   
        )
    }
    if (user) {
        return children;
    }
    return  <Navigate to='/login' state={{ from: location }}></Navigate>
};

export default PrivateRoute;