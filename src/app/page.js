
import Image from 'next/image'
import styles from './page.module.css'
import Btn from '@/components/Button/Button'
import Button from '@/components/Button/Button'
import Notfound from '@/components/notfound/Notfound'
import React from 'react'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.txt}>
        <h1 className={styles.title}>
          Better Design For Your Digital Products.
        </h1>
        <p className={styles.desc}>
          Turning your idea into reality. We bring together
          the teams from the global tech industry
        </p>
        <Button txt={'See Our Works'} url={'/portfolio'} />
      </div>
      <div className={styles.imgContent}>
        <Image className={styles.img} width={400} height={350} alt='palestine' src={'/palestine.jpeg'} />
      </div>
    </div>
  )
}
