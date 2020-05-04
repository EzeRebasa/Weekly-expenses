import React, {Fragment} from 'react';

const BudgetControl = ({budget, balance}) => {
    return ( 
        <Fragment>
            <div className="alert alert-primary">
                Budget: $ {budget}
            </div>
            <div className="alert ">
                Balance: $ {balance}
            </div>
        </Fragment>
     );
}
 
export default BudgetControl;