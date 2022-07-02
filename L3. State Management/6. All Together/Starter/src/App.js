import "./App.css";
import AddUserForm from "./AddUserForm.js"
import UserList from "./UserList.js"
import Toggle from "./Toggle.js"
import {useState} from "react"

const App = () => {

  let numbersVisibilityLabel = 'Hide the Number of Games Played'
  const [users, setUsers] = useState([])
  const [showNumbers, setShowNumbers] = useState(true)

  const addUser = (firstName, lastName, username) => {
    const existUser = users.find(u => u.username.toLowerCase() == username.toLowerCase());
    if (!existUser)
    {
      const newUsers = [
        ...users,
        {
          username: username,
          firstName: firstName,
          lastName: lastName,
          playedGames: 0
        }
      ];
      setUsers(newUsers);
      return true;
    }
    return false;
  };

  const getNumbersVisibilityMessage = () => showNumbers ? 'Hide the Number of Games Played' : 
    'Show the Number of Games Played'

  
  const toggleNumbersVisibility = enabled => {
    setShowNumbers(enabled)
  } 

  return (
    <div className="d-flex flex-column alignt-items-stretch flex-shrink-0 bg-white">
      <a href='/' className="d-flex aligt-items-center flex-shrink-0 p-3 link-dark text-decoration-none bottom-border">
        <span className="fs-5 fw-semibold">Users List</span>
      </a>
      <hr className="my-4"></hr>
     <div className="container-fluid">
       <AddUserForm onNewUser={addUser} />
     </div>
     <hr className="my-4"></hr>
     <Toggle id="showNumbersToggle" onToggle={toggleNumbersVisibility} label={getNumbersVisibilityMessage()} checked={showNumbers}/>
     <hr className="my-4"></hr>
     <UserList users={users} showNumbers={showNumbers}/>
   </div>
  );
};

export default App;
