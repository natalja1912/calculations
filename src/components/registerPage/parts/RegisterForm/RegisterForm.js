import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validateName from '../../../../utils/nameValidation';
import CustomTextInput from '../CustomTextInput/CustomTextInput';
import './RegisterForm.css'

let RegisterForm = ({handleSubmit}) => {
    return (
            <form className="form" onSubmit={handleSubmit}>
                <label className="form__label" htmlFor="name">Введите имя</label>
                <Field className="form__input" name="name" type="text" component={CustomTextInput}  />
                <button className="form__button form__button_active" onClick={handleSubmit}>Готово!</button>
                : <div className="form__button form__button_inactive">Готово!</div>
            </form>
    );
};

RegisterForm = reduxForm({
    form: 'registerForm',
    validateName
})(RegisterForm)

export default RegisterForm;