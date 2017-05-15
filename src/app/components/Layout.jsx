const React = require('react');

module.exports = function({children}) {
  return (
    <div id="layout">
      <div className="sidebar">
        <h1>Daniel Singer</h1>
        <p>Web designer | front-end developer</p>
      </div>
      <div className="page-contents">
        {children}
      </div>
    </div>
  );
};
