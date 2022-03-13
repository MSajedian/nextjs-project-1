import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Test from '../components/test'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Footer />
      <Test />
    </div>
  )
}
