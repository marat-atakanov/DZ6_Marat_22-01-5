import {configureStore} from "@reduxjs/toolkit";
import productsInCartReducer from "./productsInCartReducer";

export const store = configureStore({
        reducer: {
            productsInCart: productsInCartReducer
        }
    }
)
