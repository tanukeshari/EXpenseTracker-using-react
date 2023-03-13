import React, { Fragment, useState  } from 'react';
import ExpenseTable from './Expenses/ExpenseTable';
import ExpenseForm from './Expenses/ExpenseForm';

function Expenses() {
    const [expensesData,setExpensesData] =useState([]);
    console.log(expensesData)
    return (
        <Fragment>
            <section>
                <ExpenseForm  />
                <ExpenseTable />
            </section>
        </Fragment>
    );
}

export default Expenses;