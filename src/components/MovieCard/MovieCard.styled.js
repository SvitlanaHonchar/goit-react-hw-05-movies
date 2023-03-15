import styled from 'styled-components';

export const StyledSection = styled.section`
  margin-bottom: 10px;
  padding-left: 20px;
  padding-bottom: 10px;
  display: flex;
  gap: 10px;

  box-shadow: 0px 3px 3px #d6d6d6;

  & img {
    width: 250px;
  }
`;

export const StyledDiv = styled.div`
  margin-bottom: 10px;
  padding-left: 20px;
  padding-bottom: 10px;
  display: flex;
  gap: 10px;
  & a {
    text-decoration: none;
  }
  & .info {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 7px;
    height: 35px;
    width: 90px;

    font-weight: 500;
    text-align: center;
    color: black;

    border-radius: 4px;
    border: solid 1px gray;
    background-color: #fae8dc;
    &:hover {
      background-color: #fcdeca;
      cursor: pointer;
    }
  }
`;
