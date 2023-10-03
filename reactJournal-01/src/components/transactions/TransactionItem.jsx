import React from "react";
import { useGlobalState } from "../../context/GlobalState";


function TransactionItem({transaction}) {

    const {deleteTransaction} = useGlobalState();

    return (
        <li>
            <p>{transaction.description}</p>
            <span>{transaction.amount}</span>
            <button onClick={() =>
                deleteTransaction(transaction.id)}>x</button>
        </li>
    )
}

export default TransactionItem