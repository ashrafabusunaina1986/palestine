'use client'

import React, { useContext } from 'react'
import styles from './markModeToggle.module.css'
import { ToggleContext } from '@/Context/ToggleContect'

function MarkModeToggle() {
    const { toggle, mode } = useContext(ToggleContext)
    
    return (
        
        <div className={styles.container}
            onClick={toggle}>
            <div className={styles.icon}>🌞</div>
            <div className={styles.icon}>🌙</div>
            <div className={styles.ball}
            style={mode==='light'?{right:'2px'}:{left:'2px'}}
            />
        </div>
    )
}

export default MarkModeToggle