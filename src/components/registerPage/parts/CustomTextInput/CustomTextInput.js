import './CustomTextInput.css'

const CustomTextInput = ({ input, type, meta: { touched, error } }) => (
    <div>
        <input autoComplete="off" className="input-name" {...input} type={type} maxLength='15' />
        {touched && error && <span className="input-name__error">{error}</span>}
    </div>
  )

  export default CustomTextInput;