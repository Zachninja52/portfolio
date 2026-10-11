import { Children } from 'react';
import { useState } from 'react';
import styles from './ProjectGridTicker.module.css'; // Import as an object

function ProjectGridTicker({children})
{
    return(
        <div className={styles.ProjectGridTicker}>
            
            {children}

        </div>
    )
}
export default ProjectGridTicker;