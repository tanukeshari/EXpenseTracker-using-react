import React, {   useContext } from 'react';
import ExpenseContext from '../../../store/Expense-Context';
import { Container } from 'react-bootstrap';

function ExpenseTable(props) {
    const expCtx = useContext(ExpenseContext);
    return (
        <Container className='p-3 my-3  text-white' style={{backgroundColor:'#22709b'}}>
            <h1 style={{ textAlign: "center" }}>Expenses</h1>
            <div>
                {expCtx.expensesData.map((expense, index) => (
                <div
                    className=" d-flex justify-content-around mx-5 p-1 shadow" 
                    key={index}
                >
                    <p >Description : {expense.Description}</p>
                    <p>Amount : Rs.{expense.Amount}</p>
                    <p>Category : {expense.Category}</p>
                </div>
                ))}
            </div>
    </Container>
    );
}

export default ExpenseTable;