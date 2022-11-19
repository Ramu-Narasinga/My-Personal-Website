import CustomH1 from '../components/custom-h1'
import Layout from '../components/layout'

import styles from '../styles/Home.module.css'
import contactStyles from '../styles/contact.module.css'

export default function Contact() {
  return (
    <Layout>
      <CustomH1 className={styles.title}>
          Email me :)
      </CustomH1>
      <div className={contactStyles.myEmail}>
        ramu.narasinga@gmail.com
      </div>
    </Layout>
  )
}
