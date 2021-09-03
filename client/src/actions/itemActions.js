import axios from "axios";
import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  UPDATE_ITEM,
  ITEMS_LOADING,
} from "./types";

import { returnErrors } from "./errorActions";
import { tokenConfig } from "./authActions";

export const getItems = () => (dispatch) => {
  dispatch(setItemsLoading());
  axios
    .get("/api/meals")
    .then((res) =>
      dispatch({
        type: GET_ITEMS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addItem = (item) => (dispatch, getState) => {
  axios
    .post("/api/meals", item, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: ADD_ITEM,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteItem = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/meals/${id}`, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: DELETE_ITEM,
        payload: id,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const updateItem = (id, item) => (dispatch, getState) => {
  axios
    .put(`/api/meals/${id}`, item, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: UPDATE_ITEM,
        payload: { id: id, data: res.data },
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING,
  };
};
