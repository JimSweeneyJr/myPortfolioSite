import "./AboutContentStyles.css";

import React from "react";
import { Link } from "react-router-dom";
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.webp";

const AboutContent = () => {

  (function () {
    "use strict";
    let item = document.querySelectorAll('.timeline li')

    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function callbackFunc() {
      for (let i = 0; i < item.length; i ++)
        if(isElementInViewport(item[i])) {
          item[i].classList.add('in-view')
        }
    }
    window.addEventListener('load', callbackFunc)
    window.addEventListener('resize', callbackFunc)
    window.addEventListener('scroll', callbackFunc)
  })()

  return (
    <div className="timeline">
      <div className="section">
        <ul>
          <li>
            <div>
              <img src="karpp.png" alt="" />
              <h3>Rober N. Karpp</h3>
              <p>This is where I used to work. At the beginning.</p>
            </div>
          </li>
          <li>
            <div>
              <img src="idi.png" alt="" />
              <h3>IDI</h3>
              <p>This is where I was working next.</p>
            </div>
          </li>
          <li>
            <div>
              <img src="ga.png" alt="" />
              <h3>General Assembly</h3>
              <p>This is where I did a bootcamp.</p>
            </div>
          </li>
          <li>
            <div>
              <img src="protenus.png" alt="" />
              <h3>Protenus</h3>
              <p>This is where I work now.</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={React2} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;


// <h1>Who Am I?</h1>
{/* <p>
Im a react font-end developer. I create responsive secure websites for
my clients.
</p>
<Link to="/contact">
<button className="btn">Contact</button>
</Link> */}