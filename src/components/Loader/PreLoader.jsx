import React, { useEffect } from "react";
import "./preloader.css";
import { preLoaderAnim } from "../../animations";
const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-containerr">
        <img
          src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1668589375/printResort/p_c4i0vt.png"
          alt=""
        />
        <div className="texts-container mt-3">
          <span>CONCEPT &nbsp;</span>
          <span>DESIGN &nbsp;</span>
          <span>PRINT &nbsp;</span>
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
