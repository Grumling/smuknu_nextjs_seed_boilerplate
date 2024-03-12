import HealthAccordion from '@/components/health/accordion/accordion'
import styles from './page.module.css'
import HealthHero from '@/components/health/hero/healthHero'

export default function Health() {
  return (
    <main className={styles.page}>
      <HealthHero />
      <HealthAccordion />
    </main>
  )
}
