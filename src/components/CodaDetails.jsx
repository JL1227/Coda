import styles from '../styles/CodaDetails.module.css'

export default function CodaDetails({
  title,
  content,
  srcVideo,
  bgColor = false,
  buttonBP = false
}) {
  return (
    <div className={bgColor ? styles.bgGray : styles.bgWhite}>
      <div className={styles.details}>
        <div className={styles.mainDetails}>
          <h1>{title}</h1>
          <p>{content}</p>
          {buttonBP && (
            <a href="/" className={styles.btnBP}>
              Browse Packs
            </a>
          )}
        </div>
        <video width="400" height="420" loop>
          <source src={srcVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}
