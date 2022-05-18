import styles from '../styles/CodaDoc.module.css'
import codaDoc from '../images/codaDoc.png'

export default function CodaDoc() {
  return (
    <div className={styles.codaDoc}>
      <div className={styles.subCodaDoc}>
        <h1>What’s it like in a Coda doc?</h1>
        <p>Make your own and find out!</p>
        <div>
          <a href="/" className={styles.makeADoc}>
            Make a doc
          </a>
          <a href="/" className={styles.requestDemo}>
            Request a demo
          </a>
        </div>
      </div>
      <img src={codaDoc} alt="Doc" className={styles.codaDocImg} />
    </div>
  )
}
