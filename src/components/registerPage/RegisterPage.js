import React from 'react';
import { useHistory } from 'react-router-dom';
import { formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import RegisterForm from './parts/RegisterForm/RegisterForm';
import { UserName } from '../../redux/actions/UserName'
import './RegisterPage.css'

const RegisterPage = ({ addName, userName }) => {
    let history = useHistory();

    function handleSubmit() {
        addName(userName);
        history.push("/tasks");
    }

    return (
        <div className="main">
            <RegisterForm onSubmit={handleSubmit} />
        </div>
    );
};

const myFormValueSelector = formValueSelector('registerForm');

function mapStateToProps(state) {
    return {
      userName: myFormValueSelector(state, 'name')
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        addName: name => dispatch(UserName(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
