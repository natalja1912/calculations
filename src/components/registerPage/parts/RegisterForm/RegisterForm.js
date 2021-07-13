import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import validate from '../../../../utils/validation';
import CustomTextInput from '../CustomTextInput/CustomTextInput';
import './RegisterForm.css'

let RegisterForm = ({ handleSubmit, userName }) => {
    return (
        <form className="form" onSubmit={handleSubmit}>
            <label className="form__label" htmlFor="name">Введите имя</label>
            <Field className="form__input" name="name" type="text" component={CustomTextInput} />
            {(userName && userName.length > 2) ? <button className="form__button form__button_active" onClick={handleSubmit}>Готово!</button>
                : <div className="form__button form__button_inactive">Готово!</div>}
        </form>
    );
};

RegisterForm = reduxForm({
    form: 'registerForm',
    validate
})(RegisterForm)

const selector = formValueSelector('registerForm')

export default connect(state => ({
    userName: selector(state, 'name'),
}))(RegisterForm);