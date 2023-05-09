import {  useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdotesForm = ()=>{
  const dispatch = useDispatch()
  
  const addAnecdote=(event)=>{
    event.preventDefault()
    const content = event.target.newanec.value
    dispatch(createAnecdote(content))
    event.target.newanec.value=''
  }
  
  return(
    <div>
      <form onSubmit={addAnecdote}>
        <input
        type='text'
        name='newanec'
        placeholder='add new anecdote'
        />
        <button 
          type='submit'
        >
          create
        </button>
      </form>
    </div>
  )
}

export default AnecdotesForm