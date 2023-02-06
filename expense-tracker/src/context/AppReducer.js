export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
        // console.log("hello world")
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
        
      };

    default:
      return state;
  }
};
