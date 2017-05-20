import React from 'react';

const resumePath = 'https://github.com/chilblane/chilblane-resume/raw/master/resume.pdf';
const iframeSrc = 'https://docs.google.com/gview?url=' + resumePath + '&embedded=true';

export default function () {
  return (
    <div id='resume' className="embed-container embed-container--paper">
      <iframe
        src={iframeSrc}
        title='Resume for Daniel Singer'
        frameBorder='0' />
    </div>
  );
};
