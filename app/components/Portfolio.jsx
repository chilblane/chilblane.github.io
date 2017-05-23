import React from 'react';
import propTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { Helmet } from 'react-helmet';

import ErrorPage from './ErrorPage';
import * as markdownDir from './../../md/portfolio';

export default function (props) {
  const projectName = props.match.params.project;
  const md = markdownDir[projectName];
  const pageTitle = md.metadata.title;
  const pageDescription = md.metadata.description;

  if (!md) {
    return (<ErrorPage />);
  }

  return (
    <div id='portfolio' className="page__inner pbl">
      <Helmet title={pageTitle}>
        <meta property="og:title" content={pageTitle} />
        <meta name="description" content={pageDescription} />
        <meta property="og:description" content={pageDescription} />
      </Helmet>
      <div className="container">
        <h2>{pageTitle}</h2>
        <h3>{pageDescription}</h3>
        <h5>{md.metadata.projectdate}</h5>
        <ReactMarkdown source={md.contents} />
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
