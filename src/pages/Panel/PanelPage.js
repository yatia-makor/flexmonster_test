import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { logout } from '../../redux/slices/authSlice'
import { history } from '../../utils'

import DrawerComponent from './components/Drawer/Drawer'

const PanelPage = () => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth)
    return (
        <div>
            <DrawerComponent />
            <h1>Panel page</h1>
            <h3 onClick={() => dispatch(logout())}>Logout</h3>
            <h4>{JSON.stringify(auth)}</h4>
            <h5 onClick={() => history.push('/')}>Go To Login</h5>
        </div>
    )
}

export default PanelPage;