import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import dataStore from "../../store";
import {useTranslation} from "react-i18next";

function Form() {
  const {t} = useTranslation()
  const setData = dataStore((state) => state.setData);
  const data = dataStore((state) => state.data);
  const [input, setInput] = useState(data.ip);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${
          import.meta.env.VITE_GEOLOCATION_API_KEY
        }&ipAddress=${input}`
      )
      .then((res) => {
        setData(res.data);
      });
  };

  return (
    <div className="form">
      <div>
        <form className="search-bar" onSubmit={handleSubmit}>
          <input
            type="text"
            className="ip-search"
            placeholder={t("input")}
            value={input}
            onChange={handleChange}
          />
          <button className="search-btn" type="submit">
            <img src="icon-arrow.svg" alt="search" />
          </button>
        </form>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Form;
