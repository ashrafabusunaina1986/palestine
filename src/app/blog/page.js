import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Blog() {
  return (
    <>
    <Link href={'/blog/id'} className={styles.container} >
      <div className={styles.imgContainer}>
        <Image src={'/aaps.jpeg'}fill={true} alt='image' className={styles.img}/>
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>console.log;</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ducimus ea id ipsum sint, incidunt quas, error optio corrupti ut
        </p>
      </div>
    </Link>
    <Link href={'blog/id'} className={styles.container} >
      <div className={styles.imgContainer}>
        <Image src={'/aaps.jpeg'}fill={true} alt='image' className={styles.img}/>
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>console.log;</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ducimus ea id ipsum sint, incidunt quas, error optio corrupti ut
        </p>
      </div>
    </Link>
    </>
  )
}

export default Blog