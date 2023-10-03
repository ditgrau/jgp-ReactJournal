import React from "react";
import { useGlobalState } from "../../context/GlobalState";


function TransactionItem({ transaction }) {

    const { deleteTransaction } = useGlobalState();

    return (
        <li className="w-full flex justify-between">
            <div className="bg-zinc-600 text-white px-3 py-1 rounded-lg m-1 w-full flex justify-between items-center">
                <p className="text-sm">{transaction.description}</p>
                <span className="font-semibold">{transaction.amount}€</span>
            </div>
            <button className="bg-indigo-400 text-indigo-900 font-extrabold px-3 py-1 rounded-lg m-1"
                onClick={() =>
                    deleteTransaction(transaction.id)}>X</button>
        </li>
    )
}

export default TransactionItem