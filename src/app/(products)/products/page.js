import CtaProducts from '@/components/products/ctaProducts/ctaProducts'
import styles from './page.module.css'
import AllProducts from '@/components/products/allProducts'

export default function Products() {
  return (
    <main className={styles.page}>
      <CtaProducts />
      <section className={styles.productsWrapper}>
        <h2>
          Alt er <p className={styles.colorChangePink}>skønhed</p>
        </h2>
        <AllProducts />
      </section>
    </main>
  )
}
