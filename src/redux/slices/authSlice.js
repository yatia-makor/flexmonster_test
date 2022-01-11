import { createSlice } from '@reduxjs/toolkit';
import { history, AppRoutes } from '../../utils';

export const login = (username, password) => async dispatch => {
    dispatch(setAuthIsLoading(true))
    // make a connection login to server

    // if true
    dispatch(loginSuccess({token: '123412dfsdf312dsafasfd3', user: { username: 'yuval', email: 'lox@gmail.com', role: 'ADMIN'}}))
    history.push(AppRoutes.Panel.path)
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        user: null,
        isLoggedIn: false,
        isLoading: false,
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
        logout: (state, action) => {
            state.token = undefined
            state.user = undefined
            state.isLoggedIn = false
        }
    }
});

export const {
    setAuthIsLoading,
    loginSuccess,
    loginFailed,
    logout
} = authSlice.actions

export default authSlice.reducer

