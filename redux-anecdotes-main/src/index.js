import React from 'react'
import ReactDOM from 'react-dom/client'
import {configureStore} from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import App from './App'
import filterReducer from './reducers/filterReduced'
import anectodeReducer from './reducers/anecdoteReducer'


const store = configureStore({
  reducer:{
    filter: filterReducer,
  anectodes: anectodeReducer
  }
  
})
store.subscribe(()=>console.log(store.getState()))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)