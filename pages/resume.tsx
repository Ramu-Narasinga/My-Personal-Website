import CustomH1 from '../components/themed-tags/custom-h1/custom-h1'
import Layout from '../components/layout/layout'

import resumeStyles from '../styles/resume.module.css'

export default function Resume() {
  return (
    <Layout className='resumeLayout'>
      <CustomH1>
          My Resume
      </CustomH1>
      <div className={resumeStyles.resumeContainer}>
        <iframe src="https://docs.google.com/document/d/e/2PACX-1vS_34QM9ANxsVqnNZSPQf3swCZQGu5hf5LtmYLnlbJf9K1Lk_wu6DMqKS35ZO43iSqJxFajzXKiKn2C/pub?embedded=true" width="100%" height="100%" frameBorder="0" marginHeight={0} marginWidth={0}>Loading…</iframe>
        {/* <iframe src="https://docs.google.com/document/d/e/2PACX-1vS_34QM9ANxsVqnNZSPQf3swCZQGu5hf5LtmYLnlbJf9K1Lk_wu6DMqKS35ZO43iSqJxFajzXKiKn2C/pub?embedded=true"></iframe> */}
      </div>
    </Layout>
  )
}
