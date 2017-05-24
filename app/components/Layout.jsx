import React from 'react';
import { NavLink } from 'react-router-dom';

export default function({children}) {
  return (
    <div id="layout">
      <div className="sidebar">
        <div className="sidebar__container">
          <header className="sidebar__header">
            <h1>Daniel Singer</h1>
            <p>
              web designer &amp;&nbsp;
              <span className="nowrap">front-end developer</span>
            </p>
          </header>
          <nav className="sidebar__nav">
            <ul className="clean mtz">
              <li>
                <NavLink exact activeClassName="active" to="/">Home</NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/about">About</NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/resume">Resume</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="page">
        {children}
      </div>
    </div>
  );
};
