import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "../../redux/configureStore";
import { RegisterPage, TasksPage, ResultsPage } from '..';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  return (
    <div className="page">
      <Provider store={store}>
        <Switch>
          <Route path="/sign-in">
            <RegisterPage />
          </Route>
          <Route exact path="/tasks">
            <TasksPage />
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
