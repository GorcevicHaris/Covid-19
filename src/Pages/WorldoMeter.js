import React from "react";
import "./worldometer.css";
export default function WorldoMeter() {
  return (
    <div className="worldometer">
      <div className="mid">
        <div
          style={{ fontSize: "23px", fontWeight: "100", color: "gray" }}
          className="info"
        >
          WORLD POPULATION
        </div>
        <div className="info">8,078,116,519Current World Population</div>
        <div className="info">126,520,453Births this year</div>
        <div className="info">57,249,211Deaths this year</div>
        <div className="info">69,271,386Net population growth this year</div>
        <div
          style={{ fontSize: "23px", fontWeight: "100", color: "gray" }}
          className="info"
        >
          GOVERNMENT & ECONOMICS
        </div>
        <div className="info">81,139,036Cars produced this year</div>
        <div className="info">148,048,035Bicycles produced this year</div>
        <div className="info">220,535,735Computers produced this year</div>
        <div
          style={{ fontSize: "23px", fontWeight: "100", color: "gray" }}
          className="info"
        >
          SOCIETY & MEDIA
        </div>
        <div className="info">2,636,534New book titles published this year</div>
        <div className="info">202,324,038 tv sets sold worldwide this year</div>
        <div
          style={{ fontSize: "23px", fontWeight: "100", color: "gray" }}
          className="info"
        >
          ENVIRONMENT
        </div>
        <div className="info">4,899,897Forest loss this year (hectares)</div>
        <div className="info">
          6,596,600Land lost to soil erosion this year (ha)
        </div>
        <div className="info">34,476,105,303CO2 emissions this year (tons)</div>
        <div className="info">
          11,306,348Desertification this year (hectares)
        </div>
        <div className="info">
          9,226,345Toxic chemicals released in the environment this year (tons)
        </div>
        <div
          style={{ fontSize: "23px", fontWeight: "100", color: "gray" }}
          className="info"
        >
          FOOD
        </div>
        <div className="info">
          874,878,601Undernourished people in the world
        </div>
        <div className="info">1,753,935,919Overweight people in the world</div>
        <div className="info">850,162,881Obese people in the world</div>

        <div
          style={{ fontSize: "23px", fontWeight: "100", color: "gray" }}
          className="info"
        >
          WATER
        </div>
        <div className="info">
          4,341,230,967Water used this year (million L)
        </div>
        <div className="info">
          793,382Deaths caused by water related diseases this year
        </div>
        <div className="info">
          767,742,404People with no access to a safe drinking water source
        </div>

        <div
          style={{ fontSize: "23px", fontWeight: "100", color: "gray" }}
          className="info"
        >
          ENERGY
        </div>
        <div className="info">
          366,717,845- from non-renewable sources (MWh)
        </div>
        <div className="info">64,880,513- from renewable sources (MWh)</div>
        <div className="info">
          2,699,899,222,857Solar energy striking Earth today (MWh){" "}
        </div>
        <div className="info">1,383,698,091,624Oil left (barrels) </div>
        <div className="info">14,430Days to the end of oil (~40 years)</div>
        <div className="info">1,071,132,447,923Natural Gas left (boe)</div>
        <div className="info">56,375Days to the end of natural gas</div>
        <div className="info">4,278,747,730,497Coal left (boe)</div>
        <div className="info">147,543Days to the end of coa</div>
      </div>
    </div>
  );
}
