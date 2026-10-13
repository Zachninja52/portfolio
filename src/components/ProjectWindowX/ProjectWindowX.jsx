import { Children } from 'react';
import { useState } from 'react';
import styles from './ProjectWindowX.module.css'; // Import as an object
function ProjectWindowX({children, onClick})
{
    return(
        <div className={styles.ProjectWindowXWrapper}>
            <div className={styles.ProjectWindowX} onClick={onClick}>
            X
            </div>
        </div>
    )
}
export default ProjectWindowX;