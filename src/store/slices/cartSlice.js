import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    isCartOpen: false,
    cartItems: []
};


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {


        toggleCart(state, action) {
            state.isCartOpen = action.payload;
        },


        addItem(state, action) {
            const newItemId = action.payload.id;
            const existingItem = state.cartItems.find(item => item.id === newItemId);

            if (existingItem && existingItem.stock > 0) {
                existingItem.stock -= 1;
                existingItem.quantity++;

            } else if(!existingItem){
                state.cartItems.push(action.payload);
            }
        },


        removeItem(state, action) {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        },


        incrementItem(state, action) {
            state.cartItems = state.cartItems.map(item => {
                if (item.id === action.payload && item.stock > 0) {
                    item.quantity++;
                    item.stock -=1;
                }
                return item;
            });
        },


        decrementItem(state, action) {
            state.cartItems = state.cartItems.map(item => {
                if (item.id === action.payload) {
                    item.quantity--;
                    item.stock++;
                }
                return item;
            }).filter(item => item.quantity !== 0);
        }

    }
});


export const { toggleCart, addItem, removeItem, incrementItem, decrementItem } = cartSlice.actions;
export default cartSlice.reducer;