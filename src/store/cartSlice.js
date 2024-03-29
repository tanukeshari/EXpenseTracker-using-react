import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name:'cart',
    initialState :{
        items: [],
        totalQuantity: 0,
    },
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
          },

        addItemToCart(state,action){
            const newItem = action.payload;  //it is object ,since we passed object with id,price,title
            console.log('payload', newItem)
            const existingItem = state.items.find(item => item.id === newItem.id); //searching for existing item with new item id equals to all item ids
            
            if(!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            }
            state.totalQuantity++;
        },
        

        removeItemFromCart(state,action){
            const id = action.payload;
            //console.log(id)
            const existingItem = state.items.find((item) => item.id === id);
            
            
            if(existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
        }
        state.totalQuantity--;
    }
}
});

export const cartActions = cartSlice.actions;

export default cartSlice;








