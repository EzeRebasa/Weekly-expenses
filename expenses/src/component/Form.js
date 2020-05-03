import React, {useState} from 'react';

const Form = () => {

    const [ name, setName ] = useState(''); 
    const [ quantity, setQuantity ] = useState(0);

    const addExpense = e => {
        e.preventDefault();

        // To validate

        // Build expense

        // Pass the expense to the main component

        // Reset form
    }
    return ( 
        <form>
            <h2> Add your expences here </h2>

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
                    onChange={ e => setQuantity(parseInt(e.target.value, 10))}
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
 
export default Form;