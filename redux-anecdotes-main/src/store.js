import {configureStore} from '@reduxjs/toolkit'
import filterReducer from './reducers/filterReduced'
import anectodeReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'

const store = configureStore({
  reducer:{
    filter: filterReducer,
  anectodes: anectodeReducer,
  notification: notificationReducer
  }
})

export default store