import React, { useState, useEffect } from 'react';
import { getHeadlines } from '../../../utils/apiFunctions';
import Main from '../../pages/Main';
import Error from '../../pages/Error';
import ButtonText from '../../common/ButtonText';
import { useSelector } from 'react-redux';
import LoadingIndicator from '../../common/LoadingIndicator';

const MainContainer = () => {
   const [articles, setArticles] = useState([]);
   const [page, setPage] = useState(1);
   const [totalResults, setTotalResults] = useState(0);
   const [isLoading, setIsLoading] = useState(false);
   const userSources = useSelector((state) => state);

   useEffect(() => {
      fetchArticles(page);
   }, []);

   const fetchArticles = async (page) => {
      setIsLoading(true);
      try {
         const data = await getHeadlines({
            sources: userSources,
            page,
         });
         setArticles((oldArticles) => [...oldArticles].concat(data.articles));
         setTotalResults(data.totalResults);
      } catch (error) {
         console.error(error);
         setArticles(false);
      } finally {
         setIsLoading(false);
      }
   };

   const handleNextPage = () => {
      fetchArticles(page + 1);
      setPage((currentPage) => currentPage + 1);
   };

   return articles ? (
      <>
         <Main articles={articles}></Main>
         {isLoading && <LoadingIndicator></LoadingIndicator>}
         {totalResults > articles.length && (
            <ButtonText onClick={handleNextPage}>more news...</ButtonText>
         )}
      </>
   ) : (
      <Error></Error>
   );
};

export default MainContainer;
