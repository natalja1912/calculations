import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './Register.css'

const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Заполните поле';
    } else if (values.name.length < 3) {
        errors.name = 'Введите не менее 3х символов';
    }
    else if (values.name.length > 15) {
        errors.name = 'Введите не более 15 символов';
    }
    return errors;
};

let Register = ({handleSubmit}) => {
    return (
        <div className="main">
            <form className="form" onSubmit={handleSubmit}>
                <label className="form__label" htmlFor="name">Введите имя</label>
                <Field className="form__input" name="name" type="text" component="input"  />
                <button className="form__button form__button_active" onClick={handleSubmit}>Готово!</button>
                : <div className="form__button form__button_inactive">Готово!</div>
            </form>
        </div>
    );
};

Register = reduxForm({
    form: 'registerForm',
    validate
})(Register)

export default Register;
