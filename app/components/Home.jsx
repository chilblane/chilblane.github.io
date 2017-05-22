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
              src={require("./../../static/work/axosoft-app.png")}
              srcSet={{
                "320w": require("./../../static/work/axosoft-app.png"),
                "640w": require("./../../static/work/axosoft-app-medium.png"),
                "1280w": require("./../../static/work/axosoft-app-large.png"),
                "2560w": require("./../../static/work/axosoft-app-xlarge.png"),
              }}
            />
            <figcaption>Axosoft 17 Design Exploration</figcaption>
          </figure>
        </Link>

        <figure className="figure">
          <Image
            alt="Screen capture of Axosoft's blog"
            src={require("./../../static/work/axosoft-blog.jpg")}
            srcSet={{
              "320w": require("./../../static/work/axosoft-blog.jpg"),
              "640w": require("./../../static/work/axosoft-blog-medium.jpg"),
              "1280w": require("./../../static/work/axosoft-blog-large.jpg")
            }}
          />
          <figcaption>Axosoft Blog Redesign</figcaption>
        </figure>

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
        <p className="small"><a href="`https://github.com/chilblane/chilblane.github.io" target="_blank" rel="noopener">View the repository</a> for this site.</p>
      </div>
    </div>
  );
};
