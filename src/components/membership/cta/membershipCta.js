'use client'
import Image from 'next/image'
import styles from './membershipCta.module.css'

const MembershipCta = () => {
  return (
    <div className={styles.ctaContainer}>
      <div className={styles.ctaInfoBox}>
        <h1 className={styles.ctaTitle}>Bliv medlem</h1>
        <p className={styles.ctaText}>
          Opret dig som medlem og få flere fordele og nyheder I det øjeblik vi
          har dem.
          <br />
          <br /> Send gerne ris eller ros med når du melder dig ind, vi er altid
          parate til dialog.
        </p>
      </div>
      <Image
        src='/headers/subscribers.jpg'
        alt='cta'
        width={1024}
        height={683}
      />
    </div>
  )
}

export default MembershipCta
