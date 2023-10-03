import React from "react";
import { useGlobalState } from "../../context/GlobalState";
import TransactionItem from "./TransactionItem";

function TransactionList() {

    const { transactions} = useGlobalState()

    return (
        <>
            <h3>History</h3>
            {
                transactions.map(transaction => (
                    <TransactionItem transaction={transaction} key={transaction.id}/>
                ))
            }
        </>
    )
}

export default TransactionList