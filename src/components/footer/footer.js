import styles from './footer.module.css'
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa6'
import Button from '../button/button/button'

const Footer = async () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerTopSection}>
        <h2>medlem?</h2>
        <p>Vær med i kundeklubben for nye videoer, rabatkoder og mere!</p>
        <Button title={'Bliv medlem af kundeklubben'} link={''} />
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
