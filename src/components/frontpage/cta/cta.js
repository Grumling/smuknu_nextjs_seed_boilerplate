'use client'
import Image from 'next/image'
import styles from './cta.module.css'
import Button from '@/components/button/button/button'

const Cta = () => {
  return (
    <div className={styles.ctaContainer}>
      <div className={styles.ctaInfoBox}>
        <h1 className={styles.ctaTitle}>skønhed for alle</h1>
        <p className={styles.ctaText}>Alt hvad du behøver... SMUK NU</p>
        <div>
          <Button title={'Se udvaglte produkter'} link={'/'} />
        </div>
      </div>
      <Image src='/headers/front.jpg' alt='cta' width={1024} height={683} />
    </div>
  )
}

export default Cta
