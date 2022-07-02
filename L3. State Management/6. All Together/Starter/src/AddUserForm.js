import {useState} from 'react'

const AddUserForm = ({onNewUser=f=>f}) => {

  let _username, _firstName, _lastName;
  const [userExists, setUserExists] = useState(false);
  const [form, setForm] = useState({firstName: '', lastName: '', userName: ''});

  const submit = e => {
    e.preventDefault();
    if (onNewUser(_firstName.value, _lastName.value, _username.value))
    {
      _username.value = '';
      _firstName.value = '';
      _lastName.value = '';
      _firstName.focus();
      setForm({firstName: '', lastName: '', userName: ''});
      setUserExists(false);
    } else {
      setUserExists(true);
      _username.focus();
    }
  }
  
  const changeUsername = e => {
    setUserExists(false);
    setForm({...form, userName: e.target.value});
  }

  const formIsEmpty = () => form.firstName === '' || form.lastName === '' || 
    form.userName === '';

  return (
    <form className="needs-validation" onSubmit={submit} noValidate>
      <div className="row g-3">
        <div className="col-sm-6">
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input type="text" ref={input=>_firstName = input} className="form-control" id="firstName" required onChange={(event) => setForm({...form, firstName: event.target.value})}></input>
        </div>
        <div className="col-sm-6">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input type="text" ref={input => _lastName = input} className="form-control" id="lastName" required onChange={(event) => setForm({...form, lastName: event.target.value})}></input>
        </div>
        <div className="col-12">
          <label htmlFor="username" className="form-label">Username</label>
          <div className="input-group has-validation">
            <span className="input-group-text">@</span>
            <input type="text" ref={input => _username = input} 
              className={`form-control ${userExists ? "is-invalid": ""}`} 
              id="username" placeholder="Useranme" required onChange={changeUsername}></input>
            <div className="invalid-feedback">Username with such a name is already exist.</div>
          </div>
        </div>
      </div>
      <button className="mt-5 w-100 btn btn-primary btn-lg" disabled={formIsEmpty()} type="submit">Add</button>
    </form>
  )
}

export default AddUserForm;
