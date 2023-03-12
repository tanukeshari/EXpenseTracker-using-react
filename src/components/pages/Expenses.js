import React, { Fragment, useState  } from 'react';
import ExpenseTable from './Expenses/ExpenseTable';
import ExpenseForm from './Expenses/ExpenseForm';

function Expenses() {
    const [expensesData,setExpensesData] =useState([]);
    console.log(expensesData)
    return (
        <Fragment>
            <section>
                <ExpenseForm expensesData={expensesData} setExpensesData={setExpensesData} />
                <ExpenseTable expensesData={expensesData} />
            </section>
        </Fragment>
    );
}

export default Expenses;