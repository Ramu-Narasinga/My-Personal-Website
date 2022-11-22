import styles from '../styles/custom-para.module.css'
import CustomH1 from '../components/custom-h1'
import divThemedStyles from '../styles/custom-div.module.css'
import MySkillsCard from '../components/my-skills-card'
import mySkillsStyles from '../styles/my-skills.module.css'

export default function MySkillsContainer() {

  const mySkills = [{
    title: 'Programming',
    skills: [
      'Javascript',
      'Typescript',
      'NodeJs'
    ]
  }, {
    title: 'Web Frameworks',
    skills: [
      'ExpressJs',
      'Jquery',
      'Angular',
      'HTML'
    ]
  }, {
    title: 'UI',
    skills: [
      'SASS',
      'Material Design',
      'Bootstrap'
    ]
  }, {
    title: 'Libraries',
    skills: [
      'ReactJs',
      'Prisma'
    ]
  }, {
    title: 'Version Control Tools',
    skills: [
      'Git'
    ]
  }]

  return (
    <div className={mySkillsStyles.skillsWrapper}>
    <CustomH1 className={styles.title}>
        My Skills
      </CustomH1>
      
      <div className={divThemedStyles.divThemedTag}>&lt;div&gt;</div>
      <div className={mySkillsStyles.skillsContainer}>
        {
          mySkills.map(mySkill => <MySkillsCard mySkill={mySkill}></MySkillsCard>)
        }
      </div>
      <div className={divThemedStyles.divThemedTag}>&lt;\div&gt;</div>
    </div>
  );
}