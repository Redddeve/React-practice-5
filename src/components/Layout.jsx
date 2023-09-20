import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import { LayoutWrapper, OutletWrapper } from 'styledComponents/Layout.styled';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <LayoutWrapper>
      <NavBar />
      <OutletWrapper>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Outlet />
        </Suspense>
      </OutletWrapper>
    </LayoutWrapper>
  );
};

export default Layout;
