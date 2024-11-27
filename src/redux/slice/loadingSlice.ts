import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface LoadPageType {
    isLoading: boolean;
    isFirstLoad: boolean;
}

const initialState: LoadPageType = {
    isLoading: true,
    isFirstLoad: true
}

export const loadingSlice = createSlice({
    name: 'loadingSlice',
    initialState,
    reducers: {
        setIsLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload
        },
        setIsFirstLoad(state, action: PayloadAction<boolean>) {
            state.isFirstLoad = action.payload
        },
    }
})

export const { setIsFirstLoad, setIsLoading } = loadingSlice.actions
export default loadingSlice.reducer