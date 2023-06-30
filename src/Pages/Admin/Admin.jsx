import React, { useState } from "react";
import "./admin.css";
import {  useNavigate } from "react-router-dom";
const Admin = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    if (userId === "admin") {
      if (password === "admin") {
        navigate("/abcdefghjobdata");
      } else {
        alert("Wrong Password");
      }
    } else {
      alert("Wrong User Id");
    }
  };


  return (
    <div className="container-fluid admin">
      <div className="container adminDiv">
        <div className="loginBox">
          <h2>Admin Login</h2>
          <div className="inputBox">
            <div>
              <label>User Id</label>
              <input
                type="text"
                onChange={(e) => setUserId(e.target.value)}
                className="adminInputs"
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="adminInputs"
              />
            </div>
            <button className="adminFormBtn" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
