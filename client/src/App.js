import './App.css';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { initWeb3 } from './store/transactionSlice';
//import PetList from './components/petList.js';
import Balance from './components/balance';
import History from './components/history';
import AddTransaction from './components/addTransaction'; 
import './components/expenseTracker.css';


function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(initWeb3());
  });

  setInterval(function(){
    dispatch(initWeb3());
  }, 2000);

  return (
    <div>
    <div className="ExpenceTracker">
      <h5>Expence Tracker By Shams </h5>
      
      <Balance />
      <br/>
      <History />
      <br/>
      <AddTransaction />
    </div>
    <div style={{textAlign: 'center'}}> Github: <a href="https://github.com/Shamsyum">@shamsyum</a> </div>
    </div>
  );
}

export default App;
