import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  margin-left: 20px;
  margin-top: 10px;
  color: black;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;

  :hover {
    color: orangered;
  }
`;

export const BackLink = ({ to, children }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};
