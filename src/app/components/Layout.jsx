import React from 'react';
import { Link } from 'react-router-dom';

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
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/resume">Resume</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
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
