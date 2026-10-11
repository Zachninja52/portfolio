import { Children } from 'react';
import { useState } from 'react';
import styles from './Icon.module.css'; // Import as an object
function Icon({children,imagePath,onClick,toolTip =""})
{
    return(
        <div className={styles.Icon}>
            {toolTip ? <div className={styles.IconToolTip}>{toolTip}</div> : null}
            <img className={styles.IconImage} src={imagePath} onClick={onClick}></img>
        </div>
    )
}
export default Icon;