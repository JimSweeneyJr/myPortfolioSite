import "./WorkCardStyles.css";

import React from "react";
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <div className="project-card-hover">
      <img src={props.imgsrc} alt="image" />
      <h2 className="project-title">{props.details}</h2>
      </div>
      <div className="pro-details">
        <p>{props.text}</p>
        <p>{props.details}</p>
        <div className="pro-btns">
          <NavLink to={props.view} className="nav-link-btn">
          {props.title}
          </NavLink>
          {/* <NavLink to="url.com" className="btn">
            Source
          </NavLink> */}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;


{/* <h2 className="project-title">{props.title}</h2> */}