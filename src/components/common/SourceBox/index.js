import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledBox = styled.article`
   display: flex;
   flex-direction: column;
   position: relative;
   width: 11.5rem;
   min-height: 9rem;
   margin: 1rem 0.5rem 0 0.5rem;
   box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.2);
   padding: 1rem 1rem 3rem 1rem;
   font-family: ${(props) => props.theme.fonts.fontText};
   cursor: pointer;
   &.checked {
      background-color: #bce0b4;
      :after {
         box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
         opacity: 0;
         transition: opacity 0.3s ease-in-out;
      }
   }
   span {
      word-break: break-all;
   }
   h2,
   p {
      width: 9.5rem;
      color: ${(props) => props.theme.colors.colorText};
   }
   a:hover {
      opacity: 0.8;
   }
   :hover {
      div {
         color: green;
      }
   }
`;

const StyledCheck = styled.div`
   position: absolute;
   color: lightgray;
   bottom: 0.5rem;
   right: 0.5rem;
   font-size: 2rem;
   &.checked {
      color: green;
   }
`;

const SourceBox = ({ source, checked, toggleCheck }) => {
   return (
      <StyledBox
         onClick={() => toggleCheck(source.id, checked)}
         className={checked ? 'checked' : ''}
      >
         <a
            href={source.url}
            onClick={(e) => {
               e.stopPropagation();
            }}
            target="_blank"
         >
            <h2>{source.name}</h2>
            <p>{source.description}</p>
            <span>{source.url}</span>
         </a>
         <StyledCheck className={checked ? 'checked' : ''}>
            &#10004;
         </StyledCheck>
      </StyledBox>
   );
};

SourceBox.propTypes = {
   source: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      Description: PropTypes.string,
      url: PropTypes.string,
   }),
   checked: PropTypes.bool,
   toggleCheck: PropTypes.func,
};

export default SourceBox;
