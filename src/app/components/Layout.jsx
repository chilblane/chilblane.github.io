const React = require('react');
const { browserHistory } = require('react-router');

function navTo(where) {
  return function (event) {
    event.preventDefault();
    browserHistory.push(where);
    return false;
  };
}


function NavItem({ onClick, text, url }) {
  return (
    <li>
      <a href={url} onClick={onClick}>
        {text}
      </a>
    </li>
  );
}

module.exports = function({children}) {
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
              <NavItem text='About' onClick={navTo('/')} />
              <NavItem text='Work' onClick={navTo('/work')} />
              <NavItem text='Resume' onClick={navTo('/resume')} />
              <NavItem text='Contact' onClick={navTo('/contact')} />
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
