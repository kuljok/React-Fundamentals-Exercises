import PropTypes from 'prop-types'

const MessagesList = ({messages=[], owner}) => {

  return (
    <ul className="message-list">
    {messages.map((msg, index) => (
      <li key={index} className={msg.username === owner ? "message sender": 
        "message recipient"} >
        <p>{`${msg.username}: ${msg.text}`}</p>
      </li>
    ))}
    </ul>
  )
}

MessagesList.propTypes = {
  messages: PropTypes.array.isRequired,
  owner: PropTypes.string.isRequired
}

export default MessagesList;
