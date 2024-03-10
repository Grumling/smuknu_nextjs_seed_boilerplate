import styles from './highlightedHeading.module.css'

const HighlightedHeading = ({
  lineTitle1,
  lineTitle2,
  classNameTop,
  classNameBottom,
}) => {
  return (
    <div className={styles.highlightedHeadingContainer}>
      <div className={styles.highlightedHeadingWrapper}>
        <h2 className={classNameTop}>{lineTitle1}</h2>
        <h2 className={classNameBottom}>{lineTitle2}</h2>
      </div>
    </div>
  )
}

export default HighlightedHeading
