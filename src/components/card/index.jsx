import React from "react";
import dataStore from "../../store";
import "./index.css";

function Card() {
  const data = dataStore((state) => state.data);
  if (!data) return <div>Loading..</div>;
  console.log(data);
  return (
    <div className="card">
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
  );
}

export default Card;
