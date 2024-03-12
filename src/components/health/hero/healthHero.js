'use client'
import Image from 'next/image'
import styles from './healthHero.module.css'

const HealthHero = () => {
  return (
    <div className={styles.ctaContainer}>
      <div className={styles.ctaInfoBox}>
        <h1 className={styles.ctaTitle}>spørg om sundhed</h1>
        <p className={styles.ctaText}>
          Herunder har vi samlet spørgsmål og svar om sundhed. <br />
          <br /> Mange spørgsmål kommer fra medlemmer af smuknu.dk og andre er
          gode råd valgt af vores skønhedsredaktion
        </p>
      </div>
      <Image
        src='/headers/abouthealth.jpg'
        alt='cta'
        width={1024}
        height={683}
      />
    </div>
  )
}

export default HealthHero
