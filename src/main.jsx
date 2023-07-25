import React from 'react'
import ReactDOM from 'react-dom/client'
import {legacy_createStore as createStore} from 'redux'

import './styles/index.css'
import App from './components/App'
import rootReducer from './reducers'

const store = createStore(rootReducer);
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
