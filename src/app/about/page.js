import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'

function About() {
  return (
    <div className={styles.container} >
      <div className={styles.imgTxt}>
        <Image className={styles.img} fill={true} src={'/office.jpeg'} alt='office computer' />
        <div className={styles.imgC}>
          <h3 className={styles.imgTitle}>Digital Computer</h3>
          <p className={styles.imgTitle}> use the computer for programming by vb,c python ...</p>
        </div>
      </div>
      <div className={styles.txtContent}>
        <div className={styles.item}>
          <h2 className={styles.title}>who are we</h2>
          <p className={styles.desc}>The Office of the Queens County District Attorney (QDA) is seeking a Data Entry Analyst for its IT team that is responsible for the administration and management </p>
          <Button txt={'Contact'} url={'/contact'}/>
        </div>
        <div className={styles.item}>
          <h2 className={styles.title}>who are we</h2>
          <p className={styles.desc}>The Office of the Queens County District Attorney (QDA) is seeking a Data Entry Analyst for its IT team that is responsible for the administration and management </p>
        </div>
      </div>
    </div>
  )
}

export default About