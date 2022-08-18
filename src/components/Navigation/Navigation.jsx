import { NavLink, useLocation } from 'react-router-dom';
import styles from './Navigation.module.css';

import DiagramSvg from 'components/DiagramSvg/DiagramSvg';

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.link_btn_report}>
          <NavLink
            to="/kapusta-project/reports"
            state={location}
            className={styles.link_report}
          >
            <p> Reports </p>
            <DiagramSvg className={styles.diagramsvg} />
          </NavLink>{' '}
        </li>
        <div className={styles.btn_overlap}>
          <li className={styles.link_btn}>
            <NavLink
              to="/kapusta-project/expenses"
              state={location}
              className={({ isActive }) =>
                isActive
                  ? `${styles.link_tab} ${styles.active}`
                  : `${styles.link_tab}`
              }
            >
              Expenses
            </NavLink>
          </li>
          <li className={styles.link_btn}>
            <NavLink
              to="/kapusta-project/income"
              state={location}
              className={({ isActive }) =>
                isActive
                  ? `${styles.link_tab_inc} ${styles.active}`
                  : `${styles.link_tab_inc}`
              }
            >
              Income
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navigation;
