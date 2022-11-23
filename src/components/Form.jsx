import React, { useState, useEffect } from "react";
import axios from "axios";

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
    <div>
      <form>
        <input type="text" placeholder="Search for any IP address or domain" />
      </form>
    </div>
  );
}

export default Form;
