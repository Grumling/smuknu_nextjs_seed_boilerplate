'use client'
import Image from 'next/image'
import styles from './navbar.module.css'
import { FaBars, FaBarsStaggered, FaBagShopping } from 'react-icons/fa6'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenCart, setIsOpenCart] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

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

  /* Handles nav scroll hide and show */
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      const visible = prevScrollPos > currentScrollPos

      setPrevScrollPos(currentScrollPos)
      setVisible(visible)

      // Close the dropdown when scrolling
      if (!visible && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [prevScrollPos, isOpen])

  return (
    <nav className={`${styles.navigation} ${visible ? '' : styles.hidden}`}>
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
        <Link href='/health'>Spørg om sundhed</Link>
        <Link href='/membership'>Bliv medlem</Link>
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
