import { Children } from 'react';
import { useState } from 'react';
import styles from './ClickBlocker.module.css'; // Import as an object
function ClickBlocker({children, clickStyle, onClick  })
{
    return(
        <div id="ClickBlocker"className={clickStyle} onClick={onClick}>
            {children}
        </div>
    )
}
export default ClickBlocker;