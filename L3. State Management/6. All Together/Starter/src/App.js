import logo from "./logo.svg";
import "./App.css";

const App = () => {
  return (
    <div className="d-flex flex-column alignt-items-stretch flex-shrink-0 bg-white">
      <a href='/' className="d-flex aligt-items-center flex-shrink-0 p-3 link-dark text-decoration-none bottom-border">
        <span className="fs-5 fw-semibold">Users List</span>
      </a>
      <hr className="my-4"></hr>
     <div className="container-fluid">
      <form className="needs-validation" novalidate>
        <div className="row g-3">
          <div className="col-sm-6">
            <label for="firstName" className="form-label">First Name</label>
            <input type="text" className="form-control" id="firstName" placeholder required></input>
            <div className="invalid-feedback">Valid first name is required</div>
          </div>
          <div className="col-sm-6">
            <label for="lastName" className="form-label">Last Name</label>
            <input type="text" className="form-control" id="lastName" placeholder required></input>
            <div className="invalid-feedback">Valid last name is required</div>
          </div>
          <div className="col-12">
            <label for="username" className="form-label">Username</label>
            <div className="input-group has-validation">
              <span className="input-group-text">@</span>
              <input type="text" className="form-control" id="username" placeholder="Useranme" required></input>
              <div className="invalid-feedback">The username is required.</div>
            </div>
          </div>
        </div>
        <button className="mt-5 w-100 btn btn-primary btn-lg" type="submit">Add</button>
      </form>
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
