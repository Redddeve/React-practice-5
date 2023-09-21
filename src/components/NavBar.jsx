import { HeaderNav, StyledLink } from 'styledComponents/Navbar.styled';

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
