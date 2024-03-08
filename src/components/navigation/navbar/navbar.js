'use client'
import Image from 'next/image'
import styles from './navbar.module.css'
import { FaBars, FaBarsStaggered, FaBagShopping } from 'react-icons/fa6'
import Link from 'next/link'
import { useState } from 'react'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenCart, setIsOpenCart] = useState(false)

  /* const { basket, name } = useBasket() */

  /* toggle for the nav menu */
  const toggleMenu = () => {
    setIsOpen(!isOpen)
    setIsOpenCart(false)
  }

  /* toggle for the cart */
  const toggleCart = () => {
    setIsOpenCart(!isOpenCart)
    setIsOpen(false)
  }

  return (
    <nav className={styles.navigation}>
      <div className={styles.bar}>
        <div className={styles.logo}>
          <Link href='/'>
            <Image
              src='/logo/smuknu_logo.png'
              alt={'SmukNu Logo'}
              width={4989}
              height={1349}
              className={styles.image}
            ></Image>
          </Link>
        </div>
        <div className={styles.menuDirection}>
          {/* CART ICON */}
          <div onClick={toggleCart}>
            {/* <div className={styles.cartCounter}>{basket.length}</div> */}
            {isOpenCart ? (
              <FaBagShopping className={styles.bars} />
            ) : (
              <FaBagShopping className={styles.bars} />
            )}
          </div>
          {/* BURGER MENU ICON */}
          <div onClick={toggleMenu}>
            {isOpen ? (
              <FaBarsStaggered className={styles.bars}></FaBarsStaggered>
            ) : (
              <FaBars className={styles.bars}></FaBars>
            )}
          </div>{' '}
        </div>
      </div>

      {/* MENU */}
      <div className={`${styles.dropdown} ${isOpen ? styles.open : ''}`}>
        <Link href='/'>Forside</Link>
        <Link href='/products'>Vores produkter</Link>
        <Link href='/sundhed'>Spørg om sundhed</Link>
        <Link href='/medlem'>Bliv medlem</Link>
      </div>

      {/* CART */}
      <div
        className={`${styles.dropdownCart} ${isOpenCart ? styles.open : ''}`}
      >
        {/* {basket.length === 0 ? <EmptyBasket /> : <BasketFull />} */}
        {/* {<Basket />} */}
      </div>
    </nav>
  )
}

export default NavBar
