import styled from 'styled-components';

export const StyledSection = styled.section`
  margin-left: 20px;
  & ul {
    padding-left: 0;
  }
  & li {
    padding-top: 10px;
    list-style: none;
    border-bottom: solid 1px gray;

    & .author {
      font-weight: 600;
      background-color: #fce8ff;
    }

    & .content {
      font-style: italic;
    }
  }
`;
