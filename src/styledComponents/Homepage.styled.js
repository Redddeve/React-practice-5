import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledList = styled.ul`
  margin-top: 20px;
  list-style: disc;
  list-style-position: inside;
`;
export const StyledItem = styled.li`
  font-size: 1.15rem;
  line-height: 1.5;
`;

export const StyledLink = styled(Link)`
  &:hover,
  &:focus {
    color: tomato;
  }
`;
