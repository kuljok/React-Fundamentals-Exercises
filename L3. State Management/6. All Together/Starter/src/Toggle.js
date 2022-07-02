import PropTypes from "prop-types"

const Toggle = ({id, onToggle=f=>f, label='', checked = true}) => {
  return (
    <div className="form-check form-switch">
      <input id={id} className="form-check-input" type="checkbox" role="switch" checked={checked} onChange={(event) => onToggle(event.target.checked)}></input>
      <label className="form-check-label" htmlFor={id}>{label}</label>  
    </div>
  )
}

Toggle.propTypes = {
  id: PropTypes.string.isRequired
}

export default Toggle;
