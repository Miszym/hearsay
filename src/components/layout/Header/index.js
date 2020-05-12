import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
   background: radial-gradient(
      circle,
      rgba(85, 122, 148, 1) 1%,
      rgba(45, 81, 122, 1) 92%
   );
   height: 10rem;
   width: 100%;
   font-size: 4rem;
   font-family: 'Montserrat Alternates', sans-serif;
   color: ${(props) => props.theme.colorMain};
   text-align: center;
`;

const Header = ({ text, theme }) => {
   console.log(theme);
   return <StyledHeader>{text}</StyledHeader>;
};

Header.defaultProps = {
   text: 'Header',
};

export default Header;
