import CustomH1 from '../themed-tags/custom-h1/custom-h1'
import divThemedStyles from '../themed-tags/custom-div/custom-div.module.css'
import MySkillsCard from './my-skills-card'
import mySkillsStyles from './my-skills.module.css'

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
      <CustomH1>
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