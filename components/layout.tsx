import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CustomH1 from './custom-h1'

export default function Layout() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ramu Narasinga's Personal Website</title>
        <meta name="description" content="Ramu Narasinga's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <CustomH1 className={styles.title}>
          Hi,
          I am Ramu Narasinga
        </CustomH1>

      </main>
    </div>
  )
}
