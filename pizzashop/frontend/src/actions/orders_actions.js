import axios from "axios";

import { GET_ORDERS, DELETE_ORDER, ADD_ORDER } from "./types";

// GET ORDERS
export const getOrders = () => (dispatch) => {
  axios
    .get("/api/orders/")
    .then((res) => {
      dispatch({
        type: GET_ORDERS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// DELETE ORDER
export const deleteOrder = (id) => (dispatch) => {
  axios
    .delete(`/api/orders/${id}`)
    .then((res) => {
      dispatch({
        type: DELETE_ORDER,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// ADD ORDER
export const addOrder = (order, showResult) => (dispatch) => {
  axios
    .post("/api/orders/", order)
    .then((res) => {
      if (res.status === 201) {
        dispatch({
          type: ADD_ORDER,
          payload: res.data,
        });
        showResult();
      }
    })
    .catch((err) => console.log(err));
};
