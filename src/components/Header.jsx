import codaHeaderImg from '../images/coda-font-black.svg'
import styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <header>
      <div>
        <a href="/">
          <img alt="Coda" src={codaHeaderImg} />
        </a>
        <nav>
          <a href="/">Product</a>
          <a href="/">Resources</a>
          <a href="/">Gallery</a>
          <a href="/">Pricing</a>
          <a href="/" className={styles.headerBtnColor}>
            Sign In
          </a>
          <a href="/" className={styles.contactSales}>
            Contact sales
          </a>
          <a href="/" className={styles.signUp}>
            Sign up
          </a>
        </nav>
      </div>
    </header>
  )
}
