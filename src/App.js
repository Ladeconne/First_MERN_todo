import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from './components/create-todo';
import EditTodo from './components/edit-todo';
import TodosList from './components/todos-list';

import logo from './assets/images/logo.JPG';

class App extends Component {
  render() {
    return (
      <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="" style={{width: "60px"}} />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">MERN-Stack todo app</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create">Create Todo</Link>
            </li>
          </ul>
        </div>
      </nav>
        <Route path="/" exact component={TodosList} />
        <Route path="edit/:id" exact component={EditTodo} />
        <Route path="/create" exact component={CreateTodo} />
      </Router>
    );
  }
}

export default App;
