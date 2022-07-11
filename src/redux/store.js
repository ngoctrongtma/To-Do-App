import { createStore, combineReducers, applyMiddleware } from 'redux';
import todoSlice from './todoSlice';

const reducers = combineReducers({ listToDo: todoSlice });

const myMiddleware = store => next => action => {
    if (action.type === "ADD_TODO" && action.payload === "test_middleware") {
        action.payload = "****"
    }
    return next(action);
}
const store = createStore(reducers, applyMiddleware(myMiddleware));

export default store;