import { Children } from 'react';
import { useState } from 'react';
import styles from './ProjectWindow.module.css'; // Import as an object

function ProjectWindow({children})
{
    return(
        <div className={styles.ProjectWindow}>
            <div className={styles.ProjectWindowWrapper}>
                {children}
            </div>
        </div>
    )
}
export default ProjectWindow;