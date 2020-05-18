import React, { useState, useEffect, use } from 'react';
import { getHeadlines } from '../../../utils/apiFunctions';
import Main from '../../pages/Main';
import { useSelector } from 'react-redux';

const MainContainer = () => {
   const [articles, setArticles] = useState([]);
   const vendors = useSelector((state) => state);

   useEffect(() => {
      async function fetchData() {
         const data = await getHeadlines({ sources: vendors });
         setArticles(data);
      }
      fetchData();
   }, []);

   return <Main articles={articles}></Main>;
};

export default MainContainer;
