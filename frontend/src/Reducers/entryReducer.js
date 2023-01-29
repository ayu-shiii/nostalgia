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

export const entryReducer = (state = { responses: [] }, action) => {
  switch (action.type) {
    case ALL_ENTRY_REQUEST:
      return {
        loading: true,
        responses: [],
      };
    case ALL_ENTRY_SUCCESS:
      return {
        loading: false,
        responses: action.payload.responses,
      };
    case ALL_ENTRY_FAIl:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const singleResponseDetails = (state = { response: {} }, action) => {
  switch (action.type) {
    case SINGLE_ENTRY_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case SINGLE_ENTRY_SUCCESS:
      return {
        loading: false,
        response: action.payload,
      };
    case SINGLE_ENTRY_FAIl:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const createResponse = (state = { response: {} }, action) => {
  switch (action.type) {
    case CREATE_ENTRY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_ENTRY_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        response: action.payload,
      };
    case CREATE_ENTRY_RESET:
      return {
        ...state,
        success: false,
      };
    case CREATE_ENTRY_FAIl:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const deleteResponse = (state = {}, action) => {
  switch (action.type) {
    case DELETE_ENTRY_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case DELETE_ENTRY_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case DELETE_ENTRY_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case DELETE_ENTRY_FAIl:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
