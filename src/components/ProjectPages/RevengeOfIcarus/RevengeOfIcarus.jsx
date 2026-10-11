import { Children } from 'react';
import { useState } from 'react';
import styles from './RevengeOfIcarus.module.css'; // Import as an object


function RevengeOfIcarus({children})
{
    return(
        <div className={styles.RevengeOfIcarus}>
            <div>The Revenge of Icarus is the first non-competition project I made with my team, Void Coffee Studios.</div>

            <div> Check it out <a href="https://voidcoffeestudios.itch.io/the-revenge-of-icarus" >here!</a>.  </div>         
        </div>
    )
}
export default RevengeOfIcarus;