import styled from 'styled-components';

export const StyledForm = styled.form`
  margin-left: 20px;
  margin-top: 20px;

  & input {
    margin-right: 10px;

    width: 250px;
    height: 30px;

    border-radius: 4px;
  }

  & button {
    height: 35px;
    width: 75px;
    border-radius: 4px;
    background-color: #fae8dc;
    &:hover {
      background-color: #fcdeca;
      cursor: pointer;
    }
  }
`;
