import React from 'react';
import * as loading from '../../../img/loading.gif';
import styled from 'styled-components';

const StyledDiv = styled.div`
   margin: auto;
   width: 3rem;
   img {
      height: 3rem;
      width: 3rem;
   }
`;

const LoadingIndicator = () => {
   return (
      <StyledDiv>
         <img src={loading.default}></img>
      </StyledDiv>
   );
};

export default LoadingIndicator;
