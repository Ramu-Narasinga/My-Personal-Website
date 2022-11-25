import CustomH1 from '../components/custom-h1/custom-h1'
import CustomPara from '../components/custom-para'
import Layout from '../components/layout/layout'

import styles from '../styles/home.module.css'

export default function Home() {
  return (
    <Layout>
        <CustomH1>
          Hi,
          I am Ramu Narasinga.
        </CustomH1>
        <CustomPara className={styles.description}>
          Software Engineer.
        </CustomPara>
    </Layout>
  )
}
