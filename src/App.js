import React, { useState, useEffect } from "react";
import CountryCard from "./components/countryCard";
import Spinner from "./components/Spinner/Spinner";
import { v4 as uuid_v4 } from "uuid";
import {
  CountriesContainer,
  Main,
  ContinentsAndCountriesContainer,
} from "./AppStyling";
import CountryDetails from "./components/countryDetails";
import SideBar from "./components/sideBar";

import backgroundImage from "./img/map.png";
import "./index.css";
import ErrorCard from "./components/errorCard";

const link = `https://countries.trevorblades.com/`;

const App = () => {
  const [continents, setContinents] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  const [continentCountries, setContinentCountries] = useState([]);
  const [isCountryDetails, setIsCountryDetails] = useState(false);
  const [isLoaded1, setIsLoaded1] = useState(false);
  const [isLoaded2, setIsLoaded2] = useState(true);

  const [countryToDisplay, setCountryToDisplay] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isErrorMessage, setIsErrorMessage] = useState(false);

  const copyOfContinentCountries = [...continentCountries];
  const allContinentsCopy = [...continents];
  const allCountriesCopy = [...allCountries];

  useEffect(() => {
    fetch(link, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        query: `
        query 
        {
          continents{
            name
            code 
            countries{
              name
              code
              phone
              capital
              currency
              languages{
                name
                native
              }
              states{
                name
              }
            }  
          }
        }
     `,
      }),
    })
      .then((response) => response.json())
      .then((data) => setContinents(data.data.continents));
    setIsLoaded1(true);
  }, []);

  useEffect(() => {
    if (continents) {
      const listOfAllCountries = continents.map(({ countries }) => countries);
      setAllCountries(listOfAllCountries);
    }
  }, [continents]);
  const activateSpinner = async () => {
    setIsLoaded2(false);
  };
  const getCountriesOnContinent = async (continentCode) => {
    await activateSpinner();
    await fetch(link, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        query: `
      query {
          continent(code: "${continentCode}"){
            name
            countries{
              name
              phone
              capital
              currency
              code
               languages{
                 name
                 native
               }
            }
          }
        } 
      `,
      }),
    })
      .then((response) => response.json())
      .then((data) => setContinentCountries(data.data.continent.countries))
      .catch((error) => console.log(error));
    setIsLoaded2(true);
  };

  const toggleCountryDetails = () => {
    setIsCountryDetails(!isCountryDetails);
  };
  const toggleErrorMessage = () => {
    setIsErrorMessage(!isErrorMessage);
  };

  const getCountryToDisplay = (countryCode) => {
    const countryToDisplay = copyOfContinentCountries.filter(
      (element) => element.code === countryCode
    );
    toggleCountryDetails();
    setCountryToDisplay(countryToDisplay);
  };

  const findCountryByName = (countryName) => {
    const myCountryName =
      countryName.charAt(0).toUpperCase() + countryName.slice(1).toLowerCase();
    const list = allCountriesCopy.map((element) =>
      element.find((country) => country.name === myCountryName)
    );
    const theCountry = list.filter((element) => element !== undefined);

    setCountryToDisplay(theCountry);
    toggleCountryDetails();

    if (theCountry == false) {
      setIsErrorMessage(true);
      setErrorMessage("Please check COUNTRY NAME spelling");
      setIsCountryDetails(false);
    }
  };

  const findCountryByCode = (countryCode) => {
    const myCountryCode = countryCode.toUpperCase();
    const list = allCountriesCopy.map((element) =>
      element.find((country) => country.code === myCountryCode)
    );
    const theCountry = list.filter((element) => element !== undefined);

    setCountryToDisplay(theCountry);

    toggleCountryDetails();

    if (theCountry == false) {
      setIsErrorMessage(true);
      setErrorMessage("Please check COUNTRY CODE spelling");
      setIsCountryDetails(false);
    }
  };

  const findCountryByPhoneCode = (phoneCode) => {
    const list = allCountriesCopy.map((element) =>
      element.find((country) => country.phone === phoneCode)
    );
    const theCountry = list.filter((element) => element !== undefined);

    setCountryToDisplay(theCountry);

    toggleCountryDetails();

    if (theCountry == false) {
      setIsErrorMessage(true);
      setErrorMessage("Please check PHONE CODE spelling");
      setIsCountryDetails(false);
    }
  };

  const findCountriesByLanguage = (countryLanguage) => {
    const arr = [];
    const myCountryLanguage =
      countryLanguage.charAt(0).toUpperCase() +
      countryLanguage.slice(1).toLowerCase();

    allCountriesCopy.map((element) =>
      element.filter((country) => {
        country.languages.filter((language) => {
          if (language.name.includes(myCountryLanguage)) {
            arr.push(country);
          }
        });
      })
    );

    setCountryToDisplay(arr);
    toggleCountryDetails();

    if (arr === false || searchInput === "") {
      setCountryToDisplay([]);
      setIsCountryDetails(false);
      setIsErrorMessage(true);
      setErrorMessage("Please check LANGUAGE spelling");
    }
  };

  return (
    <Main>
      {(!isLoaded1 || !isLoaded2) && <Spinner />}

      {isErrorMessage && (
        <ErrorCard errorMessage={errorMessage} close={toggleErrorMessage} />
      )}

      {isCountryDetails && countryToDisplay && (
        <CountryDetails
          close={toggleCountryDetails}
          countryToDisplay={countryToDisplay}
        />
      )}

      <SideBar
        getCountriesOnContinent={getCountriesOnContinent}
        allContinentsCopy={allContinentsCopy}
        allCountriesCopy={allCountriesCopy}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        findCountryByName={findCountryByName}
        findCountryByCode={findCountryByCode}
        findCountryByPhoneCode={findCountryByPhoneCode}
        findCountriesByLanguage={findCountriesByLanguage}
        countryToDisplay={countryToDisplay}
      />

      <ContinentsAndCountriesContainer picture={backgroundImage}>
        {(continents || continentCountries) && (
          <CountriesContainer>
            {copyOfContinentCountries.map((element) => (
              <CountryCard
                key={uuid_v4()}
                countryName={element.name}
                countryCode={element.code}
                getCountryToDisplay={getCountryToDisplay}
              />
            ))}
          </CountriesContainer>
        )}
      </ContinentsAndCountriesContainer>
    </Main>
  );
};

export default App;
