import CustomH1 from '../components/themed-tags/custom-h1/custom-h1'
import Layout from '../components/layout/layout'
import CustomPara from '../components/themed-tags/custom-para/custom-para'

import styles from '../styles/Home.module.css'
import aboutStyles from '../styles/about.module.css'

export default function About() {
  return (
    <Layout>
        <CustomH1>
          About me
        </CustomH1>
        <CustomPara className={styles.description}>
          <div>Passionate developer with experience in MEAN stack, Angular, ReactJS.  "learn by doing" is my approach. "Learn, unLearn, reLearn", "Abstract away that repeats itself",  "Patience to figure out and debug" are my coding principles.</div>
          
          <div className={aboutStyles.aboutMePara}>Huge fan of basketball, explore the productivity tools (mindmapping is my favorite).Interested in frontend technologies and working on amazing projects with positive people.</div>
          
          <div className={aboutStyles.aboutMePara}>Let’s build something awesome.</div>
        </CustomPara>
    </Layout>
  )
}
