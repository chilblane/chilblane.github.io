import React from 'react';
import Image from 'react-simple-image';
import { Link } from 'react-router-dom';

export default function () {
  return (
    <div id='home' className="page__inner">
      <div className="container">
        <h2>
          Your user experience<br/>
          is your brand.
        </h2>
        <p>
          I design and build for the web,<br/>
          whether in marketing, product, or everything in-between.
        </p>
        <p>My goal is simply to make things better for the user.</p>

        <hr/>
        <Link to="/portfolio/armory">
          <figure className="figure">
            <Image
              alt="Screen capture of a prototype for a redesigned World of Warcraft Armory"
              src={require("./../../static/portfolio/armory-header.jpg")}
              srcSet={{
                "320w": require("./../../static/portfolio/armory-header-320w.jpg"),
                "640w": require("./../../static/portfolio/armory-header-640w.jpg"),
                "1000w": require("./../../static/portfolio/armory-header.jpg"),
                "2000w": require("./../../static/portfolio/armory-header-2000w.jpg")
              }}
            />
            <figcaption>Unofficial World of Warcraft Armory Redesign</figcaption>
          </figure>
        </Link>

        <Link to="/portfolio/axosoft-redesign">
          <figure className="figure">
            <Image
              alt="Screen capture of a mockup for Axosoft 17"
              src={require("./../../static/portfolio/axosoft-redesign-main.png")}
              srcSet={{
                "320w": require("./../../static/portfolio/axosoft-redesign-main-320w.png"),
                "640w": require("./../../static/portfolio/axosoft-redesign-main-640w.png"),
                "1280w": require("./../../static/portfolio/axosoft-redesign-main.png"),
                "2560w": require("./../../static/portfolio/axosoft-redesign-main-2000w.png"),
              }}
            />
            <figcaption>Axosoft 17 Design Exploration</figcaption>
          </figure>
        </Link>

        <h3>Additional projects</h3>
        <ul>
          <li>
            <strong><a href="https://www.axosoft.com/" target="_blank" rel="noopener">Axosoft.com</a></strong> <small>(2013-2016)</small> <br/>
            Roles: Design + Development + Content + Project Management
          </li>
          <li className="mtm">
            <strong><a href="https://www.gitkraken.com/" target="_blank" rel="noopener">GitKraken.com</a></strong> <small>(2015-2016)</small> <br/>
            Roles: Design + Development + Content + Project Management
          </li>
          <li className="mtm">
            <strong><a href="https://blog.axosoft.com/" target="_blank" rel="noopener">Axosoft Blog</a></strong> <small>(2014-2016)</small> <br/>
            Roles: UX + Design + Development
          </li>
          <li className="mtm">
            <strong><a href="https://support.axosoft.com/" target="_blank" rel="noopener">Axosoft</a> and <a href="https://support.gitkraken.com/" target="_blank" rel="noopener">GitKraken</a> Support Sites</strong> <small>(2016)</small> <br/>
            Roles: UX + Design + Development + Project Management
          </li>
          <li className="mtm">
            <strong><a href="https://account.gitkraken.com/" target="_blank" rel="noopener">GitKraken Account Management</a></strong> <small>(2016)</small> <br/>
            Role: Design Consultancy
          </li>
        </ul>

        <h3 className="mtl">Reach out</h3>
        <ul className="clean">
          <li>
            daniel[at]chilblane[dot]com
          </li>
          <li>
            <a href="https://www.linkedin.com/in/chilblane" target="_blank" rel="noopener">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://www.github.com/chilblane" target="_blank" rel="noopener">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/chilblane" target="_blank" rel="noopener">
              Twitter
            </a>
          </li>
        </ul>
        <p className="small"><a href="`https://github.com/chilblane/chilblane.github.io" target="_blank" rel="noopener">View the repository</a> for this site. Built with React.js, Webpack, and Stylus.</p>
      </div>
    </div>
  );
};
