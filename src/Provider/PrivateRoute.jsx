import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../sheared/LoadingSpinner';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    let location = useLocation();
    if(loading)
    {
        return <LoadingSpinner></LoadingSpinner>
   

    }
    if (user) {
        return children;
    }
    return  <Navigate to='/login' state={{ from: location }}></Navigate>
};

export default PrivateRoute;