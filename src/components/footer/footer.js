import styles from './footer.module.css'
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa6'
import Button from '../button/button/button'
import Image from 'next/image'

const Footer = async () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerTopSection}>
        <div className={styles.footerTopSectionLeft}>
          <h2>medlem?</h2>
          <p>Vær med i kundeklubben for nye videoer, rabatkoder og mere!</p>
          <Button title={'Bliv medlem'} link={'membership'} />
        </div>
        <div className={styles.footerTopSectionRight}>
          <Image
            src='/reviews/kathrine_udgaard.jpg'
            alt='gave'
            width={150}
            height={150}
          />
          <Image
            src='/reviews/kathrine_udgaard.jpg'
            alt='gave'
            width={150}
            height={150}
          />
          <Image
            src='/reviews/kathrine_udgaard.jpg'
            alt='gave'
            width={150}
            height={150}
          />
          <Image
            src='/reviews/kathrine_udgaard.jpg'
            alt='gave'
            width={150}
            height={150}
          />
        </div>
      </div>
      <div className={styles.footerBottomSection}>
        <div className={styles.soMeIcons}>
          <FaFacebook />
          <FaInstagram />
          <FaPinterest />
          <FaTwitter />
          <FaYoutube />
        </div>
        <div className={styles.footerContactInfo}>
          <p>mail@smuknu.dk</p>
          <p>+45 123 345 33</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
