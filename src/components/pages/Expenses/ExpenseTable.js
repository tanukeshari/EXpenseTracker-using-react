import React, {   useEffect } from 'react';
//import ExpenseContext from '../../store/Expense-Context';
import { Container ,Button} from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { deleteExpanse, getExpenses } from "./ExpenseRequests";

function ExpenseTable(props) {
    //const expCtx = useContext(ExpenseContext);
    const dispatch = useDispatch();
    const expenses = useSelector(state => state.expenses.expenses);
    const total = useSelector(state=>state.expenses.total)

    useEffect(() => {
        getExpenses(dispatch);
      }, [dispatch]);

    const editExpenseHandler =(id,expense)=>{
        props.setEditExp({id,expense});
        
        props.setUpdate(true);
    };

    // const deleteExpenseHandler =(id)=>{
    //     expCtx.deleteExpenses(id);
    //     alert('expense deleted')
    // }
    return (
        <Container className='p-3 my-3  text-white' style={{backgroundColor:'#22709b'}}>
            <h1 style={{ textAlign: "center" }}>Expenses</h1>
            <div className=" d-flex justify-content-around mx-5 p-1 shadow" style={{backgroundColor:'#99b2bf'}}>
                <h3>Total Amount Spent:{total}</h3>
                {total > 10000 && (
                <Button variant='success' style={{margin:'1rem'}}>Unlock Premium</Button>
                )}
            </div>
            
            <div >
                {expenses.map((expense, index) => (
                <div
                    className=" d-flex justify-content-around mx-5 p-1 shadow" 
                    key={index}
                >
                    <p >Description : {expense.Description}</p>
                    <p>Amount : Rs.{expense.Amount}</p>
                    <p>Category : {expense.Category}</p>
                    <Button style={{margin:'1rem'}} onClick={()=>editExpenseHandler(expense.id,expense)}>Edit</Button>
                    <Button style={{margin:'1rem'}}  onClick={()=>deleteExpanse(expense.id,dispatch)}>Delete</Button>
                </div>
                ))}
            </div>
    </Container>
    );
}

export default ExpenseTable;