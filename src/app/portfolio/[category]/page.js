import React from 'react'
import styles from './page.module.css'
import Button from '@/components/Button/Button'
import Image from 'next/image'

function Category({ params }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.cat}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>test</h1>
          <p className={styles.desc}>this is calculate by compiter this is calculate by compiter this is calculate by compiter this is calculate by compiter</p>

          <Button txt={'See More'} url={'#'} />
        </div>
        <div className={styles.imgContainer}>
          <Image src={'/illustrations.jpeg'} fill={true} className={styles.img} alt=''/>
        </div>
      </div>
      
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>test</h1>
          <p className={styles.desc}>this is calculate by compiter this is calculate by compiter this is calculate by compiter this is calculate by compiter</p>

          <Button txt={'See More'} url={'#'} />
        </div>
        <div className={styles.imgContainer}>
          <Image src={'/illustrations.jpeg'} fill={true} className={styles.img} alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Category