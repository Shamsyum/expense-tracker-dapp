import React, {useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import GlobalContext from './GlobalContext';
import { initWeb3, addIncome, addExpense} from '../store/transactionSlice';
import './expenseTracker.css'

function AddTransaction(){

    const dispatch = useDispatch();

    const description = useRef();
    const amount = useRef();

    function addIncomee(){ 
        if(amount.current.value < 1 || description.current.value == null){
            alert("Incorrect Value or Description")
        }else{
        dispatch(addIncome({description: description.current.value, amount: amount.current.value}));
    }
}
    function addExpence(){
        if(amount.current.value < 1 || description.current.value == null){
            alert("Incorrect Value or Description")
        }else{
    
            dispatch(addExpense({description: description.current.value, amount: Number(amount.current.value)}));
            
        }
        }

    return(
        <div className="add-transection">
            <h4>Add Transection</h4>
            
            Description:
            <br/>
            <input type="text" ref={description} />
            <br/>
            Amount:
            <br/>
            <input type="number" ref={amount} />
            <br/>
            <br/>
            <button onClick={addIncomee}>Add Income</button>
            <button onClick={addExpence}>Add Expence</button>
            <br/>
            <br/>
        </div>
    );
}
    

export default AddTransaction;
