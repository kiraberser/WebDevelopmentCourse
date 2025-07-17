"use client"

import Link from 'next/link'
import styles from './page.module.css'


function MealsError() {
  return (
    <header className={styles.header}>
      <h1 className={styles.highlight}>Error fetching meals</h1>
      <p><Link href={'/'} className={styles.loading}>Home</Link></p>
    </header>
  )
}

export default MealsError
