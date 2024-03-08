'use client'
import Product from '@/components/products/product/product'
import styles from './page.module.css'
import Cta from '@/components/frontpage/cta/cta'
import Image from 'next/image'

export default function Home() {
  return (
    <main className={styles.page}>
      <Cta />
      {/* Choosen Products */}
      <section className={styles.productsWrapper}>
        <h2>
          Udvalgt <p className={styles.colorChangePink}>skønhed</p>
        </h2>

        <Product />
      </section>

      {/* Statements */}
      <section className={styles.statementsWrapper}>
        <h2>
          <p className={styles.colorChangePink}>Skønheder</p> Udtaler
        </h2>

        <Image
          className={styles.statementImage}
          src='/reviews/phoebe_larsen.jpg'
          alt='person'
          width={150}
          height={150}
        />
        <div className={styles.statemenTextbox}>
          <p>
            Jeg døjer rigtig meget med uren hud, og har prøvet alt muligt. Jeg
            fik <b>Honest</b> produkter anbefalet som en 30 dags kur, hvor jeg
            KUN skulle bruge den morgen og aften. Det har jeg så prøvet nu, og
            jeg kan se en tydelig forskel. Et ekstra plus er, at den er dejlig
            fugtgivende.
          </p>
          <div>
            <p>Phoebe Larsen</p> Tilfreds Kunde
          </div>
        </div>
        <Image
          className={styles.statementImage}
          src='/reviews/kathrine_udgaard.jpg'
          alt='person'
          width={150}
          height={150}
        />
        <div className={styles.statemenTextbox}>
          <p>
            Den hidtil bedste oplevelse med læbestifter! Jeg har fået så mange
            komplimenter, efter jeg er begyndt at gå med denne dagligt. Udover
            smuk farve, efterlader den læberne bløde og fugtige. Og det aller
            vigtigste - slet ikke klistret på den der ubehagelige måde, som
            nogen pomader kan. Den er et absolut &quot;must have&quot; i min
            håndtaske!!
          </p>
          <div>
            <p>Kathrine Udgaard</p> Tilfreds Kunde
          </div>
        </div>
      </section>
    </main>
  )
}
