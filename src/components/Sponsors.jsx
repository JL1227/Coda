import styles from '../styles/Sponsors.module.css'
import Figma from '../images/logo-figma-black.svg'
import NWT from '../images/logo-nytimes-black.svg'
import Square from '../images/logo-square-black.svg'
import RobinWood from '../images/logo-robinhood-black.svg'
import TED from '../images/logo-ted-black.png'
import Buzzfeed from '../images/logo-buzzfeed-black.png'
import Uber from '../images/logo-uber-black.svg'

export default function Sponsors() {
  return (
    <div className={styles.codaSponsors}>
      <h1>25,000+ teams, and counting.</h1>
      <div className={styles.sponsor}>
        <img src={Figma} alt="Figma" />
        <img src={NWT} alt="New York Times" />
        <img src={Square} alt="Square" />
        <img src={RobinWood} alt="Robin Wood" />
        <img src={TED} alt="TED" />
        <img src={Buzzfeed} alt="Buzzfeed" />
        <img src={Uber} alt="Uber" />
      </div>
    </div>
  )
}
