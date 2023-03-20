import React, { Fragment, useState  } from 'react';
import ExpenseTable from './Expenses/ExpenseTable';
import ExpenseForm from './Expenses/ExpenseForm';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';

function Expenses() {
    //const [expensesData,setExpensesData] =useState([]);
    //const total = useSelector(state=> state.expenses.total);
    const [editExp, setEditExp] = useState([]); //initially editExpense is empty array
    const [update, setUpdate] = useState(false); //initialy updating state is false
    //console.log(editExp)
    return (
        <Fragment>
            <section>
            
                <ExpenseForm  editExp={editExp} update={update} setUpdate= {setUpdate}/>
                <ExpenseTable setEditExp={setEditExp} setUpdate= {setUpdate} />
            </section>
        </Fragment>
    );
}

export default Expenses;