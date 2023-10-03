import React from "react";
import { useGlobalState } from "../context/GlobalState";

function Balance() {

    const {transactions} = useGlobalState();

    const amounts = transactions.map(transaction => transaction.amount)
    const total = amounts.reduce((acc, item) => (acc += item), 0)

    return (
        <div className="border-b border-zinc-600 pb-4">
            <h3 className="text-lg font-semibold">Your balance</h3>
            <h1 className="text-3xl font-bold">{total}€</h1>
        </div>
    )
}

export default Balance