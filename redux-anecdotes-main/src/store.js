import {configureStore} from '@reduxjs/toolkit'
import filterReducer from './reducers/filterReduced'
import anectodeReducer from './reducers/anecdoteReducer'

const store = configureStore({
  reducer:{
    filter: filterReducer,
  anectodes: anectodeReducer
  }
})

export default store