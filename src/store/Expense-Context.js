import React, { createContext, useEffect, useState } from 'react'
import axios from "axios";

const ExpenseContext = createContext();

export const ExpenseContextProvider = (props) => {
    const [expensesData, setExpensesData] = useState([]);

    useEffect(() => {
    getExpensesData()
    }, []);

    async function getExpensesData() {
          const res = await axios.get('https://reacthttp-37efe-default-rtdb.firebaseio.com/expenses.json');
          console.log('get', res)
          setExpensesData([])
            for (let expense in res.data) {
              setExpensesData((prev)=>[...prev , res.data[expense]])
          }
      }

    async function postExpensesData(expense){
        const res = await axios.post('https://reacthttp-37efe-default-rtdb.firebaseio.com/expenses.json',expense);
        console.log(res);
        getExpensesData();
    }

    async function deleteExpense(_id){
        const res= await axios.delete(`https://reacthttp-37efe-default-rtdb.firebaseio.com/expenses/${_id}`);
        console.log(res);
        //getExpensesData();

    }

    const expenseContextValue = {
        expensesData: expensesData,
        postExpenses: postExpensesData,
        deleteExpenses : deleteExpense,
    }

    return (
        <ExpenseContext.Provider value={expenseContextValue}>
            {props.children}
        </ExpenseContext.Provider>
    );
};

export default ExpenseContext;