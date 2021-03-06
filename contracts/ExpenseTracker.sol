//pragma solidity 0.5.16;
pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;
contract ExpenseTracker {
        
        int public balance;
        int public income;
        int public expence;
        
        historyData[] public history;
        
        struct historyData { 
            string name;
            int value;
            string typee;
        }

        function addIncome(string memory description, int amount) public returns(bool){
            balance += amount;
            income += amount;
            historyData memory myData = historyData(description, amount, "income");
            history.push(myData);
            return true;
        }
        
        function addExpense(string memory description, int amount) public returns(bool){
            balance -= amount;
            expence += amount;
            historyData memory myData = historyData(description, amount, "expense");
            history.push(myData);
            return true;
        }
        
        function getHistory() public view returns(historyData[] memory){
            return history;
        }
}

