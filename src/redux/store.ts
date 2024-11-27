import { configureStore } from "@reduxjs/toolkit";
import burgerMenuReducer from "./slice/burgerMenuSlice"
import loadingReducer from "./slice/loadingSlice"
export const store = configureStore({
    reducer: {
        // add reducers
        burgerMenu: burgerMenuReducer,
        loadingSlice: loadingReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch