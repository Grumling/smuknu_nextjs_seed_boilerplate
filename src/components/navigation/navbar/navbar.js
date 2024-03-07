import Image from 'next/image'
import styles from './navbar.module.css'
import { FaBars, FaBagShopping } from 'react-icons/fa6'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className={styles.navBarContainer}>
      <header className={styles.headerWrapper}>
        <nav className={styles.navWrapper}>
          {/* Logo  */}
          <div className={styles.logo}>
            <Link href='/'>
              <Image
                src='/logo/smuknu_logo.png'
                alt='logo'
                width={4989}
                height={1349}
              />
            </Link>
          </div>
          {/* Right menu items */}
          <div className={styles.rightMenuItems}>
            <FaBagShopping />
            <FaBars />
          </div>
        </nav>
      </header>
    </div>
  )
}

export default NavBar
