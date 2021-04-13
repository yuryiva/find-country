import React from "react";
import { BlackBox } from "./styling";
import { Card } from "antd";
import { v4 as uuid_v4 } from "uuid";

const CountryDetails = ({ close, countryToDisplay }) => {
  return (
    <BlackBox
      onClick={() => close()}
      style={{ flexWrap: "wrap", overflow: "scroll" }}
    >
      {countryToDisplay.map((element) => (
        <Card
          key={uuid_v4()}
          title={`${element.name} (${element.code})`}
          style={{
            width: "350px",
            textAlign: "center",
            margin: "15px",
            fontSize: "20px",
          }}
          headStyle={{ fontSize: "23px" }}
        >
          <p>Capital: {element.capital}</p>
          <p>Phone code: {element.phone}</p>
          <p>Currency: {element.currency}</p>
          <p>
            Languages: {element.languages.map((item) => item.name).join(", ")}
          </p>
          <p>
            Native languages:{" "}
            {element.languages.map((item) => item.native).join(", ")}
          </p>
        </Card>
      ))}
    </BlackBox>
  );
};

export default CountryDetails;
