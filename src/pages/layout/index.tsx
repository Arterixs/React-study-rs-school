import { Footer } from 'components/footer/footer';
import { Header } from 'components/header/header';
import { Outlet } from 'react-router-dom';
import styles from './layout.module.css';

export const Layout = () => (
  <div className={styles.wrapper}>
    <Header />
    <main className={styles.main}>
      <Outlet />
    </main>
    <Footer />
  </div>
);
