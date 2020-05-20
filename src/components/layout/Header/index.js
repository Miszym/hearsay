import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
   position: fixed;
   z-index: 10;
   top: 0;
   background: radial-gradient(
      circle,
      rgba(85, 122, 148, 1) 1%,
      rgba(45, 81, 122, 1) 92%
   );
   box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.4);
   height: 5rem;
   width: 100vw;
   max-width: 76rem;
   margin: auto;
   font-size: 1rem;
   font-family: ${(props) => props.theme.fonts.fontMain};
   color: ${(props) => props.theme.colors.colorMain};
   a {
      color: ${(props) => props.theme.colors.colorMain};
   }
   h1 {
      padding: 1rem 2rem;
   }
   @media (max-width: 768px) {
      height: 3rem;
      font-size: 0.5rem;
      h1 {
         padding-top: 0.8rem;
      }
   }
`;

const Header = ({ text }) => {
   return (
      <StyledHeader>
         <Link to="/">
            <h1>{text}</h1>
         </Link>
         <Navbar />
      </StyledHeader>
   );
};

Header.defaultProps = {
   text: 'Header',
};

Header.propTypes = {
   text: PropTypes.string,
};

export default Header;
