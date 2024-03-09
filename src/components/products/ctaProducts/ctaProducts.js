'use client'
import Image from 'next/image'
import styles from './ctaProducts.module.css'

const CtaProducts = () => {
  return (
    <div className={styles.ctaContainer}>
      <div className={styles.ctaInfoBox}>
        <h1 className={styles.ctaTitle}>Skønne produkter</h1>
        <p className={styles.ctaText}>
          Herunder finder du alle cores produkter
        </p>
      </div>
      <Image src='/headers/products.jpg' alt='cta' width={1024} height={683} />
    </div>
  )
}

export default CtaProducts
