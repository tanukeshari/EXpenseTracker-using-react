import React, {   useContext } from 'react';
import ExpenseContext from '../../../store/Expense-Context';
import { Container ,Button} from 'react-bootstrap';

function ExpenseTable(props) {
    const expCtx = useContext(ExpenseContext);
    const editExpenseHandler =(id,expense)=>{
        expCtx.setEditExp({id,expense});
        
        expCtx.setEditing(true);
    };

    const deleteExpenseHandler =(id)=>{
        expCtx.deleteExpenses(id);
    }
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
                    <Button onClick={()=>editExpenseHandler(expense.id,expense)}>Edit</Button>
                    <Button onClick={()=>deleteExpenseHandler(expense.id)}>Delete</Button>
                </div>
                ))}
            </div>
    </Container>
    );
}

export default ExpenseTable;