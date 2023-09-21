import styled from 'styled-components';
import { StyledButton } from './Movies.styled';

export const StyledBox = styled.div`
  > h2 {
    margin-bottom: 15px;
  }
`;

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 0 20px;
`;

export const StyledItem = styled.li`
  margin-bottom: 20px;
  max-width: 250px;
  > h3 {
    margin-bottom: 10px;
  }
  > img {
    width: 250px;
    height: 350px;
    aspect-ratio: auto 250 / 350;
    margin-bottom: 10px;
  }
  > p {
    overflow-wrap: break-word;
  }
`;

export const LoadMoreButton = styled(StyledButton)`
  display: block;
  width: 140px;
  padding: 10px;
  margin: 0 auto;
`;
