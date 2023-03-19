import React ,{useEffect,useContext,useRef} from 'react';
import {Form, Button,Row,Col, Container} from 'react-bootstrap';
import ExpenseContext from '../../../store/Expense-Context';

function ExpenseForm(props) {
    const expCtx=useContext(ExpenseContext);
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
        expCtx.postExpenses(expenseData);
        //setting to null values after posting expense
        amountInputRef.current.value = '';
        descriptionInputRef.current.value = '';
        categoryInputRef.current.value= ''; 

    };

    const editHandler = () => {
        expCtx.setEditing(false);
        
        const expenseData = {
            Amount: amountInputRef.current.value,
            Description: descriptionInputRef.current.value,
            Category: categoryInputRef.current.value,
          };
      
          expCtx.editExpenses(expCtx.editExp.id,expenseData);
          
          amountInputRef.current.value = '';
          descriptionInputRef.current.value = '';
          categoryInputRef.current.value= ''; 
         
    }

    useEffect(() => {
        amountInputRef.current.value = expCtx.editExp.expense?.Amount || '';
        descriptionInputRef.current.value = expCtx.editExp.expense?.Description || '';
        categoryInputRef.current.value= expCtx.editExp.expense?.Category || '';
      }, [expCtx.editExp]);
    return (
        <Container className='p-3 my-3  text-white' style={{backgroundColor:'#22709b'}}>
            
            <Form  id='expenses'>
                
                <Row>
                    <Col className='form-control justify content' >
                        <textarea style={{height: '25px' }}
                        type="text"
                        placeholder="Description of Expense"
                        name="Description"
                        ref={descriptionInputRef}
                        required>
                    </textarea>
                    </Col>
                    <Col className='form-control'>
                        <input 
                        type="number"
                        placeholder="Amount Spent"
                        name="Amount"
                        ref={amountInputRef}
                        required>
                        </input>
                    </Col>
                
                <Col className='form-control'>
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
                {!expCtx.editing && <Button onClick={()=>submitHandler()} type='submit' variant="success" >ADD</Button>}
                {expCtx.editing && <Button onClick={()=>editHandler()}>Update</Button>}
                </Col>
                </Row>
            </Form>
            
        </Container>
    );
}

export default ExpenseForm;