import React, { createContext, useEffect, useState } from 'react'
import axios from "axios";

const ExpenseContext = createContext();

export const ExpenseContextProvider = (props) => {
    const [expensesData, setExpensesData] = useState([]);
    const [editing,setEditing] = useState(false);
    const [editExp, setEditExp] = useState([]);
    

    useEffect(() => {
    getExpensesData()
    }, []);

    async function getExpensesData() {
          const res = await axios.get('https://expensetracker-28d72-default-rtdb.firebaseio.com/expenses.json');
          console.log( res)
          setExpensesData([])
            for (let key in res.data) {
              setExpensesData((prev)=>[...prev ,{id:key,...res.data[key]}])
          }
      }

    async function postExpensesData(expense){
        const res = await axios.post('https://expensetracker-28d72-default-rtdb.firebaseio.com/expenses.json',expense);
        console.log(res);
        getExpensesData();
    }

    async function deleteExpense(id){
        const res= await axios.delete(`https://expensetracker-28d72-default-rtdb.firebaseio.com/expenses/${id}.json`);
        console.log(res);
        getExpensesData();

    }

    async function editExpenses( id,expense) {
        const res = await axios.put(`https://expensetracker-28d72-default-rtdb.firebaseio.com/expenses/${id}.json`, expense);
        getExpensesData();
        console.log(id,expense)
        
    }

    const expenseContextValue = {
        expensesData: expensesData,
        postExpenses: postExpensesData,
        deleteExpenses : deleteExpense,
        editExp:editExp,
        setEditExp:setEditExp,
        editing:editing,
        setEditing:setEditing,
        editExpenses:editExpenses

    }

    return (
        <ExpenseContext.Provider value={expenseContextValue}>
            {props.children}
        </ExpenseContext.Provider>
    );
};

export default ExpenseContext;