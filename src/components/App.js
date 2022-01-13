import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { RouterProvider, Routes } from './navigation';
import { checkAuth } from '../redux/slices/authSlice';

const App = () => {
    const dispatch = useDispatch();
    const isAuthLoading = useSelector(state => state.auth.isAuthLoading)
    
    useEffect(() => {
       dispatch(checkAuth()) 
    }, [dispatch])
    
    return (
        <RouterProvider>
            <div><h1>Header</h1></div>
            <Routes />
            <div><h1>Footer</h1></div>
        </RouterProvider>
    )
}

export default App;