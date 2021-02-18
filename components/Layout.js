import styles from '../styles/Layout.module.css'
import Nav from './Nav'
import Meta from './Meta'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout