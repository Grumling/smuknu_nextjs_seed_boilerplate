'use client'
import Image from 'next/image'
import styles from './productsHero.module.css'

const ProductsHero = () => {
  return (
    <div className={styles.ctaContainer}>
      <div className={styles.ctaInfoBox}>
        <h1 className={styles.ctaTitle}>
          Skønne <p>produkter</p>
        </h1>
        <p className={styles.ctaText}>
          Herunder finder du alle cores produkter
        </p>
      </div>
      <Image src='/headers/products.jpg' alt='cta' width={1024} height={683} />
    </div>
  )
}

export default ProductsHero
