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
    </div>
  );
}
