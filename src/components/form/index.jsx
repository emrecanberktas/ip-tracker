import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

function Form() {
  const [ipAdress, setIpAdress] = useState("");
  const [location, setLocation] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [isp, setIsp] = useState("");

  useEffect(() => {
    axios.get("https://api.ipify.org?format=json").then((res) => {
      setIpAdress(res.data.ip);
    });
    axios
      .get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${
          import.meta.env.VITE_GEOLOCATION_API_KEY
        }&ipAddress=${ipAdress}`
      )
      .then((res) => {
        console.log(res.data);
        setLocation(
          `${res.data.location.region}, ${res.data.location.country}`
        );
        setTimeZone(`UTC ${res.data.location.timezone}`);
        setIsp(res.data.isp);
      });
  }, [ipAdress]);

  return (
    <div className="form">
      <div className="search-v">
        <input
          type="text"
          className="ip-search"
          placeholder="Search for any IP address or domain"
        />
        <button className="search-btn">
          <img src="assets/icon-arrow.svg" alt="search" />
        </button>
      </div>
      <br />
      <br />
      <div className="card">
        <div>
          <label>IP ADDRESS</label>
          <p>{ipAdress}</p>
        </div>
        <div className="line"></div>
        <div className="card-part">
          <label>LOCATION</label>
          <p>{location}</p>
        </div>
        <div className="line"></div>
        <div className="card-part">
          <label>TIMEZONE</label>
          <p>{timeZone}</p>
        </div>
        <div className="line"></div>
        <div className="card-part">
          <label>ISP</label>
          <p>{isp}</p>
        </div>
      </div>
    </div>
  );
}

export default Form;
