import { createSlice } from "@reduxjs/toolkit";

const notificationSlice=createSlice({
  name:'notification',
  initialState:null,
  reducers:{
    addNotify(state,action){
      console.log('first')
      return action.payload
    },
    removeNotify(state,action){
      return null
    }
  }
})

export const {addNotify,removeNotify} = notificationSlice.actions
export default notificationSlice.reducer