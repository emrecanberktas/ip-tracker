import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import dataStore from "../../store";

function Form() {
  const setData = dataStore((state) => state.setData);
  const data = dataStore((state) => state.data);
  console.log(data);
  useEffect(() => {
    axios.get("https://api.ipify.org?format=json").then((res) => {
      axios
        .get(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${
            import.meta.env.VITE_GEOLOCATION_API_KEY
          }&ipAddress=${res.data.ip}`
        )
        .then((res) => {
          console.log(res.data);
          setData(res.data);
        });
    });
  }, []);

  const handleChange = (e) => {
    setData({ ...data, ip: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${
          import.meta.env.VITE_GEOLOCATION_API_KEY
        }&ipAddress=${data.ip}`
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  };

  if (!data) return <div>Loading...</div>;

  return (
    <div className="form">
      <div className="search-v">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="ip-search"
            placeholder="Search for any IP address or domain"
            value={data.ip}
            onChange={handleChange}
          />
          <button
            className="search-btn"
            type="submit"
            onClick={console.log("clicked")}
          >
            <img src="assets/icon-arrow.svg" alt="search" />
          </button>
        </form>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Form;
