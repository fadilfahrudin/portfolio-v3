import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import burgerMenuReducer from "./slice/burgerMenuSlice"
export const store = configureStore({
    reducer: {
        // add reducers
        burgerMenu: burgerMenuReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>() 