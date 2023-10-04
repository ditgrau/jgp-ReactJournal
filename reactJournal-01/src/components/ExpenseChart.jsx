import React from "react";
import { VictoryPie } from "victory";
import { useGlobalState } from "../context/GlobalState";

function ExpenseChart() {

    const { transactions } = useGlobalState()

    const totalIncome = transactions.filter(transaction => transaction.amount > 0)
        .reduce((acc, transaction) => (acc += transaction.amount), 0);

    const totalExpense = transactions.filter(transaction => transaction.amount < 0)
        .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

        console.log(totalExpense)
        console.log(totalIncome)

    const totalExpensesPercentage = Math.round((totalExpense / totalIncome) * 100);
    const totalCapitalPercentage = 100 - totalExpensesPercentage

    console.log(totalExpensesPercentage)

    return (
        <>
            <VictoryPie
                colorScale={["#6b61d4", "#a4a1df"]}
                width={200} height={200}
                labelRadius={({ innerRadius }) => innerRadius - 30}
                innerRadius={75}
                data={[
                    { x: "Expenses " + totalExpensesPercentage + "%", y: totalExpensesPercentage },
                    { x: "Capital "+ totalCapitalPercentage + "%", y: totalCapitalPercentage },
                ]}
                style={{
                    labels: {
                        fontSize: 10, fill: "white"
                    }
                }}

            />
        </>
    )
}

export default ExpenseChart