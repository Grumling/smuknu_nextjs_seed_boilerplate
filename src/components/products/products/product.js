'use client'
import Image from 'next/image'
import styles from './product.module.css'
import { useEffect, useState } from 'react'

const Product = ({ filterFunc = () => true }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch('/api/products')
      const data = await response.json()
      setProducts(data)
    }

    getProducts()
  }, [])

  return (
    <div className={styles.cardWrapper}>
      {products.filter(filterFunc).map((product, index) => (
        <div className={styles.card} key={index}>
          <div className={styles.ImageDisocuntContainer}>
            {product.discountInPercent > 0 && (
              <div className={styles.discountTag}>
                <p>Spar</p> {product.discountInPercent}%
              </div>
            )}

            <Image
              className={styles.productImage}
              src={product.image}
              alt='product'
              width={320}
              height={320}
            />
          </div>
          <div className={styles.cardInfo}>
            <div className={styles.cardTitle}>{product.title}</div>
            <div className={styles.cardPrice}>{product.price} Kr.</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Product
