import { Children } from 'react';
import { useState } from 'react';
import styles from './VCS.module.css'; // Import as an object

function VCS({children})
{
    return(
        <div className={styles.VCS}>
            <div>VCS is my game design team.
            We're a 5 person operation, 
            and made our first sale in 2024. We've made 7 games so far, all available right</div>
            <a href="https://voidcoffeestudios.itch.io">here!</a>
        </div>
    )
}
export default VCS;