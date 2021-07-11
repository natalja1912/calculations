import React from 'react';
import { useHistory } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "../../redux/configureStore";
import { Register, TasksMain, ResultsPage } from '..';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { getFormValues } from 'redux-form'

function App() {
  console.log(store.getState())

  let history = useHistory();

  function handleSubmit() {
    const userName = getFormValues('registerForm')(store.getState())
    console.log(values)
    history.push("/tasks");
  }

  return (
    <div className="page">
      <Provider store={store}>
        <Switch>
          <Route path="/sign-in">
            <Register onSubmit={handleSubmit} />
          </Route>
          <Route exact path="/tasks">
            <TasksMain />
          </Route>
          <Route exact path="/results">
            <ResultsPage />
          </Route>
          <Redirect to="/sign-in" />
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
