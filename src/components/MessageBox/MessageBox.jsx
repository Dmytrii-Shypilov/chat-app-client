import s from './message-box.module.scss'

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

export default MessageBox