import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import MarkModeToggle from '@/components/darkModeToggle/MarkModeToggle'
const links = [
  {
    id: 1,
    title: "Home",
    url: "/"
  },
  {
    id: 2,
    title: "About",
    url: "/about"
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog"
  },
  {
    id: 4,
    title: "Portfolio",
    url: "/portfolio"
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact"
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard"
  },
  {
    id: 7,
    title: "Course",
    url: "/course"
  }
]

function Navbar() {
  return (
    <div className={styles.container}>
      <Link href={'/'} className={styles.logo} >
        <Image className={styles.Image} width={250} height={100} alt='palestine'
          src={'/pallogo.jpeg'} />
      </Link>
      <div className={styles.links}>
        <MarkModeToggle />
        {

          links.map(link => {
            return <Link className={styles.link} key={link.id} href={link.url} >
              {link.title}
            </Link>
          })
        }
        <button className={styles.logout}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar