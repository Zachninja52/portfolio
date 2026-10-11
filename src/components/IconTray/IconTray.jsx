import { Children } from 'react';
import { useState } from 'react';
import styles from './IconTray.module.css'; // Import as an object
import Icon from '../Icon/Icon';

import linkedin from '../../assets/Linkedin.png';
import phone from '../../assets/Phone.png';
import email from '../../assets/Email.png';
import github from '../../assets/Github.png';

function IconTray({children})
{
    return(
        <div className={styles.IconTray}>
            <Icon imagePath={email}toolTip='zachariah.lima@yale.edu'/>
            <Icon imagePath={linkedin} toolTip="Click to check out my Linkedin!"onClick={() => window.open("https://www.linkedin.com/in/zachariah-lima-72a448375","_blank","noopener,noreferrer")}/>
            <Icon imagePath={github} toolTip='Click to check out my Github!' onClick={() => window.open("https://github.com/Zachninja52","_blank","noopener,noreferrer")}/>
        </div>)
}
export default IconTray;