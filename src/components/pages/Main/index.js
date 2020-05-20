import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ArticleBox from '../../common/ArticleBox';

const StyledMain = styled.section`
   display: flex;
   flex-direction: column;
   margin-top: 2rem;
   min-height: 2rem;
`;

const Main = ({ articles }) => {
   const articleList = articles.map(
      (article) =>
         article &&
         (article.content || article.description) && (
            <ArticleBox key={article.url} article={article}></ArticleBox>
         )
   );
   return <StyledMain>{articleList}</StyledMain>;
};

Main.propTypes = {
   articles: PropTypes.arrayOf(
      PropTypes.shape({
         author: PropTypes.string,
         title: PropTypes.string,
         description: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
         content: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
         url: PropTypes.string,
         urlToImage: PropTypes.string,
         publishedAt: PropTypes.string,
      })
   ),
};

Main.defaultProps = {
   articles: [],
};

export default Main;
