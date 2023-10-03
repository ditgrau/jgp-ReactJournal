import React from "react";
import { VictoryPie } from "victory";

function ExpenseChart() {
    return (
        <>
            <VictoryPie
                colorScale={["#6b61d4", "#a4a1df"]}
                width={200} height={200}
                labelRadius={({ innerRadius }) => innerRadius - 30 }
                innerRadius={75}
                data={[
                    { x: "Expenses", y: 40 },
                    { x: "Incomes", y: 40 },
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