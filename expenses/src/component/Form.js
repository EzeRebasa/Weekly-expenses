import React, {useState} from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Error from './Error';


const Form = ({setExpense, setCreateExpense}) => {

    const [ name, setName ] = useState(''); 
    const [ quantity, setQuantity ] = useState(0);
    const [ error, setError ] = useState(false); 

    // When the user introduces an expense
    const addExpense = e => {
        e.preventDefault();

        // To validate
        if(quantity < 1 || isNaN( quantity ) || name.trim() === '') {
         
           setError(true);
           return; 
        }

        setError(false);
        // Build expense
        const expense = {
            name,
            quantity,
            id: shortid.generate()
        }
        // Pass the expense to the main component
        setExpense(expense);
        setCreateExpense(true);

        // Reset form
        setName('');
        setQuantity(0);

    }
    return ( 
        <form
            onSubmit={addExpense}
        >
            <h2> Add your expences here </h2>
            { error ? <Error message="Both fields are obligatories or Incorrect Budget"/> : null }
            <div className="field">

                <label> Expense Name </label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ex. Transport"
                    value={name}
                    onChange = { e => setName(e.target.value)}
                />
            </div>

            <div className="field">
                <label> Expense quantity </label>
                <input 
                    type="nnumber"
                    className="u-full-width"
                    placeholder="Ex. 300"
                    value={quantity}
                    onChange={ e => setQuantity(e.target.value,10)}
                />
            </div>

            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Add expense"
            />
        </form>
     );
}

Form.propTypes = {
    setExpense: PropTypes.func.isRequired,
    setCreateExpense: PropTypes.func.isRequired
}

 
export default Form;