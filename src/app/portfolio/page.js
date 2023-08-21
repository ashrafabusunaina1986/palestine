import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Portfolio() {
  return (
    < >
      
      <h3 className={styles.selectTitle}>Choose a gallery</h3>
      <div className={styles.items}>
        <Link href={'/portfolio/illustrations'} className={styles.item}>
          <span className={styles.title}>illustrations</span>
        </Link>
        <Link href={'/portfolio/websites'} className={styles.item}>
          <span className={styles.title}>Websites</span>
        </Link>
        <Link href={'/portfolio/applications'} className={styles.item}>
          <span className={styles.title}>applications</span>
        </Link>
      </div>
    </>
  )
}

export default Portfolio