import React from 'react';
import propTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { Helmet } from 'react-helmet';

import ErrorPage from './ErrorPage';
import * as markdownDir from './../../md/portfolio';

function OpenLinksInNewTab(props) {
  return (
    <a href={props.href} target="_blank" rel="noopener">{props.children}</a>
  )
}

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
        <div className="hero">
          <h2>{pageTitle}</h2>
          <p className="lead">{pageDescription}</p>
          <p className="small">{md.metadata.projectdate}</p>
        </div>
        <ReactMarkdown
          source={md.contents}
          renderers={{Link: OpenLinksInNewTab}}
        />
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
