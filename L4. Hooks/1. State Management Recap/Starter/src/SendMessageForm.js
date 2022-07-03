import {useState} from 'react'

const SendMessageForm = ({onNewMessage=f=>f}) => {
  const [message, setMessage] = useState('');
  const isDisabled = () => message === '';

  const sendMessage = (e) => {
    e.preventDefault();
    onNewMessage(message);
    setMessage('');
  }

  return (
          <div>
            <form className="input-group" onSubmit={sendMessage}> 
              <input
                type="text"
                className="form-control"
                placeholder="Enter your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <div className="input-group-append">
                <button className="btn submit-button" disabled={isDisabled()}>
                  SEND
                </button>
              </div>
            </form>
          </div>
  )
}

export default SendMessageForm;
