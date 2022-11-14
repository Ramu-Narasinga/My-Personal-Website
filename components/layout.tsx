import Head from 'next/head'
import styles from '../styles/layout.module.css'
import Sidebar from './sidebar'

type LayoutProps  = {
  children: React.ReactNode
}

export default function Layout(layoutProps: LayoutProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ramu Narasinga's Personal Website</title>
        <meta name="description" content="Ramu Narasinga's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Sidebar />
        {layoutProps.children}
      </main>
    </div>
  )
}
