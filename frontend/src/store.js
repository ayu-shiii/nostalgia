import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { entryReducer, singleResponseDetails } from "./Reducers/entryReducer";
import { createResponse } from "./Actions/entryAction";

const reducer = combineReducers({
  responses: entryReducer,
  response: singleResponseDetails,
  newResponse: createResponse,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
