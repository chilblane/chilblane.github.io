import React from 'react';
import { Link } from 'react-router-dom';

export default function () {
  return (
    <div id='about' className="pbl">
      <div className="container">
        <h2>Hello.</h2>
        <p>I&rsquo;m a web designer and front-end developer based in Scottsdale, Arizona, with experience in product marketing experiences and software user experience. I've done websites, product design, graphic design, branding, email marketing and design, Wordpress design and more. Check out my <Link to="/portfolio">portfolio</Link>.</p>
        <p>I&rsquo;m passionate about consistency, scalability, and performance, and I am a firm believer that your user experience is your brand.</p>
        <h2>What I do</h2>
        <h3>Marketing web design</h3>
        <p>I've created brand experiences that delight, inform, and encourage website visitors to convert into users, utilizing modern and responsible practices and UX.</p>
        <h3>Front-end development</h3>
        <p>My extensive experience with HTML and CSS enables me to write effective and flexible styling frameworks and pages. I prioritize performance, progressive enhancement, and maintainability.</p>
        <h3>Cross-departmental UX</h3>
        <p>User experience isn&rsquo;t contained to just your website and app. I&rsquo;ve worked hard to ensure any time a user interacts with a brand, they receive the same fantastic experience, be it transactional emails, social media, documentation, and more.</p>
        <h2>The details</h2>
        <div className="grid">
          <div className="grid__column">
            <h3>Development</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Stylus</li>
              <li>Less</li>
              <li>Javascript</li>
              <li>Jekyll</li>
              <li>Markdown</li>
              <li>Wordpress</li>
              <li>SVG</li>
              <li>React</li>
            </ul>
          </div>
          <div className="grid__column">
            <h3>Tools and processes</h3>
            <ul>
              <li>Grunt</li>
              <li>Webpack</li>
              <li>NPM</li>
              <li>Git & GitHub</li>
              <li>Atom</li>
              <li>Chrome Dev Tools</li>
              <li>Sketch</li>
              <li>Adobe Photoshop & Illustrator</li>
              <li>Invision</li>
              <li>Google Analytics</li>
            </ul>
          </div>
          <div className="grid__column">
            <h3>Concepts</h3>
            <ul>
              <li>Responsive web design</li>
              <li>Progressive enhancement</li>
              <li>CSS architecture/frameworks</li>
              <li>BEM & OOCSS</li>
              <li>Website performance</li>
              <li>Accessibility</li>
              <li>Prototyping</li>
              <li>A/B testing</li>
              <li>Agile project management</li>
              <li>SEO</li>
            </ul>
          </div>
        </div>
        <h2>Reach out</h2>
        <ul>
          <li>
            <a href='mailto:daniel@chilblane.com'>
              Email
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/chilblane" target="_blank" rel="noopener">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/chilblane" target="_blank" rel="noopener">
              Twitter
            </a>
          </li>
        </ul>
        <p><a href="https://github.com/chilblane/chilblane.github.io" target="_blank" rel="noopener">View the repository</a> for this site.</p>
      </div>
    </div>
  );
};
