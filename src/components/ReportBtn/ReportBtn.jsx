import { NavLink, useLocation } from 'react-router-dom';
import DiagramSvg from 'components/DiagramSvg/DiagramSvg';

import styles from './ReportBtn.module.css';

export const ReportBtn = () => {
  const location = useLocation();
  return (
    <>
      <NavLink
        to="/kapusta-project/reports"
        state={location}
        className={styles.link_report}
      >
        <p> Reports </p>
        <DiagramSvg className={styles.diagramsvg} />
      </NavLink>
    </>
  );
};
