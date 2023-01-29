import axios from "axios";
import {
  ALL_ENTRY_REQUEST,
  ALL_ENTRY_SUCCESS,
  ALL_ENTRY_FAIl,
  SINGLE_ENTRY_REQUEST,
  SINGLE_ENTRY_SUCCESS,
  SINGLE_ENTRY_FAIl,
  CREATE_ENTRY_REQUEST,
  CREATE_ENTRY_SUCCESS,
  CREATE_ENTRY_RESET,
  CREATE_ENTRY_FAIl,
  DELETE_ENTRY_REQUEST,
  DELETE_ENTRY_SUCCESS,
  DELETE_ENTRY_RESET,
  DELETE_ENTRY_FAIl,
  CLEAR_ERRORS,
} from "../Constants/entryConstant";

export const getEntries = () => async (dispatch) => {
  try {
    dispatch({
      type: ALL_ENTRY_REQUEST,
    });
    const { data } = await axios.get("/api/v1/responses");

    dispatch({
      type: ALL_ENTRY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_ENTRY_FAIl,
      payload: error.response.data.message,
    });
  }
};

export const getSingleResponse = (id) => async (dispatch) => {
  try {
    dispatch({
      type: SINGLE_ENTRY_REQUEST,
    });
    const { data } = await axios.get(`/api/v1/response/${id}`);

    dispatch({
      type: SINGLE_ENTRY_SUCCESS,
      payload: data.response,
    });
  } catch (error) {
    dispatch({
      type: SINGLE_ENTRY_FAIl,
      payload: error.response.data.message,
    });
  }
};

export const createResponse = (newResponse) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_ENTRY_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      "/api/v1/response/new",
      newResponse,
      config
    );

    dispatch({
      type: CREATE_ENTRY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_ENTRY_FAIl,
      payload: error.response.data.message,
    });
  }
};

export const deleteResponse = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_ENTRY_REQUEST,
    });
    const { data } = await axios.delete(`/api/v1/response/${id}`);

    dispatch({
      type: DELETE_ENTRY_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_ENTRY_FAIl,
      payload: error.response.data.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
