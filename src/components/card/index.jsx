import React from "react";
import dataStore from "../../store";
import "./index.css";
import {useTranslation} from "react-i18next";

function Card() {
  const {t} = useTranslation()
  const data = dataStore((state) => state.data);
  return (
    <div className="card">
      <div className="card-inside">
        <div>
          <label>{t("card.ip")}</label>
          <p>{data.ip}</p>
        </div>
        <div className="line"></div>
        <div className="card-part">
          <label>{t("card.location")}</label>
          <p>{`${data.location.region},${data.location.country}`}</p>
        </div>
        <div className="line"></div>
        <div className="card-part">
          <label>{t("card.timezone")}</label>
          <p>{data.location.timezone}</p>
        </div>
        <div className="line"></div>
        <div className="card-part">
          <label>{t("card.isp")}</label>
          <p>{data.isp}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
