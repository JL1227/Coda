import styles from '../styles/MeetCoda.module.css'

export default function MeetCoda() {
  return (
    <div className={styles.mainMeet}>
      <div className={styles.subMainMeet}>
        <div className={styles.textMeet}>
          <h1>The doc that brings it all together.</h1>
          <p>
            Unlike niche workflow tools, Coda comes with a set of powerful
            building blocks, so you can create the tools your team needs.
          </p>
        </div>
        <div>
          <iframe
            width="420"
            height="230"
            src="https://www.youtube.com/embed/M4sF0AX71DE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}
