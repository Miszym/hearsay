import React from 'react';
import styled from 'styled-components';
import * as newsImg from '../../../img/newspapers.jpg';
import ArticleContent from '../ArticleContent';

const StyledBox = styled.article`
   width: 100%;
   min-height: 20rem;
   box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.2);
   padding: 1rem;
   margin-bottom: 2rem;
   cursor: pointer;
   img {
      height: 18rem;
      width: 18rem;
      object-fit: cover;
   }
   a {
      width: 100%;
      display: flex;
   }
   :hover {
      opacity: 0.8;
   }
   @media (max-width: 768px) {
      min-height: 12rem;
      img {
         height: 10rem;
         width: 10rem;
      }
   }
`;

const ArticleBox = ({ article }) => {
   return (
      <StyledBox>
         {' '}
         <a href={article.url} target="_blank">
            <img
               src={
                  article.urlToImage && article.urlToImage !== 'null'
                     ? article.urlToImage
                     : newsImg.default
               }
            ></img>
            <ArticleContent article={article}></ArticleContent>
         </a>
      </StyledBox>
   );
};

export default ArticleBox;
