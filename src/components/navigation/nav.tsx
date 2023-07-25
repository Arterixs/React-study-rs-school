import { NavLink } from 'react-router-dom';
import { Routers } from '../../types/enums/routers';
import styles from './nav.module.css';

export const Nav = () => (
  <nav className={styles.nav}>
    <ul className={styles.list}>
      <NavLink to={Routers.ABOUT_PAGE} className={styles.item} data-testid='about'>
        About
      </NavLink>
      <NavLink to={Routers.MAIN_PAGE} className={styles.item} data-testid='main'>
        main
      </NavLink>
      <NavLink to={Routers.FORM} className={styles.item} data-testid='form'>
        form
      </NavLink>
    </ul>
  </nav>
);
