import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Website List | Home</title>
        <meta name="keywords" content="websiteName" />
      </Head>
      <div className={styles.container}>
        <h1>Home Page</h1>
      </div>
    </>
  )
}
