import React ,{useEffect,useRef} from 'react';
import {Form, Button,Row,Col, Container} from 'react-bootstrap';
//import ExpenseContext from '../../store/Expense-Context';
import { useDispatch } from 'react-redux';
import { editExpense, postExpenses } from './ExpenseRequests';


function ExpenseForm(props) {
    //const expCtx=useContext(ExpenseContext);
    const dispatch = useDispatch();
    const amountInputRef=useRef();
    const descriptionInputRef=useRef();
    const categoryInputRef= useRef();

    const submitHandler= ()=>{
        //event.preventDefault();
        const expenseData = {
            Amount:amountInputRef.current.value,
            Description:descriptionInputRef.current.value,
            Category : categoryInputRef.current.value
        };
        //we get expenses data
        //can save in an array
        console.log(expenseData)
        //expCtx.postExpenses(expenseData);
        postExpenses(expenseData,dispatch);
        //setting to null values after posting expense
        amountInputRef.current.value = '';
        descriptionInputRef.current.value = '';
        categoryInputRef.current.value= ''; 

    };

    const editHandler = () => {
        //expCtx.setEditing(false);
        
        const expenseData = {
            Amount: amountInputRef.current.value,
            Description: descriptionInputRef.current.value,
            Category: categoryInputRef.current.value,
          };
      
          //expCtx.editExpenses(expCtx.editExp.id,expenseData);
          editExpense(props.editExp.id,expenseData,dispatch);
          alert('expense successfully edited')
          amountInputRef.current.value = '';
          descriptionInputRef.current.value = '';
          categoryInputRef.current.value= ''; 
         
    }

    useEffect(() => {
        amountInputRef.current.value = props.editExp.expense?.Amount || '';
        descriptionInputRef.current.value = props.editExp.expense?.Description || '';
        categoryInputRef.current.value= props.editExp.expense?.Category || '';
      }, [props.editExp]);
    return (
        <Container className='p-3 my-3  text-white' style={{backgroundColor:'#22709b'}}>
            
            <Form  id='expenses' style={{backgroundColor:'#22709b'}} >
                
                <Row>
                    <Col className='form-control justify content' style={{margin:'1rem'}}>
                        <textarea style={{height: '25px' }}
                        type="text"
                        placeholder="Description of Expense"
                        name="Description"
                        ref={descriptionInputRef}
                        required>
                    </textarea>
                    </Col>
                    <Col className='form-control' style={{margin:'1rem'}}>
                        <input 
                        type="number"
                        placeholder="Amount Spent"
                        name="Amount"
                        ref={amountInputRef}
                        required>
                        </input>
                    </Col>
                
                <Col className='form-control' style={{margin:'1rem'}}>
                    <select
                    ref={categoryInputRef}
                    name="Category"
                    required>
                        <option>Food</option>
                        <option>Petrol</option>
                        <option>Clothes</option>
                        <option>other..</option>
                    </select>
                </Col>
                
                
                <Col >
                {!props.update && <Button style={{margin:'1rem'}} onClick={()=>submitHandler()} type='submit' variant="success" >ADD</Button>}
                {props.update && <Button  style={{margin:'1rem'}} onClick={()=>editHandler()}>Update</Button>}
                </Col>
                </Row>
            </Form>
            
        </Container>
    );
}

export default ExpenseForm;