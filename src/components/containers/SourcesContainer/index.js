import React, { useState, useEffect } from 'react';
import { getSources } from '../../../utils/apiFunctions';
import Sources from '../../pages/Sources';
import Error from '../../pages/Error';

const MainContainer = () => {
   const [sources, setSources] = useState([]);

   useEffect(() => {
      fetchSources();
   }, []);

   const fetchSources = async () => {
      try {
         const data = await getSources();
         setSources(data);
      } catch (error) {
         console.error(error);
         setSources(false);
      }
   };

   return sources ? <Sources sources={sources}></Sources> : <Error></Error>;
};

export default MainContainer;
