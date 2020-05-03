import React, { Fragment, useState } from 'react';
import Error from './Error';

const Question = ({setBudget, setBalance, updateQuestion}) => {

    // State define
    const [ quantity, setQuantity ] = useState(0);
    const [ error, setError ] = useState(false);
    // Function that read the budget
    const defineBudget = event => {
        setQuantity( parseInt(event.target.value, 10));
    }

    // Submit to define the budget
    const addBudget = event => {
        event.preventDefault();

        //Validate
        if(quantity < 1 || isNaN( quantity )){
            setError(true);
            return;
        }
        // If validation is passed
        setError(false);
        setBudget(quantity);
        setBalance(quantity);
        updateQuestion(false);

    }

    return (  
        <Fragment>
            <h2> Insert your budget </h2>
            {error?  <Error message="Incorrect budget"/> : null }
            <form 
                onSubmit={addBudget}
            >    
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Insert your budget"
                    onChange={defineBudget}
                />
                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Define budget"
                />
            </form>
        </Fragment>


      );
}
 
export default Question;