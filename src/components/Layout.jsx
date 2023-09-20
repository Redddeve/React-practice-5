import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import { LayoutWrapper, OutletWrapper } from 'styledComponents/Layout.styled';
import { Suspense } from 'react';
import Loader from './Loader';

const Layout = () => {
  return (
    <LayoutWrapper>
      <NavBar />
      <OutletWrapper>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </OutletWrapper>
    </LayoutWrapper>
  );
};

export default Layout;
