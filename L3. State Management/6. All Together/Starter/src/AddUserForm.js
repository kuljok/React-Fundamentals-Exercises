const AddUserForm = ({onNewUser=f=>f}) => {

  const submit = e => {
    e.preventDefault()
  }

  return (
    <form className="needs-validation" onSubmit={submit} novalidate>
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
  )
}

export default AddUserForm;
