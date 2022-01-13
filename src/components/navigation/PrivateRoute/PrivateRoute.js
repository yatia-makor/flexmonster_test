import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

import { AppRoutes } from '../../../utils'

const PrivateRoute = ({ exact, path, component: Component }) => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

    return (
        <Route exact={exact} path={path}>
            { isLoggedIn ?
                <Component /> :
                <Redirect to={AppRoutes.Default.path} />
            }
        </Route>
    )
}

export default PrivateRoute