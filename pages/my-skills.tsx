import CustomH1 from '../components/custom-h1'
import Layout from '../components/layout'

import styles from '../styles/Home.module.css'

export default function MySkills() {
  return (
    <Layout>
      <CustomH1 className={styles.title}>
          Hi,
          I am Ramu Narasinga
        </CustomH1>
    </Layout>
  )
}
