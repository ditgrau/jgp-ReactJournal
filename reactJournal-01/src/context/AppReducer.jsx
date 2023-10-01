// {
//     type: "ADD_TRANSACTION";
//     payload: -20
// }

export default (state, action) => {
    switch (action.type) {
        case "ADD_TRANSACTION":
            return {
                transactions: [...state.transactions, action.payload]
            };
        default:
            return state
    }
}