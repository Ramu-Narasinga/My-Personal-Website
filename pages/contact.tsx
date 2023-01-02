import CustomH1 from '../components/themed-tags/custom-h1/custom-h1'
import Layout from '../components/layout/layout'

import contactStyles from '../styles/contact.module.css'

export default function Contact() {
  return (
    <Layout>
      <CustomH1>
          Email me :)
      </CustomH1>
      <div className={contactStyles.myEmail}>
        ramu.narasinga@gmail.com
      </div>
    </Layout>
  )
}
