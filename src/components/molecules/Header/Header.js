import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="container clearfix">
          <Link className="logo float-left" to="/">
            TO DO
          </Link>
          <ul className="nav float-right">
            <li className="nav-item">
              <Link className="nav-link" to="/task-list">
                Task List
              </Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
