import React from 'react';
import { Router } from 'react-router-dom';

import { history } from '../../../utils';

const RouterProvider = ({children}) => {
    return (
        <Router history={history}>
            {children}
        </Router>
    )
}

export default RouterProvider