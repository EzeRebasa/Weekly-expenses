export const checkBudget = (budget, balance) => {
    let cssChange;

    if( (budget / 4) > balance ){
        cssChange = 'alert alert-danger';
    }else if( (budget / 2) > balance ) {
        cssChange = 'alert alert-warning';
    }else{
        cssChange='alert alert-success';
    }
    return cssChange;
}