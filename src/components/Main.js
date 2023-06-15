import React from "react";
import styled from "styled-components";
import background from "../assets/background.png"

const Main = () => {
    return (<MainWrapper>Main Component</MainWrapper>)
};

const MainWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em;
  margin-bottom: 2em;
  height: 90vh;
  background-image: url(${background});
  background-size: cover;
`;


export default Main;