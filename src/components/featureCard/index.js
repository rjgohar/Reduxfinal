import React from "react";
import "./styles.css";
import img1 from "../../assets/ab.png";

const Card = ({ title, image }) => {
  return (
    <div className="outer-container">
      <div className="card-container">
        <img className="image" src={img1} alt="" />
        <h3 className="artwork">{title}</h3>
        <div className="circle-picture">
          <img className="Ellipse2" src={image} alt="img" />
        </div>
        <div className="last-end">
          <div className="last-content">
            <p>Current Bid</p>
            <p>1.18LBRT</p>
          </div>
          <div className="last-content">
            <p>Ending in</p>
            <p>10 Hours</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
