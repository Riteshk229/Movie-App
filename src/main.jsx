import React from 'react'
import ReactDOM from 'react-dom/client'
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import './styles/index.css'
import App from './components/App'
import rootReducer from './reducers'

// curried fuction logger(obj,next,action)
// logger(obj)(next)(action)
const logger = function ({ dispatch, getState }) {
  // console.log('dispatch', dispatch);
  // console.log('getState', getState);
  return function (next) {
    return function (action) {
      // middleware
      console.log("From_logger1");
      console.log("ACTION_TYPE =", action.type);
      next(action);
    }
  }
}

// syntax 2
const logger2 = ({dispatch,getState}) => (next) => (action) => {
  // logger code
  console.log("From_logger2");
  if (typeof action !== 'function') {
    console.log("ACTION_TYPE =", action.type);
  }
  next(action);
}

// const thunk = ({ dispatch, getState}) => (next) => (action) => {
//   console.log("From_Thunk");
//   if (typeof action === 'function') {
//     action(dispatch);
//     return;
//   }
//   next(action);
// }

const store = createStore(rootReducer,applyMiddleware(logger2,thunk));
console.log("store", store);
// console.log("Before state", store.getState());

// store.dispatch({
//   type: "ADD_MOVIES",
//   movies : [{name : 'Avengers'}]
// })

// console.log("After state", store.getState());

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <App store={store} />
  // </React.StrictMode>
,)
