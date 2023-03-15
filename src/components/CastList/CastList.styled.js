import styled from 'styled-components';

export const StyledUl = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  /* justify-content: space-around; */

  & li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 200px;
    padding: 10px 25px;

    background-color: #f0f0f0;

    list-style: none;
    /* border: solid gray 1px; */
    box-shadow: 3px 3px 3px #d6d6d6;

    border-radius: 5px;

    & h3 {
      margin: 0;
      margin-bottom: 5px;
    }

    & p {
      margin: 0;
      margin-bottom: 5px;
      font-size: 18px;
    }

    & img {
      width: 200px;
      height: 300px;
    }
  }
`;
