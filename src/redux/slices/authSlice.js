import { createSlice } from '@reduxjs/toolkit';

import { history, AppRoutes } from '../../utils';
import { localStorageVariables } from '../../constants'

export const login = (username, password) => async dispatch => {
    dispatch(setAuthIsLoading(true))
    // make a connection login to server

    // if true
    dispatch(loginSuccess({token: '123412dfsdf312dsafasfd3', user: { username: 'yuval', email: 'lox@gmail.com', role: 'ADMIN'}}))
    dispatch(setAuthIsLoading(false))
    localStorage.setItem(localStorageVariables.TOKEN, '123412dfsdf312dsafasfd3');
    history.push(AppRoutes.Panel.path)
}

export const checkAuth = () => async dispatch => {
    dispatch(setAuthIsLoading(true))
    const token = localStorage.getItem(localStorageVariables.TOKEN)
    if (!token) {
        return dispatch(cleanAuthState())
    }
    // make a connection to server validation

    if (token) {
        // IF true login the user
        // alert success dispatch
        dispatch(loginSuccess({ token, user: {username: 'yuval', email: 'lox@gmail.com', role: 'ADMIN'} }))
        history.push(AppRoutes.Panel.path)
    } else {
        // IF false
        // alert error dispatch 
        dispatch(cleanAuthState())
    }
    
}

export const logout = () => async dispatch => {
    dispatch(cleanAuthState())
    localStorage.removeItem(localStorageVariables.TOKEN)
    history.push(AppRoutes.Login.path)
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        user: null,
        isLoggedIn: false,
        isLoading: false,
        isAuthInProcess: false,
        error: null
    },
    reducers: {
        setAuthIsLoading: (state, action) => {
            state.isLoading = action.payload
        },
        loginSuccess: (state, action) => {
            state.isLoading = false
            state.isLoggedIn = true
            state.token = action.payload.token
            state.user = action.payload.user
        },
        loginFailed: (state, action) => {
            state.isLoading = false
            state.error = action.payload.message
        },
        cleanAuthState: (state, action) => {
            state.token = null
            state.user = null
            state.isLoggedIn = false
            state.isLoading = false
            state.error = null
        }
    }
});

export const {
    setAuthIsLoading,
    loginSuccess,
    loginFailed,
    cleanAuthState
} = authSlice.actions

export default authSlice.reducer

