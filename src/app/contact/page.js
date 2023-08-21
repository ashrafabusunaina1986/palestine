'use client'
import React, { useState } from 'react'
import styles from './page.module.css'
import Form from '@/components/form/Form'
import Image from 'next/image'

function Contact() {
  const [data,setData]=useState(
    {
      name:'',
      email:'',
      message:''
    }
  )
  const send=e=>{
    e.preventDefault()
    console.log({data:data})
  }
  return (
    <div className={styles.container} >
      <div>
        <h1 className={styles.title}>Lets keep in Touch</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.imgContent}>
          <Image fill={true} src={'/websites.jpeg'} className={styles.img} />
        </div>
        <div className={styles.form}>
          <Form ok={'send'} s={true} setData={setData} data={data}
          clickok={send}
          />
        </div>
      </div>
    </div>
  )
}

export default Contact