import React from 'react'
import styles from './home--motion.module.css'

const HomeMotion = () => {
  return (
    <svg viewBox='0 0 32 32' className={styles.HomeMotion}>
      <title>home</title>
      <path
        d='M16.6,2.2c-0.4-0.3-0.9-0.2-1.2,0L1,13.4L2.2,15L4,13.6V26c0,1.1,0.9,2,2,2h20c1.1,0,2-0.9,2-2V13.6l1.8,1.4
    l1.2-1.6L16.6,2.2z M26,26H6V12.1l10-7.8l10,7.8V26z'
      />
      <path className={styles.HomeDoorLeft} d='M12,18v8h2v-8H12z' />
      <path className={styles.HomeDoorRight} d='M20,18v8h-2v-8H20z' />
      <path
        className={styles.HomeDoorTop}
        d='M18,16h-4c-1.1,0-2,0.9-2,2h2h4h2C20,16.9,19.1,16,18,16z'
      />
      />
    </svg>
  )
}

export default HomeMotion
