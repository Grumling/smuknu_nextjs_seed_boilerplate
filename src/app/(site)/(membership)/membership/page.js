import MembershipCta from '@/components/membership/hero/membershipHero'
import styles from './page.module.css'
import Form from '@/components/membership/form/form'

export const metadata = {
  title: 'Medlemdskab - MediaCollege Denmark',
  description: 'Vi arbejder...',
}

export default function Membership() {
  return (
    <main className={styles.page}>
      <MembershipCta />
      <Form />
    </main>
  )
}
