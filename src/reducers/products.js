const productsReducerDefaultState = [];

export default (state = productsReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return [
        ...state,
        action.product
      ]
    case "REMOVE_PRODUCTS":
      return state.filter(({ id }) => id !== action.id)
    case "EDIT_PRODUCTS":
      return state.map((product) => {
        if (product.id === action.id) {
          return {
            ...product,
            ...action.updates
          }
        } else {
          return product
        }
      })
    default:
      return state
  }
}
