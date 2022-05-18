import styles from '../styles/CodaInspirations.module.css'
import Inspiration from './Inspiration'

import Pinterest from '../images/pinterest.jpg'
import Superhuman from '../images/superhuman.jpg'
import ThriveGlobal from '../images/thriveGlobal.jpg'
import Figma from '../images/figma.jpg'

export default function CodaInspirations() {
  return (
    <div className={styles.mainInspirations}>
      <div className={styles.subMainInspirations}>
        <h1>Inspiration you can use.</h1>
        <p>
          Our <span>Gallery</span> is full of pressure-tested playbooks
          published by some <br /> of the most innovative thinkers and makers
          out there.
        </p>
        <div className={styles.allInspirations}>
          <div className={styles.group1}>
            <Inspiration
              alt="Pinterest"
              image={Pinterest}
              text="How to avoid silos when setting goals at scale with pyramid OKRs."
              title="Pinterest"
            />
            <Inspiration
              alt="Superhuman"
              image={Superhuman}
              text="Product/market fit is the top reason startups succeed. SH created a doc to help you find it"
              title="Superhuman"
            />
          </div>
          <div className={styles.group2}>
            <Inspiration
              alt="Thrive Global"
              image={ThriveGlobal}
              text="Arianna Huffington's 'Reset' is a science-based approach to de-stressing and uniting teams."
              title="Thrive Global"
            />
            <Inspiration
              alt="Figma"
              image={Figma}
              text="An inside look at how Figma designed a faster way to ship product with a single Coda doc."
              title="Figma"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
