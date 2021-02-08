import { DELETE_ORDER, GET_ORDERS, ADD_ORDER } from "../actions/types.js";

const initialState = {
  orders: [],
  pizza: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };
    case DELETE_ORDER:
      return {
        ...state,
        orders: state.orders.filter((order) => order.id !== action.payload),
      };
    case ADD_ORDER:
      return {
        ...state,
        leads: [...state.orders, action.payload],
      };

    default:
      return state;
  }
}
