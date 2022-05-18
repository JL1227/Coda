import styles from '../styles/Inspiration.module.css'

export default function Inspiration({ alt, image, text, title }) {
  return (
    <div className={styles.inspiration}>
      <img src={image} alt={alt} />
      <div className={styles.subInspiration}>
        <h2>{title}</h2>
        <p>{text}</p>
        <a href="/">See the doc →</a>
      </div>
    </div>
  )
}
