import { configureStore } from "@reduxjs/toolkit";
import ModeSlice from "./features/ModeSlice";
import favoritesReducer from "./features/AddFavorites";

const store = configureStore({
    reducer: {
        theme: ModeSlice,
        favorites: favoritesReducer,
    }
})

export default store