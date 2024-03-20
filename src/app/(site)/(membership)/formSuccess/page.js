'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/components/button/button/button'

export default function FormComplete({ name }) {
  console.log('FormComplete', name)
  return (
    <main className={styles.formCompleteContainer}>
      <h2>Tak!</h2>
      {/* Den skal kunne passe form name herunder */}
      <p>{name}</p>
      <p>Vi er enormt glade for at få dig som medlem.</p>
      <Image
        className={styles.formCompleteContainerImage}
        src='/products/product_8281992819.jpg'
        alt='gave'
        width={180}
        height={180}
      />
      <p>Kig I din inbox vi har sendt en lille velkomst gave.</p>
      <Button title={'Til Forsiden'} link={'/'} target='_self' />
    </main>
  )
}
