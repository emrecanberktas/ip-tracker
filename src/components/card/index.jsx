import React from "react";
import dataStore from "../../store";
import "./index.css";

function Card() {
  const data = dataStore((state) => state.data);
  return (
    <div className="card">
      <div className="card-inside">
        <div>
          <label>IP ADDRESS</label>
          <p>{data.ip}</p>
        </div>
        <div className="line"></div>
        <div className="card-part">
          <label>LOCATION</label>
          <p>{`${data.location.region},${data.location.country}`}</p>
        </div>
        <div className="line"></div>
        <div className="card-part">
          <label>TIMEZONE</label>
          <p>{data.location.timezone}</p>
        </div>
        <div className="line"></div>
        <div className="card-part">
          <label>ISP</label>
          <p>{data.isp}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
