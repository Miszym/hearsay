import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
   position: relative;
   background: radial-gradient(
      circle,
      rgba(85, 122, 148, 1) 1%,
      rgba(45, 81, 122, 1) 92%
   );
   box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.4);
   height: 10rem;
   width: 100%;
   font-size: 2rem;
   font-family: ${(props) => props.theme.fonts.fontMain};
   color: ${(props) => props.theme.colors.colorMain};
   display: flex;
   justify-content: center;
   a {
      color: ${(props) => props.theme.colors.colorMain};
   }
   h1 {
      padding-top: 1rem;
   }
`;

const Header = ({ text }) => {
   return (
      <StyledHeader>
         <Navbar />
         <Link to="/">
            <h1>{text}</h1>
         </Link>
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
