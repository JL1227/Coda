import styles from '../styles/Footer.module.css'
import Twitter from '../images/twitter.svg'
import Facebook from '../images/facebook.svg'
import Youtube from '../images/youtube.svg'
import Linkedin from '../images/linkedin.svg'
import Stars from '../images/stars.png'
import CodaLogo from '../images/icon-coda-logo-red.svg'

export default function Footer() {
  return (
    <div>
      <footer>
        <a href="/">
          <img src={CodaLogo} alt="Coda" />
        </a>
        <div className={styles.footerLinks}>
          <h6>Company</h6>
          <a href="/">About us</a>
          <a href="/">Blog</a>
          <a href="/">Careers</a>
          <a href="/">Press</a>
        </div>
        <div className={styles.footerLinks}>
          <h6>Integrations</h6>
          <a href="/">Packs</a>
          <a href="/">API</a>
          <a href="/">Chrome Extension</a>
          <a href="/">Slack</a>
          <a href="/">Zapier</a>
        </div>
        <div className={styles.footerLinks}>
          <h6>Try Coda</h6>
          <a href="/">Request a demo</a>
          <a href="/">Android app</a>
          <a href="/">iOS app</a>
          <a href="/">Contact Support</a>
        </div>
        <div className={styles.footerLinks}>
          <h6>Resources</h6>
          <a href="/">Trust & Suport</a>
          <a href="/">Privacy statement</a>
          <a href="/">Status</a>
          <a href="/">Site map</a>
        </div>
      </footer>
      <a className={styles.star} href="/">
        <img src={Stars} alt="Stars" />
      </a>
      <div className={styles.footerLinks2}>
        <p>Copyright © 2022 Coda. All rights reserved.</p>
        <div className={styles.subFooterLinks2}>
          <a href="/">
            <img src={Twitter} alt="Twitter" />
          </a>
          <a href="/">
            <img src={Youtube} alt="Youtube" />
          </a>
          <a href="/">
            <img src={Linkedin} alt="Linkedin" />
          </a>
          <a href="/">
            <img src={Facebook} alt="Facebook" />
          </a>
        </div>
      </div>
    </div>
  )
}
