import { Children } from 'react';
import styles from './ProjectGrid.module.css'; // Import as an object
function ProjectGrid({children, info = ""}) {
  return (
    
    <div className={styles.ProjectGridPadder}>
      <div className={styles.ProjectGridHeader}>{info}</div>
        <div className={styles.ProjectGrid}>
            {children}
        </div>
    </div>
  );
}
export default ProjectGrid;