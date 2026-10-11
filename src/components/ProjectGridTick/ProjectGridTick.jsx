import { Children } from 'react';
import { useState } from 'react';
import styles from './ProjectGridTick.module.css'; // Import as an object
function ProjectGridTick({children, isActive})
{
    return(
        <div className={isActive ? styles.ProjectGridTickActive : styles.ProjectGridTick}></div>
    )
}
export default ProjectGridTick;