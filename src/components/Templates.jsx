import styles from '../styles/Templates.module.css'

export default function Templates({ img, title, alt }) {
  return (
    <div className={styles.template}>
      <img src={img} alt={alt} />
      <h1>{title}</h1>
      <a href="/">Start</a>
    </div>
  )
}
