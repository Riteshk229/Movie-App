import React from 'react'
import ReactDOM from 'react-dom/client'
import {legacy_createStore as createStore} from 'redux'

import './styles/index.css'
import App from './components/App'
import movies from './reducers'

const store = createStore(movies);
console.log("store", store);
console.log("state", store.getState());

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
,)
