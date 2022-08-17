import { NavLink, useLocation } from 'react-router-dom';
import styles from './Navigation.module.css';

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.link}>
          <NavLink
            to="/kapusta-project/reports"
            state={location}
            className={styles.link_report}
          >
            Reports
          </NavLink>
        </li>
        <li className={styles.link}>
          <NavLink
            to="/kapusta-project/expenses"
            state={location}
            className={styles.link_tab}
          >
            Expenses
          </NavLink>
        </li>
        <li className={styles.link}>
          <NavLink
            to="/kapusta-project/income"
            state={location}
            className={styles.link_tab}
          >
            Income
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
