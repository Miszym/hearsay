import React from 'react';
import PropTypes, { string } from 'prop-types';
import styled from 'styled-components';
import ArticleBox from '../../common/ArticleBox';

const StyledMain = styled.section`
   display: flex;
   flex-direction: column;
   margin-top: 2rem;
   min-height: 10rem;
`;

const Main = ({ articles }) => {
   const articleList = articles.map((article) => (
      <ArticleBox key={article.url} article={article}></ArticleBox>
   ));
   return <StyledMain>{articleList}</StyledMain>;
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
