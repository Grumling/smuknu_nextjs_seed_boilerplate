import Link from 'next/link'
import styles from './button.module.css'

function Button({ title, link }) {
  return (
    <div className={styles.footerButtonContainer}>
      <Link target='_blank' href={link}>
        {title}
      </Link>
    </div>
  )
}

export default Button
