import React from "react";
import "./card.css";
function Card({ product, index }) {
  return (
    <div className="card">
      <div className="div">{product.country_namem}</div>
      <div className="div">{product.cases}</div>
      <div className="div">{product.new_cases}</div>
      <div className="div">{product.deaths}</div>
      <div className="div">{product.new_deaths}</div>
      <div className="div">{product.total_recovered}</div>
      <div className="div">{product.active_cases}</div>
      <div className="div">{product.serious_critical}</div>
      <div className="div">{product.total_cases_per_1m_population}</div>
      <div className="div">{product.deaths_per_1m_population}</div>
      <div className="div">{product.total_tests}</div>
      <div className="div">{product.tests_per_1m_population}</div>
    </div>
  );
}

export default Card;
