import React ,{Fragment,useContext,useRef} from 'react';
import {Form, Button,Row,Col, Container} from 'react-bootstrap';
import ExpenseContext from '../../../store/Expense-Context';

function ExpenseForm(props) {
    const expCtx=useContext(ExpenseContext);
    const amountInputRef=useRef();
    const descriptionInputRef=useRef();
    const categoryInputRef= useRef();

    const submitHandler= (event)=>{
        event.preventDefault();
        const expenseData = {
            Amount:amountInputRef.current.value,
            Description:descriptionInputRef.current.value,
            Category : categoryInputRef.current.value
        };
        //we get expenses data
        //can save in an array
        console.log(expenseData)
        expCtx.postExpenses(expenseData);
    }
    return (
        <Container className='p-3 my-3  text-white' style={{backgroundColor:'#22709b'}}>
            
            <Form onSubmit={submitHandler} id='expenses'>
                
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
                <Button type='submit' variant="success">Add New Expense

                </Button>
                </Col>
                </Row>
            </Form>
            
        </Container>
    );
}

export default ExpenseForm;