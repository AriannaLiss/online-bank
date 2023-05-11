import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { cashReducer } from "./cashReducer";
import { customerReducer } from "./customerReducer";
import createSagaMiddleware from 'redux-saga'
import { countWatcher } from "../saga/countSaga";
import { rootWatcher } from "../saga";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  cash: cashReducer, 
  customers: customerReducer  
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));//composeWithDevTools(applyMiddleware(thunk)))

sagaMiddleware.run(rootWatcher)