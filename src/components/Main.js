import React from "react";
import styled from "styled-components";

const Main = () => {
    return (<MainWrapper>Main Component</MainWrapper>)
};

const MainWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em;
  margin-bottom: 2em;
  background-color: #fafd7cff;
`;

export default Main;