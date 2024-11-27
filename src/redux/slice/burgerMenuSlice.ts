import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface BurgerMenuType {
    isBurgerVisible: boolean;
    isBurgerOpen: boolean
}

const initialState: BurgerMenuType = {
    isBurgerVisible: false,
    isBurgerOpen: false
}


export const burgerMenuSlice = createSlice({
    name: 'burgerMenu',
    initialState,
    reducers: {
        setBurgerVisible(state, action: PayloadAction<boolean>) {
            state.isBurgerVisible = action.payload
        },
        setBurgerOpen(state, action: PayloadAction<boolean>) {
            state.isBurgerOpen = action.payload
        }
    }
})

export const { setBurgerVisible, setBurgerOpen } = burgerMenuSlice.actions
export default burgerMenuSlice.reducer