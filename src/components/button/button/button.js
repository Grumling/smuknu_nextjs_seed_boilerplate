import Link from 'next/link'
import styles from './button.module.css'

function Button({ title, link, className }) {
  return (
    <div className={`${styles.buttonContainer} ${className}`}>
      <Link target='_blank' href={link}>
        {title}
      </Link>
    </div>
  )
}

export default Button
