import React from "react";
import { ContinentCardWrapper } from "./styling";

const ContinentCard = ({
  continentName,
  getCountriesOnContinent,
  continentCode,
}) => {
  return (
    <ContinentCardWrapper
      onClick={() => getCountriesOnContinent(continentCode)}
    >
      {continentName}
    </ContinentCardWrapper>
  );
};

export default ContinentCard;
