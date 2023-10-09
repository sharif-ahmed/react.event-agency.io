/* eslint-disable react/prop-types */

import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './../providers/AuthProvider';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <div className='flex items-center justify-center h-screen'>
                <span className="loading loading-bars loading-lg"></span>
            </div>
        )
    }

    if (user) {
        return children;
    }

    return (
        <Navigate to={"/login"}></Navigate>
    );
};

export default PrivateRoute;