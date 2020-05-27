import React from 'react';
import styled from 'styled-components';
import * as newsImg from '../../../img/newspapers.jpg';
import PropTypes from 'prop-types';

const StyledImageBox = styled.div`
   height: 18rem;
   width: 18rem;
   img {
      height: 18rem;
      width: 18rem;
      object-fit: cover;
   }

   @media (max-width: 768px) {
      height: 10rem;
      width: 10rem;
      img {
         height: 10rem;
         width: 10rem;
      }
   }
`;

const ImageBox = ({ url }) => {
   return (
      <StyledImageBox>
         <img
            src={url && url !== 'null' ? url : newsImg.default}
            alt="newsImg"
         ></img>
      </StyledImageBox>
   );
};

ImageBox.propTypes = {
   url: PropTypes.string,
};

ImageBox.defaultProps = {
   url: newsImg.default,
};

export default ImageBox;
