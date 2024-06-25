import React from "react";
import "./index.css";
import Form from "../form";
import Card from "../card";
import {useTranslation} from "react-i18next";

function Header() {
    const {t}  = useTranslation()
  return (
    <div className="header">
      <h1>{t("title")}</h1>
      <Form />
      <Card />
    </div>
  );
}

export default Header;
