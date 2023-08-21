'use client'

import axios from 'axios'
import React, { useState } from 'react'
import Buttonc from '@/components/buttonc/Buttonc'
import Form from '@/components/form/Form'
import styles from './page.module.css'
import Card from '@/components//card/Card'



function DataEntry() {
  const [isActive, setIsActive] = useState(false)
  const [input, setInput] = useState({
    day:new Date().getDay(),
    month:new Date().getMonth(),
    year:new Date().getFullYear(),
    name: '',
    email: '',
    message: ''
  })

  const [data, setData] = useState([])

  const changeDisplay = (e) => {
    e.preventDefault()
    setIsActive(prev => !isActive)
  }

  const AddItem = (e) => {
    e.preventDefault()
    setIsActive(prev => !isActive)
    setData([
      ...data, {
        id: data.length, input
      }])


  }

  return (
    <div className={styles.container} >

      <div className={styles.rullEntry}>
        <Buttonc txt={'Add item'}
          s={isActive}
          click={changeDisplay} />
        <Form ok={'Add Item'} s={isActive}
          clickok={AddItem} data={input} setData={setInput}
          btn={<Buttonc txt={'Cancel'} click={changeDisplay} />} />
      </div>
      <div className={styles.Result} >
        {data.reverse().map(item => {
          return <Card key={item.id}
          day={item.input.day}
          month={item.input.month}
           year={item.input.year}
            name={item.input.name}
            email={item.input.email}
            message={item.input.message}
          />
        })}
      </div>

    </div>
  )
}

export default DataEntry