'use client'
import Image from 'next/image'
import styles from './product.module.css'
import { useEffect, useState } from 'react'

const Product = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch('/api/products')
      const data = await response.json()
      setProducts(data)
    }

    getProducts()
  }, [])

  // If the product is not loaded yet, show a loading message
  if (!products) {
    return <div>Loading...</div>
  }

  return (
    <div className={styles.cardContainer}>
      {products
        .filter((product) => product.recommended)
        .map((product, index) => (
          <div key={index} className={styles.cardWrapper}>
            <div>
              <Image
                src={product.image}
                alt='product'
                width={320}
                height={320}
              />
            </div>
            <div className={styles.cardInfo}>
              <p>{product.title}</p>
              <p>{product.price} Kr.</p>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Product
