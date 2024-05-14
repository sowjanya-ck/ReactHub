import { createSlice } from "@reduxjs/toolkit"

const cartSlice = cartSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state,action) => {
            state.Items.push(action.payload);
        },
            removeItems: (state) => {
                state.items.pop();
        },
            clearCart: (state) =>{
                state.items.length =0;
            },
        },
});

export const {addItem,removeItems,clearCart} = cartSlice.actions;
export default cartSlice.reducers;
