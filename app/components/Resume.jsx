import React from 'react';
import { Helmet } from 'react-helmet';

const pageDescription = "Resume for Daniel Singer, web designer and front-end developer.";
const resumePath = 'https://github.com/chilblane/chilblane-resume/raw/master/resume.pdf';
const iframeSrc = 'https://docs.google.com/gview?url=' + resumePath + '&embedded=true';

export default function () {
  return (
    <div id='resume' className="embed-container embed-container--paper">
      <Helmet>
        <meta name="description" content={pageDescription} />
        <meta property="og:description" content={pageDescription} />
      </Helmet>
      <iframe
        src={iframeSrc}
        title='Resume for Daniel Singer'
        frameBorder='0' />
    </div>
  );
};
