import { Children } from 'react';
import styles from './ProjectGridButton.module.css'; // Import as an object
const distancefromSides = 39;
function ProjectGridButton({left=true, onClick}) {

  if (left == true)
  {
    return (
    <div className={styles.ProjectGridButton} style={{ transform: `translateX(-${distancefromSides}vw)`}} onClick={onClick}>
    <div class={styles.TriangleLeft}></div>

    </div>
    );
  }
  else
  {
    return (
    <div className={styles.ProjectGridButton} style={{ transform: `translateX(${distancefromSides}vw)`}}onClick={onClick}>
    <div class={styles.TriangleRight}></div>

    </div>
    )
  }

}

export default ProjectGridButton;