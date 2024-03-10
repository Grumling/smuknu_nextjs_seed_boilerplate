import Link from 'next/link'
import styles from './button.module.css'

function Button({ title, link, className, target }) {
  return (
    <div className={`${styles.buttonContainer} ${className}`}>
      <Link target={target} href={link}>
        {title}
      </Link>
    </div>
  )
}

export default Button
