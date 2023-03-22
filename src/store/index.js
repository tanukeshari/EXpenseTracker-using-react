import { createStoreHook } from 'react-redux';
import { createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit';
// import authSlice from './AuthSlicer';
// import expensesSlice from './ExpenseSlicer';

const initiaState = { counter : 0 , showCounter: true };
const counterReducer = (state={ counter :0 }, action) =>{
    if (action.type === 'increment') {
        return{

counter : state.counter +1
        }
      }
      
      if (action.type=== 'decrement'){
 return {
 
    counter: state.counter -1 ,

 };
}
return state;
};
 const store = createStore(counterReducer);

 export default store;