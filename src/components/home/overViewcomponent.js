import { useState } from 'react';
import styled from 'styled-components'
import '../../App.css';

const AddTransactionContainer = styled.div`
    display:flex;
    flex-direction:column;
    border:1px solid #e6e8e9;
    gap:10px;
    padding:15px 20px;
    margin: 10px 20px;
    width:100%;
    & input{
        outline:none;
        padding:10px 12px;
        border-radius:4px;
        border:1px solid #e6e8e9;
        width:100% ;
    }
`;
const RadioBox = styled.div`
    display:flex;
    flex-direction:row;
    width:250px;
    margin:auto;
    align-items:center;
`;

const ExpenseContainer = styled.div`
    display:flex;
    flex-direction:row;
    gap:12px;
    margin:20px;
`;
const ExpenseBox = styled.div`
    display:flex;
    flex-direction:column;
    border:1px solid #e6e8e9;
    border-radius:4px;
    padding:15px 20px;
    width:135px;
    text-align:center;
    gap:12px;
    margin:20px;
    font-size:14px;
    margin:auto;
    & span{
        font-weight:bold;
        font-size:20px;
        color:${(props)=>(props.isIncome ? "green":"red")};
    }
`;
const AddtransactionView = (props) => {

    const [amount, setamount] = useState();
    const [desc, setdesc] = useState();
    const [type, settype] = useState("EXPENSE");
    const addtransactionmethod = () => {
        props.addTransactions({ amount: Number(amount), desc, type, id: Date.now() });
        console.log(amount, desc, type);
        props.setAddtransaction();
    }

    return (
        <AddTransactionContainer>
            <input type='number' value={amount} onChange={(e) => setamount(e.target.value)} placeholder='Amount' />
            <input value={desc} onChange={(e) => setdesc(e.target.value)} placeholder='Description' />
            <RadioBox>
                <input type='radio' id="expense" name='type' value="EXPENSE" checked={type === "EXPENSE"} onChange={(e) => settype(e.target.value)} />
                <label htmlFor='expense'>Expense</label>
                <input type='radio' id="income" name='type' value="INCOME" checked={type === "INCOME"} onChange={(e) => settype(e.target.value)} />
                <label htmlFor='income'>Income</label>
            </RadioBox>
            <button onClick={addtransactionmethod} className='AddButton'>Add Transaction</button>
        </AddTransactionContainer>
    );
}
const OverView = (props) => {

    const [addTransaction, setAddtransaction] = useState(false);



    return (
        <div className="App">
            
            <div className='balance-box'>
                Balance : ${props.income - props.expense}
                <button onClick={() => setAddtransaction(!addTransaction)} className='AddButton'>{addTransaction ? "Cancel" : "Add"}</button>
            </div>
            {addTransaction && <AddtransactionView setAddtransaction={setAddtransaction} addTransactions={props.addTransactions} />}
            {/* {addTransaction && <div className=''>{}</div>} */}
            <ExpenseContainer>
                <ExpenseBox isIncome={false}>
                    Expense<span>${props.expense}</span>
                </ExpenseBox>
                <ExpenseBox isIncome={true}>
                    Income<span>${props.income}</span>
                </ExpenseBox>
            </ExpenseContainer>
        </div>

    );
}

export default OverView;