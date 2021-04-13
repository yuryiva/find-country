import React from "react";
import { BlackBox } from "./styling";
import { Card } from "antd";
import { v4 as uuid_v4 } from "uuid";

const ErrorCard = ({ close, errorMessage }) => {
  return (
    <BlackBox
      onClick={() => close()}
      style={{ flexWrap: "wrap", overflow: "scroll" }}
    >
      <Card style={{ width: 400, textAlign: "center", height: 200 }}>
        <h2 style={{ paddingTop: "15%" }}>{errorMessage}</h2>
      </Card>
    </BlackBox>
  );
};

export default ErrorCard;

// {countryToDisplay.map((element) => (
//   <Card
//     key={uuid_v4()}
//     title={`${element.name} (${element.code})`}
//     style={{
//       width: "350px",
//       textAlign: "center",
//       margin: "15px",
//       fontSize: "20px",
//     }}
//     headStyle={{ fontSize: "23px" }}
//   >
//     <p>Capital: {element.capital}</p>
//     <p>Phone code: {element.phone}</p>
//     <p>Currency: {element.currency}</p>
//     <p>
//       Languages: {element.languages.map((item) => item.name).join(", ")}
//     </p>
//     <p>
//       Native languages:{" "}
//       {element.languages.map((item) => item.native).join(", ")}
//     </p>
//   </Card>
// ))}
