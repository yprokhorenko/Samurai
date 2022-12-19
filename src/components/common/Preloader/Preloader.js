import preloader from "../../../assets/images/preloader.svg";
import React from "react";

let Preloader = (props) => {
  return (
    <div style={{ position: "absolute", left: "550px" }}>
      <img src={preloader} style={{ width: "100px", height: "100px" }} />
    </div>
  );
};

export default Preloader;
