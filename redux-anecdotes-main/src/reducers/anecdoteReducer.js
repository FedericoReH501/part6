import { createSlice } from "@reduxjs/toolkit"

const compareNumber= (a,b)=>{
  return b.votes-a.votes
}

const anecdoteSlice = createSlice({
  name:'anecdotes',
  initialState:[],
  reducers:{
    createAnecdote(state,action){
      const content = action.payload
      const newAnecdote = {
        content: content,
        votes: 0
      }
      state.push(newAnecdote)
    },
    voteAnecdote(state,action){
      const id = action.payload
      return state.map(a=> a.id === id 
        ? {...a,votes: a.votes + 1}
        : a
        ).sort(compareNumber)
    },
    appendAnecdote(state,action){
      state.push(action.payload)
    },
    setAnecdotes(state,action){
      return action.payload
    }
  }
})

export const {createAnecdote,voteAnecdote,appendAnecdote,setAnecdotes}= anecdoteSlice.actions
export default anecdoteSlice.reducer