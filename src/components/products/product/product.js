'use client'
import Image from 'next/image'
import styles from './product.module.css'

const Product = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardWrapper}>
        <div>
          <Image
            src='/products/product_8281992819.jpg'
            alt='product'
            width={320}
            height={320}
          />
        </div>
        <div className={styles.cardInfo}>
          <p>TITLE</p>
          <p>999,99 Kr.</p>
        </div>
      </div>
    </div>
  )
}

export default Product
