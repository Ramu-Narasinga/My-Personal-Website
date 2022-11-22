import CustomH1 from '../components/custom-h1'
import Layout from '../components/layout'

import styles from '../styles/Home.module.css'

export default function Resume() {
  return (
    <Layout>
      <CustomH1 className={styles.title}>
          My Resume
      </CustomH1>
      <iframe src="/Ramu-Resume.pdf" width="100%" height="718" frameBorder="0" marginHeight={0} marginWidth={0}>Loading…</iframe>
    </Layout>
  )
}
