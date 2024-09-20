import { useEffect, useState } from 'react';
import scss from './Home.module.scss';

const Home = () => {
  const [token, setToken] = useState(() => localStorage.getItem('token') || '');

  useEffect(() => {
    if (!token && window.location.hash) {
      const newToken = window.location.hash
        .substring(1)
        .split('&')
        .find(param => param.startsWith('access_token'))
        ?.split('=')[1];

      if (newToken) {
        setToken(newToken);
        localStorage.setItem('token', newToken);
      }
    }
  }, [token]);

  return (
    <section className={scss.Home}>
      <div className='container'></div>
    </section>
  );
};

export default Home;
