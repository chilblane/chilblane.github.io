import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Helmet } from 'react-helmet';

const md = require('./../../md/about.md');
const pageTitle = "About | Daniel Singer";
const pageDescription = "Learn more about Daniel Singer, web designer and front-end developer.";

export default function () {
  return (
    <div id='about' className="page__inner pbl">
      <Helmet title={pageTitle}>
        <meta property="og:title" content={pageTitle} />
        <meta name="description" content={pageDescription} />
        <meta property="og:description" content={pageDescription} />
      </Helmet>
      <div className="container">
        <ReactMarkdown source={md} />
      </div>
    </div>
  );
};
