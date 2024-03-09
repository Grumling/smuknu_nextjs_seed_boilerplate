import HealthAccordion from '@/components/health/accordion/accordion'
import styles from './page.module.css'
import Healthcta from '@/components/health/healthCta/healthcta'

export default function Health() {
  return (
    <main className={styles.page}>
      <Healthcta />
      <HealthAccordion />
    </main>
  )
}
