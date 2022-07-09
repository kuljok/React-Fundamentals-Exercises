import PropTypes from "prop-types"

const Equation = ({a, b, c, x}) => {
  return (
    <div className="equation">
          <p className="text">{`${a} + ${b} + ${c} = ${x}`}</p>
    </div>
  )
}

Equation.propTypes = {
  x: PropTypes.number.isRequired,
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
  c: PropTypes.number.isRequired
}

export default Equation
