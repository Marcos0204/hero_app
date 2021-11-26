import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import {  Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';


export const PrivateRoute = ({children}) => {
    const { user } =useContext(AuthContext)
    console.log(user)
    return user.logged ? (
        children
    ) : <Navigate to='/login' />
}

