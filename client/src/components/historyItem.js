import React from 'react';
import './expenseTracker.css'


function HistoryItem({history}){
   
    return(
            <div className={`${history.type === "income" ? "income-item" : "expense-item"}`}>
                <div className="history-name">
                    {history.name}
                </div>
                <div className="history-value">
                    
                 {`$${history.value}`}
                    
                </div>
               <br/>
               {/* <button className="btn" onClick={()=> {deleteTransection(history.id, history.value, history.type)}}>{"❌"}</button> */}
           </div>
    )
}

export default HistoryItem;