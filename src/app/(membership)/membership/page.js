import MembershipCta from '@/components/membership/cta/membershipCta'
import styles from './page.module.css'
import Form from '@/components/membership/form/form'

export default function Membership() {
  return (
    <main className={styles.page}>
      <MembershipCta />
      <Form />
    </main>
  )
}
