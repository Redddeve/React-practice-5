import styled from 'styled-components';
import { StyledButton } from './Movies.styled';
import { NavLink } from 'react-router-dom';

/* export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`; */

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
`;
export const DescriptionList = styled(StyledList)`
  padding-left: 20px;
`;

export const StyledBox = styled.div`
  > h3 {
    margin-bottom: 12px;
  }
  > ul {
    list-style: disc;
    list-style-position: inside;
  }
`;
export const DescriptionBox = styled(StyledBox)`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  > ul {
    list-style: none;
  }
  > img {
    max-height: 500px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px gray;
  }
`;
export const GoBackButton = styled(StyledButton)`
  width: 140px;
  padding: 10px;
  margin-bottom: 20px;
`;

export const StyledItem = styled.li`
  margin-bottom: 10px;
  > h1,
  > h2,
  > h3 {
    margin-bottom: 12px;
  }
  > p :not(:last-child):after {
    content: ', ';
  }
`;

export const StyledText = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

export const AddLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  padding: 5px 15px;
  margin-bottom: 12px;
  border-radius: 5px;
  &:hover,
  &:focus {
    color: darkblue;
  }
  &.active {
    font-weight: 500;
    color: crimson;
  }
  &:hover:not(.active) {
    background-color: #add8e6;
  }
`;
