import { createNew } from "../request"
import { useMutation, useQueryClient } from "react-query"

const AnecdoteForm = () => {
  const newAnecMutations = useMutation(createNew)
  const queryClient = useQueryClient() 
  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    
    newAnecMutations.mutate({content, votes:0},
      {onSuccess: ()=>queryClient.invalidateQueries('anecdotes')})
    event.target.anecdote.value = ''
    console.log('new anecdote')
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
