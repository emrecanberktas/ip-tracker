import { useState } from "react";
import Form from "./components/form";
import Map from "./components/map";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>IP Adress Tracker</h1>
      <Form />
      <Map />
    </div>
  );
}

export default App;
