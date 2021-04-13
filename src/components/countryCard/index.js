import React from "react";
import { Card } from "antd";

const CountryCard = ({ countryName, countryCode, getCountryToDisplay }) => {
  return (
    <Card
      style={{
        width: "250px",
        flexWrap: "flex-wrap",
        margin: "15px",
        cursor: "pointer",
        fontSize: "21px",
        textAlign: "center",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
      }}
      onClick={() => getCountryToDisplay(countryCode)}
    >
      <h4 style={{ backgroundOpacity: "rgba(255,0,0,0.4)" }}>{countryName}</h4>
    </Card>
  );
};

export default CountryCard;
