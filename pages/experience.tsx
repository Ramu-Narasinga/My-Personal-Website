import CustomH1 from '../components//themed-tags/custom-h1/custom-h1'
import Layout from '../components/layout/layout'
import MyExperienceCard from '../components/my-experience/my-experience-card'
import { experience } from '../components/my-experience/my-experience-data'
import CustomDiv from '../components/themed-tags/custom-div/custom-div'

export default function Experience() {

  return (
    <Layout>
      <CustomH1>
         My professional experience.
      </CustomH1>
      <CustomDiv>
        About to add experience
        {
          experience.map(experience => <MyExperienceCard myExp={experience}></MyExperienceCard>)
        }
      </CustomDiv>
    </Layout>
  )
}
