import React from 'react';
import ReactMarkdown from 'react-markdown';

const md = require('./../../md/about.md');

export default function () {
  return (
    <div id='about' className="page__inner pbl">
      <div className="container">
        <ReactMarkdown source={md.contents} />
      </div>
    </div>
  );
};
