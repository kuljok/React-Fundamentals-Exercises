const AddUserForm = ({onNewUser=f=>f}) => {

  let _username, _firstName, _lastName;

  const submit = e => {
    e.preventDefault();
    onNewUser(_firstName.value, _lastName.value, _username.value);
    _username.value = '';
    _firstName.value = '';
    _lastName.value = '';
    _firstName.focus();
  }

  return (
    <form className="needs-validation" onSubmit={submit} novalidate>
      <div className="row g-3">
        <div className="col-sm-6">
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input type="text" ref={input=>_firstName = input} className="form-control" id="firstName" placeholder required></input>
          <div className="invalid-feedback">Valid first name is required</div>
        </div>
        <div className="col-sm-6">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input type="text" ref={input => _lastName = input} className="form-control" id="lastName" placeholder required></input>
          <div className="invalid-feedback">Valid last name is required</div>
        </div>
        <div className="col-12">
          <label htmlFor="username" className="form-label">Username</label>
          <div className="input-group has-validation">
            <span className="input-group-text">@</span>
            <input type="text" ref={input => _username = input} className="form-control" id="username" placeholder="Useranme" required></input>
            <div className="invalid-feedback">The username is required.</div>
          </div>
        </div>
      </div>
      <button className="mt-5 w-100 btn btn-primary btn-lg" type="submit">Add</button>
    </form>
  )
}

export default AddUserForm;
