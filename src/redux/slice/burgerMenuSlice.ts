import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface BurgerMenuType {
    isBurgerVisible: boolean;
}

const initialState: BurgerMenuType = {
    isBurgerVisible: false,
}


export const burgerMenuSlice = createSlice({
    name: 'burgerMenu',
    initialState,
    reducers: {
        setBurgerVisible(state, action: PayloadAction<boolean>) {
            state.isBurgerVisible = action.payload
        }
    }
})

export const { setBurgerVisible } = burgerMenuSlice.actions
export default burgerMenuSlice.reducer