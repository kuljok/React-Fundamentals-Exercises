import "./App.css";
import AddUserForm from "./AddUserForm.js"
import UserList from "./UserList.js"
import {useState} from "react"

const App = () => {

  const [users, setUsers] = useState([])

  const addUser = (firstName, lastName, username) => {
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
     <UserList users={users} />
   </div>
  );
};

export default App;
