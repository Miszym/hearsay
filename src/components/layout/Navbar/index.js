import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledNavbar = styled.nav`
   margin: 0.2rem 1rem;
   position: absolute;
   right: 0;
`;

const StyledUl = styled.ul`
   list-style: none;
   font-size: 1rem;
   font-weight: 400;
   display: flex;
`;

const StyledLi = styled.li`
   margin: 0 0.5rem;
   a {
      color: ${(props) => props.theme.colors.colorMain};
      &:hover {
         opacity: 0.8;
      }
   }
`;

const Navbar = () => {
   return (
      <StyledNavbar>
         <StyledUl>
            <StyledLi>
               <Link to="/">home</Link>
            </StyledLi>
            <StyledLi>
               <Link to="/sources">sources</Link>
            </StyledLi>
         </StyledUl>
      </StyledNavbar>
   );
};

export default Navbar;
