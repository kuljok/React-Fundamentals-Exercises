import logo from "./logo.svg";
import "./App.css";
import AddUserForm from "./AddUserForm.js"

const App = () => {

  const addUser = (firstName, lastName, username) => {
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
      <div className="list-group list-group-flush border-bottom scrollarea">
        <a href="#" class="list-group-item list-group-item-action active py-3 lh-tight" aria-current="true">
          <div class="d-flex w-100 align-items-center justify-content-between">
            <strong class="mb-1">List group item heading</strong>
            <small>Wed</small>
          </div>
          <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
        </a>
      </div>
    </div>
  );
};

export default App;
