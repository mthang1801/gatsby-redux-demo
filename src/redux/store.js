import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "./root-reducer";
import logger from "redux-logger";

const middlewares = [];

if(process.env.NODE_ENV !== "development"){
  middlewares.push(logger);
}

export const store = compose(applyMiddleware(...middlewares))(createStore)(rootReducer)