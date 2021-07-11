import './CustomField.css'

const CustomField = ({ input, type, meta: { touched, error } }) => (
    <div>
        <input autoComplete="off" className="task-input" {...input} type={type} />
        {touched && error && <span className="task-input__error">{error}</span>}
    </div>
  )

  export default CustomField;