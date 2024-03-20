'use client'
import Image from 'next/image'
import styles from './product.module.css'
import { useEffect, useState } from 'react'
import { useBasket } from '@/context/basket'

const Product = ({ filterFunc = () => true, frontPage }) => {
  const [products, setProducts] = useState([])
  const { basket, addToBasket } = useBasket()
  const [count, setCount] = useState(1)

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch('/api/products')
      let data = await response.json()
      if (frontPage) {
        data = data.filter((product) => product.recommended)
      }
      setProducts(data)
    }

    getProducts()
  }, [frontPage])

  return (
    <div className={styles.cardWrapper}>
      {products.map((product, index) => (
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
            <div className={styles.basketBuying}>
              <button
                className={styles.fbBtn}
                onClick={() => addToBasket(product._id, count)}
              >
                Køb {/* {count} */} {/* Sætter count på køb knappen */}
              </button>
              <input
                className={styles.buyProductInputField}
                type='number'
                defaultValue={1}
                min={1}
                onChange={(e) => {
                  const value = Number(e.target.value)
                  if (value >= 1) {
                    setCount(value)
                  }
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Product
