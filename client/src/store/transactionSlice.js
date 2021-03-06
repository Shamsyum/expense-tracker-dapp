import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ExpenseTracker from '../contracts/ExpenseTracker.json';
import Web3 from "web3";

export const initWeb3 = createAsyncThunk(
    "InitWeb3",
    async(a,thunkAPI)=>{
        console.log("in init web3 = ", a);
        console.log("in init web3 = ", thunkAPI);
        console.log("in init web3 = ", thunkAPI.dispatch);
        thunkAPI.getState()
        try {
            if(Web3.givenProvider){
                const web3 = new Web3 (Web3.givenProvider);
                //web3.eth
                await Web3.givenProvider.enable();

                const networkId = await web3.eth.net.getId();
                const network = ExpenseTracker.networks[networkId];
                const contract = new web3.eth.Contract(ExpenseTracker.abi,network.address);
                const addresses = await web3.eth.getAccounts();
                const balance = await contract.methods.balance().call();
                const income = await contract.methods.income().call();
                const expense = await contract.methods.expence().call();
                const history = await contract.methods.getHistory().call();
                console.log("balance yes yes = ",balance);
                console.log("my history yes yes = ", history);
                console.log("addresss = ",addresses);
                return {
                    web3, 
                    contract: contract,
                    address: addresses[0],
                    balance: balance,
                    income: income,
                    expense: expense,
                    history: history
                };
            }
            else {
                console.log("Error in loading web3");
            }
        }
        catch(error){
            console.log("Error in loading Blockchain = ",error);
        }
        
    }
)

export const addIncome = createAsyncThunk(
    "addIncome",
    async(input,thunkAPI)=>{
        console.log("in addIncome input = ", input);
        console.log("in addIncom thunkAPI = ", thunkAPI)
        console.log("in adopt pet s = ", thunkAPI.getState());
        const contract = thunkAPI.getState().transactionReducer.contract;
        const address = thunkAPI.getState().transactionReducer.address;

        const result = await contract.methods.addIncome(input.description, input.amount).send({ from: address });
        console.log("after adopt result = ", result);

        // return {
        //     adopterAddress: result.from,
        //     input: input
        // }
        
    }
)

export const addExpense = createAsyncThunk(
    "addExpense",
    async(input,thunkAPI)=>{
        console.log("in addExpense input = ", input)
        console.log("in addExpense thunkAPI = ", thunkAPI)
        console.log("in adopt pet s = ", thunkAPI.getState());
        const contract = thunkAPI.getState().transactionReducer.contract;
        const address = thunkAPI.getState().transactionReducer.address;

        const result = await contract.methods.addExpense(input.description, input.amount).send({ from: address });
        console.log("after adopt result = ", result);

        // return {
        //     adopterAddress: result.from,
        //     input: input
        // }
        
    }
)

const transactionSlice = createSlice({
    name: "transactionSlice",
    initialState: {
        web3: null,
        contract: null,
        address: null,
        balance: null,
        income: null,
        expense: null,
        history: []
     },
    reducers: {
        adopt: ()=>{

        }
    },
    extraReducers: {
        [initWeb3.fulfilled]: (state,action)=>{
            console.log("init web3 fullfil state = ",state);
            console.log("init web3 fullfil action = ",action);
            state.web3 = action.payload.web3;
            state.contract = action.payload.contract;
            state.address = action.payload.address;
            state.balance = action.payload.balance;
            state.income = action.payload.income;
            state.expense = action.payload.expense;
            state.history = action.payload.history;  
        },
        [addIncome.fulfilled]: (state,action)=>{
            console.log("addIncome fullfil state = ",state);
            console.log("addIncome fullfil action = ",action);
        },
        [addExpense.fulfilled]: (state,action)=>{
            console.log("addExpense fullfil state = ",state);
            console.log("addExpense fullfil action = ",action);
        },
        
    }
})

export const transactionReducer = transactionSlice.reducer;
export const { adopt } = transactionSlice.actions;


