import styled from "styled-components";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo src={logo} alt="Rick and Morty Memory Game" />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em;
  margin-bottom: 2em;
  background-color: black;
`;

const Logo = styled.img`
  height: 80px;
`;

export default Header;
