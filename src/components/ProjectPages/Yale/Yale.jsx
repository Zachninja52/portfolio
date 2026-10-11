import { Children } from 'react';
import { useState } from 'react';
import styles from './Yale.module.css'; // Import as an object

function Yale({children})
{
    return(
        <div className={styles.Yale}>
            I'm currently at Yale, studying Computer Science + Economics. I plan to graduate in 2029. Boola Boola Baby! 
        </div>
    )
}
export default Yale;