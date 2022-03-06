import React from "react";
import "./styleLoader.css";




function Loader(props) {
  return (
      <div className="spinner-container">
          <div className="loading-spinner">{props.children}</div>
      </div>
  )
}

export default Loader;
