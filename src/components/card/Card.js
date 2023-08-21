import React from 'react'
import styles from './ card.module.css'

function Card({ id,name,email,message,day,month,year}) {
    
    return (
        <div key={id} className={styles.output}>
            <div className={styles.date}>
                <h4>{day}</h4>
                <h4>{month}</h4>
                <h4>{year}</h4>
            </div>
            <div className={styles.message}>
                <h1 className={styles.title}>{name}</h1>
                <h1 className={styles.title}>{email}</h1>
                <p className={styles.desc}>{message}</p>
            </div>
        </div>
    )
}

export default Card