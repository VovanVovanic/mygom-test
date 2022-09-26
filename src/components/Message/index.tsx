
import { getClearLabel } from '../../utils/utils'
import classes from './Message.module.scss'


interface IMessage {
  setMessage: (item: string | null) => void
  message: string | null
  error: boolean
}
export const Message: React.FC<IMessage> = ({ setMessage, message, error}) => {

  return (
    <div className={classes.message}>
      <h5>{getClearLabel(message)}</h5>
      {! error ? <div className={classes.button} onClick={()=>setMessage(null)}>OK</div> : ""}
    </div>
  )
}