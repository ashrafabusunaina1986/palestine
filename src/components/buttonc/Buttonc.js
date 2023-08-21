import React from 'react'
import styles from './button.module.css'

function Buttonc({ txt, click = '', s = false }) {
    return (
        <button onClick={click}
            className={
                !s ? styles.button +
                    ' '
                    +
                    styles.notdisplay :
                    styles.display
            }
        >
            {txt}
        </button>
    )
}

export default Buttonc