import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const cartFromLocalStorage = typeof localStorage !== 'undefined' && localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')!): [];

interface cartState {
    showCart: boolean;
    cartItems: any[];
};

const initialState: cartState = {
    showCart: false,
    cartItems: cartFromLocalStorage,
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggleCart(state) {
            state.showCart = !state.showCart;
        },
        addItemToCart: (state, action: PayloadAction<any>) => {
            const newItem = action.payload;
            const existingItem = state.cartItems.find(item =>  item.id === newItem.id);
            if (existingItem) {
                existingItem.quantity = newItem.quantity;
            }
            else {
                state.cartItems.push(newItem);
            }
            localStorage.setItem('cart', JSON.stringify(state.cartItems));
        },
        removeItemFromCart: (state, action: PayloadAction<{id: string}>) => {
            const itemId = action.payload.id;
            const updatedState = state.cartItems.filter((item) => item.id != itemId);
            state.cartItems.splice(0, state.cartItems.length, ...updatedState);

            localStorage.setItem('cart', JSON.stringify(state.cartItems));
        }
    },

});

export const { toggleCart, addItemToCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;