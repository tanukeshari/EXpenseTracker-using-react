import {useState} from 'react';


const  Greeting =()=>{

    const [changedText, setchangeText] =  useState(false);

    const  changeTextHandler =() =>{
    
    setchangeText(true);
    }

    return (
        <div>
            <h1>Hello world</h1>
           { !changedText && <p>Its  good see you </p>}
{changedText && <p>Changed!</p>}
            <button onClick={changeTextHandler }>change Text!</button>
        </div>
    )
};

export default Greeting;
 