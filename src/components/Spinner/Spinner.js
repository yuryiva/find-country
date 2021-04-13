import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  position: fixed;
  z-index: 10;
  width: 100px;
  height: 100px;
  top: 50%;
  left: 50%;
  margin-top: -50px !important;
  margin-left: 100px;
`;

export default function Spinner() {
  return (
    <Wrapper className="lds-spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Wrapper>
  );
}
