import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  padding: 10px;
  &.active {
    color: red;
  }
`;
