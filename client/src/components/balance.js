import { useSelector } from 'react-redux';
import './expenseTracker.css';
//import './ExpenceTracker.css'


function Balance(){
    const { balance, income, expense } = useSelector((state) => {
        return state.transactionReducer
    })
    return(
        <div className="balance">
        
            <h4 className="current-balance">Current Balance <br/>
            <h2 className="amount">
                {balance}
            </h2>
            </h4>
             
        <div className="income-expense">
        <div className="income">
                Income <br/>
                ${income} 
            </div>

            <div className="expense">
                Expence <br/>
                ${expense}
            </div>
        </div>
            
        </div>
    )
}

export default Balance;