import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = () => {
  const NavArr = [
    {
      src: '/',
      title: 'Home',
    },
    {
      src: '/movies',
      title: 'Movies',
    },
  ];
  return (
    <>
      <HeaderNav>
        {NavArr.map(({ src, title }) => (
          <StyledLink to={src} key={src}>
            {title}
          </StyledLink>
        ))}
      </HeaderNav>
    </>
  );
};

export default NavBar;

export const HeaderNav = styled.nav`
  min-width: 100vw;
  display: flex;
  align-items: center;
  box-shadow: 0px 4px 8px gray;
  gap: 12px;
  padding: 16px;
  margin-bottom: 16px;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px;
  border-radius: 4px;
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  color: black;

  &.active {
    color: crimson;
  }
  &:hover:not(.active) {
    background-color: lightblue;
  }
`;
