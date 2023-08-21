'use client'

import React, { useState } from 'react'
import styles from './page.module.css'


function page() {
  const samples = [
    {
      id: 1,
      title: "sample1"
    },
    {
      id: 2,
      title: "sample2"
    }
  ]
  
  const content=[
    {
      name:"ashraf abusunaina",
      study:"debloma"
    },
    {
      name:"ahmad abusunaina",
      study:"bakaloria"
    }
  ]
  
  const [btn, setBtn] =useState(1)
  const change = e => {
    setBtn(e.target.value)
  }
  return (
    <div className={styles.container}>
      <menu className={styles.menu}>
        {
          samples.map(item => {
            return <button className={styles.item}
              onClick={change} value={item.id}
              key={item.id}>
              {item.title}
            </button>
          })
        }
      </menu>
      <div className={styles.content}>
        <h1>{content[btn-1].name}</h1>
        <h1>{content[btn-1].study}</h1>
      </div>
    </div>
  )
}

export default page