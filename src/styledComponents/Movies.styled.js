import styled from 'styled-components';

export const StyledInput = styled.input`
  height: 40px;
  width: 320px;
  padding-left: 10px;
  border-radius: 10px;
  background-color: #fff;
`;

export const StyledButton = styled.button`
  padding: 0px 15px;
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 5px gray;
  background-color: #add8e6;
  transition: all 200ms ease;
  &:hover,
  &:focus {
    background-color: teal;
  }
`;
export const StyledForm = styled.form`
  display: flex;
  gap: 5px;
  font-size: 20px;
`;
