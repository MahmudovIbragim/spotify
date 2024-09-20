import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import scss from './Layout.module.scss';
import Footer from './footer/Footer';

const Layout = () => {
  return (
    <div className={scss.Layout}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
