import React from 'react';
import styled from 'styled-components';
import ImageBox from '../ImageBox';
import ArticleContent from '../ArticleContent';
import PropTypes from 'prop-types';

const StyledBox = styled.article`
   width: 100%;
   min-height: 20rem;
   box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.2);
   padding: 1rem;
   margin-bottom: 2rem;
   cursor: pointer;

   a {
      width: 100%;
      display: flex;
   }
   :hover {
      opacity: 0.8;
   }
   @media (max-width: 768px) {
      min-height: 12rem;
   }
`;

const ArticleBox = ({ article }) => {
   return (
      <StyledBox>
         <a data-testid="articleLink" href={article.url} target="_blank">
            <ImageBox url={article.urlToImage} />
            <ArticleContent article={article}></ArticleContent>
         </a>
      </StyledBox>
   );
};

ArticleBox.propTypes = {
   article: PropTypes.shape({
      author: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
      content: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
      url: PropTypes.string,
      urlToImage: PropTypes.string,
      publishedAt: PropTypes.string,
   }),
};

ArticleBox.defaultProps = {
   article: {},
};

export default ArticleBox;
