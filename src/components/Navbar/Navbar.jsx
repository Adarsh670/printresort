import React, { useState } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
const Navbar = () => {
  const [openmenu, setOpenmenu] = useState(false);
  return (
    <>
      <div className="mobilenav">
        <header className="header">
          <div className="navcontainer">
            <div className="navrow">
              <div className="logo">
                <Link to="/">
                  <img
                    src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1668589375/printResort/p_c4i0vt.png"
                    width="45px"
                    alt=""
                  />
                </Link>
              </div>
              <div
                className="nav-toggle"
                onClick={() => {
                  setOpenmenu(!openmenu);
                }}
              >
                <AiOutlineMenu style={{ color: "#fff", fontSize: "25px" }} />
              </div>
            </div>
          </div>
        </header>
        <div
          className={`nav-overlay ${openmenu ? "open" : ""}`}
          onClick={() => {
            setOpenmenu(!openmenu);
          }}
        ></div>
        {/* <div className="nav-overlay"></div> */}
        <nav className={`navv ${openmenu ? "open" : ""}`}>
          <div className="head">
            <strong>Menu</strong>
            <div
              className="close"
              onClick={() => {
                setOpenmenu(!openmenu);
              }}
            >
              &times;
            </div>
          </div>
          <ul>
            <li
              onClick={() => {
                setOpenmenu(!openmenu);
              }}
            >
              <Link to="/">home</Link>
            </li>
            <li
              onClick={() => {
                setOpenmenu(!openmenu);
              }}
            >
              <Link to="/about">about</Link>
            </li>

            <li
              onClick={() => {
                setOpenmenu(!openmenu);
              }}
            >
              <Link to="/portfolio">portfolio</Link>
            </li>

            <li
              onClick={() => {
                setOpenmenu(!openmenu);
              }}
            >
              <Link to="/contact">contact</Link>
            </li>
            <li
              onClick={() => {
                setOpenmenu(!openmenu);
              }}
            >
              <Link to="/joborder">Job Order</Link>
            </li>
            <li
              onClick={() => {
                setOpenmenu(!openmenu);
              }}
            >
              <Link to="/admin">Admin</Link>
            </li>
            
          </ul>
        </nav>
      </div>

      <div className="container">
        <div className="desktop-nav">
          <div className="desktop-navlinks">
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/about">ABOUT</Link>
              </li>
              <li>
                <Link to="/portfolio">PORTFOLIO</Link>
              </li>

              <li>
                <Link to="/contact">CONTACT US</Link>
              </li>
              <li>
                <Link to="/joborder" className="job-order">
                  JOB-ORDER
                </Link>
              </li>
            </ul>
            <div>
              <Link to="/admin" className="adminBtn">
                <FaUserAlt /> Admin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
