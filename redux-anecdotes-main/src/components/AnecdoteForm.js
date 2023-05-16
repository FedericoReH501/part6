import {  useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'


const AnecdotesForm = ()=>{
  const dispatch = useDispatch()
  
  const addAnecdote=async (event)=>{
    event.preventDefault()
    const content = event.target.newanec.value
    dispatch(createAnecdote(content))
    event.target.newanec.value=''

    dispatch(setNotification(`you added: ${content}`,10))
  }
  
  return(
    <div>
      <h2>create new</h2>
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