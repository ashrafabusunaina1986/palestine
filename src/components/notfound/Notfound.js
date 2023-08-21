import React from 'react'
import styles from './notfound.module.css'
import Link from 'next/link'

function Notfound() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>404 page not found</h1>
            <Link href={'/blog'}
                className={styles.back}
            >back</Link>
        </div>
    )
}

export default Notfound