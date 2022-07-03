import logo from "./logo.svg";
import "./App.css";
import {useState} from 'react';
import Chat from './Chat.js'

const users = [{ username: "Amy" }, { username: "John" }];

/*const messages = [
  { username: "Amy", text: "Hi, Jon!" },
  { username: "Amy", text: "How are you?" },
  { username: "John", text: "Hi, Amy! Good, you?" },
];*/

const App = () => {

  const [messages, setMessages] = useState([]);


  // If the user did not type anything, he/she should not be allowed to submit.
  const isDisabled = () => {
    return false;
  };

  const sendMessage = (username, text) => 
  {
    const newMessage = {username, text};
    const newMessages = [...messages, 
      newMessage
    ];
    setMessages(newMessages)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="container">
        {users.map(u => (<Chat key={u.username} messages={messages} onNewMessage={sendMessage} owner={u.username}/>))}
      </div>
    </div>
  );
};

export default App;
