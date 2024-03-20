import Product from '@/components/products/products/product'
import styles from './page.module.css'
import ProductsHero from '@/components/products/hero/ProductsHero'

export default function Products() {
  return (
    <main className={styles.page}>
      <ProductsHero />
      <section className={styles.productsWrapper}>
        <h2>
          Alt er <p className={styles.colorChangePink}>skønhed</p>
        </h2>
        <Product frontPage={false} />
      </section>
    </main>
  )
}
