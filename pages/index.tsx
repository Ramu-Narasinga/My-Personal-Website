import CustomH1 from '../components/custom-h1'
import CustomPara from '../components/custom-para'
import Layout from '../components/layout'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <div>
        <CustomH1 className={styles.title}>
          Hi,
          I am Ramu Narasinga.
        </CustomH1>
        <CustomPara className={styles.description}>
          Software Engineer.
        </CustomPara>
      </div>
    </Layout>
  )
}
