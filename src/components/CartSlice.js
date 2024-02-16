import { createSlice } from "@reduxjs/toolkit";
import { action } from "commander";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addCartItem:(state,action)=>{
            state.items.push(action.payload);
            // console.log(state.items)
        },
        removeCartItem: (state, action) => {
            state.items.pop()
        },        
        clearCart:(state)=>{
            state.items=[];
        }
    }
})

export const {addCartItem,clearCart,removeCartItem} = cartSlice.actions;
export default cartSlice.reducer 