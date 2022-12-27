import CustomH1 from '../components/themed-tags/custom-h1/custom-h1'
import Layout from '../components/layout/layout'

export default function Resume() {
  return (
    <Layout>
      <CustomH1>
          My Resume
      </CustomH1>
      <iframe src="/Ramu-Resume.pdf" width="100%" height="718" frameBorder="0" marginHeight={0} marginWidth={0}>Loading…</iframe>
    </Layout>
  )
}
