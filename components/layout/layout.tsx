import Head from 'next/head'
import styles from './layout.module.css'
import Sidebar from '../sidebar/sidebar'

type LayoutProps  = {
  children: React.ReactNode,
  className?: string
}

export default function Layout(layoutProps: LayoutProps) {

  const {
    className
  } = layoutProps;

  return (
    <div className={styles.container}>
      <Head>
        <title>Ramu Narasinga's Personal Website</title>
        <meta name="description" content="Ramu Narasinga's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <Sidebar />

        <div className={'htmlThemedContainer ' + className}>
          <div className='htmlThemedOpenTags'>
            <div className='htmlThemedTag'>&lt;html&gt;</div>
            <div className='bodyThemedTag'>&lt;body&gt;</div>
          </div>

          {layoutProps.children}

          <div className='htmlThemedCloseTags'>
            <div className='bodyThemedTag'>&lt;/body&gt;</div>
            <div className='htmlThemedTag'>&lt;/html&gt;</div>
          </div>
        </div>
      </main>
    </div>
  )
}
