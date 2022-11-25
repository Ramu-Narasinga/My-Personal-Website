import mySkillsStyles from './my-skills.module.css'
import { MySkillCard } from './my-skills-card-types'

type MySkillsCardProps = {
  mySkill: MySkillCard;
}

export default function MySkillsCard(mySkillsCardProps: MySkillsCardProps) {
  
  const {
    mySkill
  } = mySkillsCardProps;

  const {
    title,
    skills
  } = mySkill

  return (
    <>
    {/* ToDO: change pthemed tag specific to myskills card */}
      
        <div className={mySkillsStyles.skillCard}>
          <div className={mySkillsStyles.skillTitle}>{title}</div>
          {
            skills.map(skill => <div className={mySkillsStyles.skill}>{skill}</div>)
          }
        </div>
    </>
  );
}