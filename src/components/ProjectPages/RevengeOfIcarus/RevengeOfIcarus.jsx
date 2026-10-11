import { Children } from 'react';
import { useState } from 'react';
import styles from './RevengeOfIcarus.module.css'; // Import as an object


function RevengeOfIcarus({children})
{
    return(
        <div className={styles.RevengeOfIcarus}>
            This is icarus!            
        </div>
    )
}
export default RevengeOfIcarus;