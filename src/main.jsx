import React from 'react'
import ReactDOM from 'react-dom/client'
import {legacy_createStore as createStore , applyMiddleware} from 'redux'

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
      console.log("ACTION_TYPE =", action.type);
      next(action);
    }
  }
}

const store = createStore(rootReducer,applyMiddleware(logger));
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
