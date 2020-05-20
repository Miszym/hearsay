import React, { useState, useEffect } from 'react';
import { getSources } from '../../../utils/apiFunctions';
import Sources from '../../pages/Sources';
import Error from '../../pages/Error';
import LoadingIndicator from '../../common/LoadingIndicator';

const SourcesContainer = () => {
   const [sources, setSources] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
      fetchSources();
   }, []);

   const fetchSources = async () => {
      setIsLoading(true);
      try {
         const data = await getSources();
         setSources(data);
      } catch (error) {
         console.error(error);
         setSources(false);
      } finally {
         setIsLoading(false);
      }
   };

   return (
      <>
         {sources ? <Sources sources={sources}></Sources> : <Error></Error>}
         {isLoading && <LoadingIndicator></LoadingIndicator>}
      </>
   );
};

export default SourcesContainer;
