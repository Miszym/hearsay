import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
   position: relative;
   background: radial-gradient(
      circle,
      rgba(85, 122, 148, 1) 1%,
      rgba(45, 81, 122, 1) 92%
   );
   box-shadow: 0px -10px 20px 0px rgba(0, 0, 0, 0.4);
   height: 10rem;
   width: 100%;
   display: flex;
   justify-content: center;
   margin-top: 1rem;
   a {
      color: ${(props) => props.theme.colors.colorMain};
      :hover {
         opacity: 0.8;
      }
   }
   h4 {
      position: absolute;
      bottom: 1rem;
      left: 1rem;
      font-size: 1rem;
      font-family: ${(props) => props.theme.fonts.fontText};
      color: ${(props) => props.theme.colors.colorMain};
   }
`;

const Footer = () => {
   return (
      <StyledFooter>
         <h4>
            Created with{' '}
            <a target="_blank" href="https://newsapi.org/">
               News API
            </a>
         </h4>
      </StyledFooter>
   );
};

export default Footer;
