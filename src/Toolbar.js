import React from "react";
import "./Toolbar.css";

const Toolbar = () => {
  return (
    <div className="toolbar-container">
      <div className="toolbar-text"> Toolbar </div>{" "}
      <div
        className="toolbar-button"
        draggable={true}
        onDragStart={(e) => e.dataTransfer.setData("text/plain", "Text")}
      >
        Text{" "}
      </div>{" "}
      <div
        className="toolbar-button"
        draggable={true}
        onDragStart={(e) => e.dataTransfer.setData("text/plain", "Image")}
      >
        Image{" "}
      </div>{" "}
    </div>
  );
};

export default Toolbar;
