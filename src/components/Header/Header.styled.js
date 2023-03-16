import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  padding: 10px;
  font-size: 24px;
  font-weight: 500;
  text-decoration: none;

  &.active {
    color: red;
  }

  &:hover {
    color: #fc5328;
  }
  &:focus {
    color: #fc5328;
  }
`;

export const StyledHeader = styled.header`
  padding: 10px;
  box-shadow: 0px 3px 3px #d6d6d6;
`;
