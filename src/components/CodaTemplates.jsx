import styles from '../styles/CodaTemplates.module.css'
import Templates from './Templates'
import Lamp from '../images/lamp.svg'
import Bus from '../images/bus.svg'
import Prototype from '../images/prototype.svg'
import ThumbUp from '../images/thumb-up.svg'
import Cool from '../images/cool.svg'
import Pen from '../images/pen.svg'

export default function CodaTemplates() {
  return (
    <div className={styles.mainTemplates}>
      <div className={styles.templatesTitle}>
        <h1>Start fast with templates.</h1>
        <p>
          From workflow basics to inventive collaboration tools, the Coda
          Gallery has pre-baked
        </p>
        <p>templates you can drop right in your doc.</p>
      </div>
      <div className={styles.templates}>
        <div className={styles.group}>
          <Templates img={Lamp} title="Project brief" alt="Project brief" />
          <Templates
            img={Bus}
            title="Project workback"
            alt="Project workback"
          />
          <Templates img={Prototype} title="OKR tracker" alt="OKR tracker" />
        </div>
        <div className={styles.group}>
          <Templates img={ThumbUp} title="Vote on ideas" alt="Vote on ideas" />
          <Templates img={Cool} title="Project tracker" alt="Project tracker" />
          <Templates img={Pen} title="Meeting notes" alt="Meeting notes" />
        </div>
      </div>
    </div>
  )
}
