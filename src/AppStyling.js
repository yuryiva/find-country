import styled from "styled-components";

export const Main = styled.div`
  width: -webkit-fill-available;
  height: -webkit-fill-available;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ContinentsAndCountriesContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: ${(p) => `url(${p.picture})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: scroll;
`;
export const CountriesContainer = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
