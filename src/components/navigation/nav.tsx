import { NavLink } from 'react-router-dom';
import { Routers } from '../../utils/enums/routers';
import styles from './nav.module.css';

export const Nav = () => (
  <nav className={styles.nav}>
    <ul className={styles.list}>
      <NavLink to={Routers.ABOUT_PAGE} className={styles.item}>
        About
      </NavLink>
      <NavLink to={Routers.MAIN_PAGE} className={styles.item}>
        main
      </NavLink>
    </ul>
  </nav>
);
