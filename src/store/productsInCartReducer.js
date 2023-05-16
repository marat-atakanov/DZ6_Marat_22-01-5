import {createSlice} from "@reduxjs/toolkit";
import {nanoid} from "@reduxjs/toolkit";

const initialState = {
    productsAmount: 0,
    products: []
}

const productsInCartSlice = createSlice({
    name: "productsInCart",
    initialState: initialState,
    reducers: {
        addProduct: (state, action) => {
            state.productsAmount = state.productsAmount + 1;
            state.products.push({
                product: action.payload,
                id: nanoid()
            })
        }
        // deleteProduct: (state, action) => {
        //     state.productsAmount = state.productsAmount - 1;
        //     state.products.filter(product => product.id !== action.payload.id)
        // }
    }
})

export const {addProduct, deleteProduct} = productsInCartSlice.actions
export default productsInCartSlice.reducer