import React from 'react';
import propTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import ErrorPage from './ErrorPage';
import * as markdownDir from './../../md/portfolio';

export default function (props) {
  const projectName = props.match.params.project;
  const md = markdownDir[projectName];

  if (!md) {
    return (<ErrorPage />);
  }

  return (
    <div id='portfolio' className="page__inner pbl">
      <div className="container">
        <ReactMarkdown source={md} />
      </div>
    </div>
  );
};

module.exports.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      project: propTypes.string.isRequired
    }).isRequired
  }).isRequired
}
