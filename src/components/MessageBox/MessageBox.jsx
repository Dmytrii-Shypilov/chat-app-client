import s from './message-box.module.scss'
import { memo } from 'react'

const MessageBox = ({type, text}) => {
    const className = type === 'incoming'? [s.messageBoxInc, s.messageInc] : [s.messageBoxOut, s.messageOut]
    const messages = text.map(mess=> {
        return (<div className={className[1]}>
            <span className={s.text}>
                {mess}
            </span>
        </div>)
    } )
    return(
        <div className={className[0]}>
            {messages}
        </div>
    )
}

export default memo(MessageBox)