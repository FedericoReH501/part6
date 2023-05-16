import { createNew } from "../request"
import { useMutation, useQueryClient } from "react-query"
import {useNotifyDispatch} from '../notificationContext'

const AnecdoteForm = () => {
  const notifDispatch = useNotifyDispatch()
  const newAnecMutations = useMutation(createNew)
  const queryClient = useQueryClient() 
  
  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    
    newAnecMutations.mutate({content, votes:0},
      {onSuccess: () => {
        queryClient.invalidateQueries('anecdotes')
        notifDispatch({type:'SHOW',payload:`you added ${content}`})
        setTimeout(()=>notifDispatch({type:'HIDE'}),3000)
      },
      onError:()=>{
        notifDispatch({type:'SHOW',payload:`${content}not added beacuse is to short, must be at least 5 characters`})
        setTimeout(()=>notifDispatch({type:'HIDE'}),3000)}
      }
    )

        
    event.target.anecdote.value = ''
    
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
