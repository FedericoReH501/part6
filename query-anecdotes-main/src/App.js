import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import {useQuery,useMutation,useQueryClient} from 'react-query'
import {getAll,updateOne} from './request'
import {useNotifyDispatch} from './notificationContext'
const App = () => {
  
  const result = useQuery('anecdotes',getAll,{refetchOnWindowFocus:false})
  const newVoteMutation = useMutation(updateOne)
  const queryClient = useQueryClient()
  const notifDispatch = useNotifyDispatch()
  
  console.log(result)
  
  if(result.isLoading){
    return <div>Loading...</div>
  }
  else if (result.isError){
    return <div>anecdotes service not available due to problem in server</div>
  }

  const anecdotes = result.data
  
  const handleVote = (anecdote) => {
    const actualVotes = anecdote.votes
    const updatedAnec = {...anecdote,votes: actualVotes + 1}
    newVoteMutation.mutate(updatedAnec,{
      onSuccess:(updatedAnec)=> {
        const anecList = queryClient.getQueryData()
        queryClient.setQueryData('anecdotes',anecList
          .map(anec=> anec.id === updatedAnec.id 
            ? updatedAnec
            : anec
        ))
        notifDispatch({type:'SHOW',payload:`${anecdote.content} voted`})
        setTimeout(()=>notifDispatch({type:'HIDE'}),3000)
      }
    })
    console.log('vote')
  }

  return (
    <div>
      <h3>Anecdote app</h3>
      
        <Notification />
        <AnecdoteForm />
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
