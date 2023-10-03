import React from "react";
import { useGlobalState } from "../../context/GlobalState";
import TransactionItem from "./TransactionItem";

function TransactionList() {

    const { transactions} = useGlobalState()

    return (
        <>
            <h3 className="text-white text-lg font-semibold w-full my-2">History</h3>
            <ul>
            {
                transactions.map(transaction => (
                    <TransactionItem transaction={transaction} key={transaction.id}/>
                ))
            }
            </ul>
        </>
    )
}

export default TransactionList