import styles from '../styles/Header.module.css'

export const Header = () => {
  return (
    <div>
      <h1 className={styles.title}>
        <span>Webnev</span> News</h1>
      <p className={styles.description}>Keep up with news</p>
    </div>
  )
}

export default Header