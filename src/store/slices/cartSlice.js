import { createSlice } from '@reduxjs/toolkit';

const items = localStorage.getItem('cartItems') !== null ? JSON.parse(localStorage.getItem('cartItems')) : [];
const initialState = {
    isCartOpen: false,
    cartItems: [...items]
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
            
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems.map(item => item)))
        },


        removeItem(state, action) {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems.map(item => item)))
        },


        incrementItem(state, action) {
            state.cartItems = state.cartItems.map(item => {
                if (item.id === action.payload && item.stock > 0) {
                    item.quantity++;
                    item.stock -=1;
                }
                return item;
            });
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems.map(item => item)))

        },
        


        decrementItem(state, action) {
            state.cartItems = state.cartItems.map(item => {
                if (item.id === action.payload) {
                    item.quantity--;
                    item.stock++;
                }
                return item;
            }).filter(item => item.quantity !== 0);
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems.map(item => item)))
        },
        // LocalStorageCart : (state)=>{
        //     localStorage.setItem('cart' , JSON.stringify(state))
        //     // localStorage.setItem('cartItems', JSON.stringify(state.cartItems.map(item => item)))
           
        //  }
        

    }
});


export const { toggleCart, addItem, removeItem, incrementItem, decrementItem} = cartSlice.actions;
export default cartSlice.reducer;