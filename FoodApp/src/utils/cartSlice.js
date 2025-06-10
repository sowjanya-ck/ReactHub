import { createSlice, current } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state,action) => {
            state.items.push(action.payload);
        },
            removeItems: (state, action) => {
                state.items.pop();
        },
            clearCart: (state) =>{
                // we cant DO LIKE STATE = [] because it will not work in redux toolkit
                //THIS WONT CHANGE THE ORIGINAL STATE
                state.items.length=0;
            },
        },
});



export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;