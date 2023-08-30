import { configureStore } from "@reduxjs/toolkit";
import ModeSlice from "./features/ModeSlice";

const store = configureStore({
    reducer: {
        theme: ModeSlice
    }
})

export default store