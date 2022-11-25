import Layout from '../components/layout/layout'
import MyCertificationsContainer from '../components/my-certifications/my-certifications'
import MySkillsContainer from '../components/my-skills/my-skills-container'

export default function MySkills() {

  return (
    <Layout>
        <MySkillsContainer></MySkillsContainer>
        <MyCertificationsContainer></MyCertificationsContainer>
    </Layout> 
  )
}
