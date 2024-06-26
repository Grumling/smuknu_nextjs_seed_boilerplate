'use client'
import styles from './page.module.css'
import Image from 'next/image'
import HighlightedHeading from '@/components/misc/headers/highlightedHeading'
import { useEffect, useState } from 'react'
import Hero from '@/components/frontpage/hero/hero'
import Product from '@/components/products/products/product'

export default function Home() {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch('/api/reviews')
      .then((response) => response.json())
      .then((data) => setReviews(data))
  }, [])

  return (
    <main className={styles.page}>
      <Hero />

      <section className={styles.productsWrapper}>
        {/* HEADLINE COMPONENT - CHANGE AS YOU PLEASE FOR EACH SITE */}
        <HighlightedHeading
          lineTitle1={'udvalgt'}
          lineTitle2={'skønhed'}
          classNameBottom={styles.colorChangePink}
        />

        {/* Products */}
        <Product frontPage={true} />
      </section>

      {/* REVIEWS SECTION */}
      <section className={styles.reviewsWrapper}>
        <HighlightedHeading
          lineTitle1={'skønheder'}
          lineTitle2={'udtaler'}
          classNameTop={styles.colorChangePink}
        />
        {reviews.map((reviews, index) => (
          <div className={styles.reviewsWrapper} key={index}>
            <Image
              className={styles.reviewImage}
              src={reviews.image}
              alt='person'
              width={150}
              height={150}
            />
            <div className={styles.reviewextbox}>
              <p>{reviews.description}</p>
            </div>
            <div>
              <p className={styles.reviewextboxName}>{reviews.name}</p>
              <p className={styles.reviewextboxByline}>{reviews.byline}</p>
            </div>
            <hr className={styles.horizontalLine} />
          </div>
        ))}
      </section>
    </main>
  )
}
