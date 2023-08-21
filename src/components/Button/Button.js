import React from 'react' 
import styles from './button.module.css'
import Link from 'next/link'

function Button({url,txt}) {
  return (
    <Link href={url} className={styles.button}  >{txt}</Link>
  )
}

export default Button