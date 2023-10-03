import React from "react";
import { useGlobalState } from "../../context/GlobalState";

function IncomeExpenses() {

    const { transactions } = useGlobalState()

    const amounts = transactions.map(transaction => transaction.amount)

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2)

    const expense = amounts
        .filter(item => item < 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2) * -1 //para quitar el -

    return (
        <>
            <div className="flex justify-between">
                <h4>Income</h4>
                <span>{income}</span>
            </div>
            <div className="flex justify-between">
                <h4>Expense</h4>
                <span>{expense}</span>
            </div>
        </>
    )
}

export default IncomeExpenses