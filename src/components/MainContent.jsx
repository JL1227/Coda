import styles from '../styles/MainContent.module.css'
import womanWithPaper from '../images/womanWithPaper.jpg'

export default function MainContent() {
  return (
    <div>
      <div className={styles.update}>
        <a href="/">Introducing Coda 3.0. See what's new →</a>
      </div>

      <div className={styles.sectionMain}>
        <div className={styles.mainContent}>
          <h1>
            Enough of <br /> this sheet.
          </h1>
          <p>
            For teams whose best work is scattered across documents,
            spreadsheets, and apps, Coda is the doc that brings it all together.
          </p>
          <div>
            <a className={styles.mainMakeADoc} href="/">
              Make a doc
            </a>
            <a className={styles.mainContactSales} href="/">
              Contact sales
            </a>
          </div>
        </div>
        <img src={womanWithPaper} alt="Womam with paper" />
      </div>
    </div>
  )
}
