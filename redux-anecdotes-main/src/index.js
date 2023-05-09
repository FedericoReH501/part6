import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore, combineReducers} from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import filterReducer from './reducers/filterReduced'
import anectodeReducer from './reducers/anecdoteReducer'


const reducer = combineReducers({
  filter: filterReducer,
  anectodes: anectodeReducer
})

const store = createStore(reducer)
store.subscribe(()=>console.log(store.getState()))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)