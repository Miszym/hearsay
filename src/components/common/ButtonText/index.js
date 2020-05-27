import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.div`
   width: 12rem;
   height: 3rem;
   font-size: 2rem;
   -webkit-text-fill-color: transparent;
   background: radial-gradient(
      circle,
      rgba(85, 122, 148, 1) 1%,
      rgba(45, 81, 122, 1) 92%
   );
   background-clip: text;
   cursor: pointer;
   :hover {
      opacity: 0.8;
   }
`;
const ButtonText = ({ children, onClick }) => {
   return (
      <StyledButton data-testid="buttonText" onClick={onClick}>
         {children}
      </StyledButton>
   );
};

ButtonText.propTypes = {
   onClick: PropTypes.func,
};

export default ButtonText;
