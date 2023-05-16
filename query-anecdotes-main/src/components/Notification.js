
import {useNotifValue} from '../notificationContext'

const Notification = () => {
  const notifState = useNotifValue()
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }
  console.log('norifstate:',notifState)

  return (
    <div>
       {notifState && 
        <div style={style}>
          {notifState}
        </div>}
    </div>
   
    
  )
}

export default Notification
