import React from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <img
        onClick={() => navigate("/")}
        className="corona"
        src="corona.png"
      ></img>
      <h1 onClick={() => navigate("/worldometer")}>
        W O R L D O &nbsp; M E T E R
      </h1>
      <h1 onClick={() => navigate("/population")}>P O P U L A T I O N</h1>
    </div>
  );
}
