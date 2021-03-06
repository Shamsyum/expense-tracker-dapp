import { useSelector } from 'react-redux';
import './expenseTracker.css'

//import './HistoryItem.css';
import HistoryItem from './historyItem';


function History(){
    
    const history = useSelector((state) => {
        return state.transactionReducer.history
    });

    // const adjustTransection = (value, type) => {
    //     if(type === 'income'){
    //         myState.balance[1](myState.balance[0] - Number(value));
    //         myState.income[1](myState.income[0] - Number(value)); 
    //     }else if(type === 'expense'){
    //         myState.balance[1](myState.balance[0] + Number(value));
    //         myState.expence[1](myState.expence[0] - Number(value));
    //     }
    //     console.log("transection adjust");
    // }
    // const deleteTransection = (id, value, type) => {
        
    //     let newHistory = myState.history[0].filter(history =>{
    //         return history.id !== id
    //     });
    //     myState.history[1](newHistory);
        
    //     adjustTransection(value, type);
    //     console.log("transection delete")
    // }

    return(
        <div className="history">
            
            <h4>Transection History</h4>
            
            {history.map(history =>
            <HistoryItem history={history} />  
            )}      
        </div>
    )
}

export default History;