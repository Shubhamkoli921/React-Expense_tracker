import { useEffect, useState } from 'react';
import '../../App.css'
import OverView from './overViewcomponent';
import TransactionComponent from './transaction';
const HomeComponent = (props) => {

    const [transaction, updatetransaction] = useState([]);
    const [expense ,updateexpense] = useState(0);
    const [income ,updateincome] = useState(0);


    const addTransactions = (payload) => {
        const transactionArray = [...transaction];
        transactionArray.push(payload);
        updatetransaction(transactionArray);
    };

    const calculateBalance=()=>{
        let exp=0;
        let inc=0;
        transaction.map((payload)=>{
            payload.type==="EXPENSE"?(exp=exp+payload.amount):(inc=inc+payload.amount)
        });
        updateexpense(exp);
        updateincome(inc);
    };

    useEffect(()=>calculateBalance(),[transaction])
    return (
        <div className="App">
            <OverView addTransactions={addTransactions} expense={expense} income={income} />
            <TransactionComponent transaction={transaction} />
        </div>
    )
}
export default HomeComponent;