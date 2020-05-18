import React from 'react';
import PropTypes, { string } from 'prop-types';
import styled from 'styled-components';

const StyledMain = styled.section`
   background-color: blue;
   height: 100px;
`;

const Main = ({ articles }) => {
   console.log(articles);
   return <StyledMain></StyledMain>;
};

Main.propTypes = {
   articles: PropTypes.arrayOf(
      PropTypes.shape({
         author: PropTypes.string,
         title: PropTypes.string,
         description: PropTypes.string,
      })
   ),
};

Main.defaultProps = {
   articles: [],
};

export default Main;
