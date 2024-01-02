import React from "react";
import "./Website.css";

const Website = ({ items, onDrop }) => {
  return (
    <div
      className="website-container"
      onDrop={(e) => onDrop(e)}
      onDragOver={(e) => e.preventDefault()}
    >
      <div className="header">
        <h2> Website Editor </h2>{" "}
        <button className="save-button"> Save </button>{" "}
      </div>{" "}
      <div className="content">
        {" "}
        {items.map((item, index) => (
          <div key={index}> {item} </div>
        ))}{" "}
      </div>{" "}
    </div>
  );
};

export default Website;
