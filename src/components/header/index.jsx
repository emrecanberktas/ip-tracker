import React from "react";
import "./index.css";
import Form from "../form";
import Card from "../card";

function Header() {
  return (
    <div className="header">
      <h1>IP Address Tracker</h1>
      <Form />
      <Card />
    </div>
  );
}

export default Header;
