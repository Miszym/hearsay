import React from 'react';
import SourceBox from '../../common/SourceBox';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addSource, removeSource } from '../../../redux/sourcesReducer';

const StyledSources = styled.section`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
`;

const Sources = ({ sources }) => {
   const userSources = useSelector((state) => state);
   const dispatch = useDispatch();

   const handleToggle = (id, checked) => {
      if (checked) {
         dispatch(removeSource(id));
      } else {
         dispatch(addSource(id));
      }
   };

   const SourcesList = sources.map((source) => (
      <SourceBox
         key={source.id}
         source={source}
         toggleCheck={handleToggle}
         checked={userSources.includes(source.id)}
      ></SourceBox>
   ));
   return <StyledSources>{SourcesList}</StyledSources>;
};

export default Sources;
