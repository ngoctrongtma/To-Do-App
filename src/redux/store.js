import { createStore, combineReducers } from 'redux';
import todoSlice from './todoSlice';
import { handleAddToDo } from './todoSlice'

const reducers = combineReducers({ listToDo: todoSlice });

const store = createStore(reducers);

// test dispatch
store.dispatch(handleAddToDo("Công việc 1"));


console.log("test store", store.getState());

export default store;