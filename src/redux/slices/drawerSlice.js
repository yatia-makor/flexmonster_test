import { createSlice } from "@reduxjs/toolkit";

export const drawerSlice = createSlice({
    name: 'drawer',
    initialState: {
        isMobileDrawerOpen: false
    },
    reducers: {
        toggleMobileDrawer: (state, action) => {
            state.isMobileDrawerOpen = !state.isMobileDrawerOpen
        }
    }
})

export const {
    toggleMobileDrawer
} = drawerSlice.actions

export default drawerSlice.reducer