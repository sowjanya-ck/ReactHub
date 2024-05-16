import { createSlice, current } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: ["Burger"],
    },
    reducers: {
        addItem: (state,action) => {
            state.items.push(action.payload);
        },
            removeItems: (state, action) => {
                state.items.pop();
        },
            clearCart: (state) =>{
                state.items.length=0;
            },
        },
});



export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;