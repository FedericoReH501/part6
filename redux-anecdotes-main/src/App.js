
import AnecdotesForm from './components/AnecdotedForm'
import Anecdotes from './components/Anecdotes'

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Anecdotes/>
      <h2>create new</h2>
      <AnecdotesForm/>
    </div>
  )
}

export default App