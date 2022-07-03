import PropTypes from 'prop-types';
import MessagesList from './MessagesList.js'
import SendMessageForm from './SendMessageForm.js'

const Chat = ({owner, messages, onNewMessage=f=>f}) => {

  const sendMessage = (message) => onNewMessage(owner, message);
  return (
    <div className="chat-window">
      <h2>Super Awsome Chat</h2>  
      <div className="name sender">{owner}</div>
      <MessagesList owner={owner} messages={messages} /> 
      <SendMessageForm onNewMessage={sendMessage} />
    </div>
  );
}

Chat.propTypes = {
  owner: PropTypes.string.isRequired,
  onNewMessage: PropTypes.func.isRequired
}

export default Chat;
