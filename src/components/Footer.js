import styled from "styled-components";
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <FooterWrapper>
      Michael Perkins
      <NavWrapper>
        <a href="https://github.com/michaperki"><FaGithub /></a>
      </NavWrapper>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em;
  background-color: black;
  color: white;
`;

const NavWrapper = styled.nav`
  padding-left: 2em;
  a {
    color: white;
  }
`;

export default Footer;
