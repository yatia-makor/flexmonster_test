import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { RouterProvider, Routes } from './navigation';
import { checkAuth } from '../redux/slices/authSlice';

import { PanelWrapper } from './layout';

const App = () => {
    const dispatch = useDispatch();
    const isAuthLoading = useSelector(state => state.auth.isAuthLoading)
    
    useEffect(() => {
       dispatch(checkAuth()) 
    }, [dispatch])
    
    return (
        <RouterProvider>
            <PanelWrapper>
                <Routes />
            </PanelWrapper>
        </RouterProvider>
    )
}

export default App;