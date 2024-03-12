import Link from 'next/link'
import styles from './button.module.css'

function Button({ title, link, className, target, type }) {
  return (
    <div className={`${styles.buttonContainer} ${className}`}>
      <Link target={target} href={link}>
        <button type={type}>{title}</button> {/*? LAV OM  */}
      </Link>
    </div>
  )
}

export default Button
