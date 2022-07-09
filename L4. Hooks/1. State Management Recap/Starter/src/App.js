import logo from "./logo.svg";
import "./App.css";
import {useState} from 'react';
import Chat from './Chat.js'

const users = [{ username: "Amy" }, { username: "John" }, {username: "Bob"}];

const App = () => {

  const [messages, setMessages] = useState([]);

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
