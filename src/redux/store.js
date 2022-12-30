import rootReducers from "./reducers/index";
import { configureStore } from "@reduxjs/toolkit";
const store=configureStore({reducer:rootReducers,devTools:window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()}) 
export default store;