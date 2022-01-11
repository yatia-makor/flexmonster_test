import React from 'react';

import { RouterProvider, Routes } from './navigation';


const App = () => {
    return (
        <RouterProvider>
            <div><h1>Header</h1></div>
            <Routes />
            <div><h1>Footer</h1></div>
        </RouterProvider>
    )
}

export default App;