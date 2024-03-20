import { useBasket } from '@/context/basket'
import styles from './basket.module.css'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const Basket = () => {
  const { basket, name, removeFromBasket } = useBasket()
  const [basktItems, setBasketItems] = useState([])

  const totalPrice = basktItems.reduce((total, basketItem) => {
    return total + basketItem.price * basketItem.amount
  }, 0)

  useEffect(() => {
    const getProductByRange = async () => {
      // Finder alle id´er.
      let idRange = basket.map((item) => item.id)

      console.log('ID Range', basket, idRange)

      if (idRange.length > 0) {
        let products = await fetch('api/products?range=' + idRange)
        products = await products.json()

        products.map((product) => {
          console.log('PRODUCT', product)
          let basketAmount = basket.find((item) => item.id === product._id)

          if (basketAmount) {
            product.amount = basketAmount.amount
          }
        })

        setBasketItems(products)
      }
    }

    getProductByRange()
  }, [basket])

  return (
    <div className={styles.container}>
      {basktItems.map((basketItem) => {
        return (
          <div className={styles.basketItemWrapper} key={basketItem._id}>
            <Image
              src={basketItem.image}
              alt={basketItem.title}
              width={90}
              height={90}
            />
            <div className={styles.productBasketInfo}>
              {basketItem.title}
              <div>
                <u>{basketItem.price}</u> Pris pr Stk.
              </div>
              <div>
                Antal <u>{basketItem.amount}</u> stk.
                <button
                  className={styles.removeItemFromBasket}
                  onClick={() => removeFromBasket(basketItem._id)}
                >
                  Fjern
                </button>
              </div>
            </div>
          </div>
        )
      })}
      <div className={styles.totalPrice}>Total Price: {totalPrice} Kr.</div>
    </div>
  )
}
export default Basket
