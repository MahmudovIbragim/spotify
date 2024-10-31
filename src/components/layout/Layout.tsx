import { Outlet, useLocation } from 'react-router-dom';
import Header from './header/Header';
import scss from './Layout.module.scss';
import Footer from './footer/Footer';
import { useEffect } from 'react';

const Layout = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className={scss.Layout}>
      <Header />
      <main>
        <Outlet />
        {/* comon broo */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
