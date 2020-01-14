import { createStore, combineReducers, applyMiddleware } from "redux";
import article from "../_reducers/article";
import category from "../_reducers/category";
import categoryPage from "../_reducers/categoryPage"
import articlePage from "../_reducers/articlePage"
//import { logger, promiseMiddleware } from "../middleware";
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';

const middlewares = [logger, promiseMiddleware];
//Get All reducers available
//Global state come from here
const reducers = combineReducers({
    article,
    category,
    categoryPage,
    articlePage
});

//setup store redux
const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;