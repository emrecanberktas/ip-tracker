import { useEffect } from "react";
import Map from "./components/map";
import axios from "axios";
import "./App.css";
import Header from "./components/header";
import BlankPage from "./components/blankPage";
import dataStore from "./store";

function App() {
  const data = dataStore((state) => state.data);
  const setData = dataStore((state) => state.setData);
  useEffect(() => {
    axios.get("https://api.ipify.org?format=json").then((res) => {
      axios
        .get(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${
            import.meta.env.VITE_GEOLOCATION_API_KEY
          }&ipAddress=${res.data.ip}`
        )
        .then((res) => {
          setData(res.data);
        });
    });
  }, []);
  if (!data) return <BlankPage />;
  return (
    <div className="app">
      <Header />
      <Map />
    </div>
  );
}

export default App;
