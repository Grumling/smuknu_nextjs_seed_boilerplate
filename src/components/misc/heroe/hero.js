'use client'
import styles from './hero.module.css'
import Image from 'next/image'
import headerImages from './headerImages.json'

const Hero = ({ selectedImage }) => {
  return (
    /* HERO IMAGE */
    <div className={styles.heroContainer}>
      <Image
        src={selectedImage.src}
        alt={selectedImage.alt}
        layout='fill'
        objectFit='cover'
        objectPosition='center'
      />
      {/* HERO TEXTBOX WRAPPER - Content*/}
      <div className={styles.heroTextboxWrapper}>
        <h2 className={styles.heroHeader}>Headline</h2>
        <h3 className={styles.subHeader}>Sub Headline</h3>
        {/* Button here if needed */}
        <div>Button if needed</div>
      </div>
    </div>
  )
}

export default Hero
