import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const imgs=[
  {
    id:1,
    title:"palestine facebook",
    src:"/facebook.jpeg"
  },
  {
    id:2,
    title:"palestine intagram",
    src:"/insta.jpeg"
  },
  {
    id:3,
    title:"palestine twitter",
    src:"/twitter.jpeg"
  },
  {
    id:4,
    title:"palestine youtube",
    src:"/youtube.png"
  }
]

function Footer() {
  return (
    <div className={styles.container}>
      <div>@2023 Copyright Reserved</div>
      <div className={styles.imgs}>
        {imgs.map(img=>{
          return <Image
            src={img.src} key={img.id} alt={img.title}
            width={100} height={100} className={styles.img}
          />
        })}
      </div>
    </div>
  )
}

export default Footer