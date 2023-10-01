import React from "react";
import { useGlobalState } from "../context/GlobalState";

function Balance() {

    const {transactions} = useGlobalState();

    const amounts = transactions.map(transaction => transaction.amount)
    const total = amounts.reduce((acc, item) => (acc += item), 0)

    return (
        <div>
            <h1>Balance</h1>
            <p>{JSON.stringify(total, null, 2)}</p>
        </div>
    )
}

export default Balance