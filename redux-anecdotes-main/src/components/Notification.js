import { useSelector } from 'react-redux'


const Notification = () => {
  const notification = useSelector(state=>state.notification)
  const style = {
    border: 'solid green',
    padding: 10,
  }
  
  return (
    <>
      {notification && 
        <div style={style}>
        <h2>{notification}</h2>
        </div>
      }
    </>
    
    
  )
}

export default Notification