import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/slices/authSlice';

const Login = () => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    return (
        <div>
            <h3 onClick={() => dispatch(login())}>Click me to login</h3>
            <h1>{JSON.stringify(auth)}</h1>
        </div>
    )
}

export default Login;