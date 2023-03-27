import { render, screen } from  '@testing-library/react';
import  Greeting  from './Greeting';

 
describe ('Greeting component',()=>{
    test ('render Hello World as a text ', ()=>{
        render(<Greeting/> )

        const helloWorldElement=screen.getByText('hello World !');
        expect (helloWorldElement).toBeInTheDocument();
    })
})






