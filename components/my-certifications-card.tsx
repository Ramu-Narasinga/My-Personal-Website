import mySkillsStyles from '../styles/my-skills.module.css'

type MyCertification = {
  title: String;
  caption: String;
}

type MyCertificationsCard = {
  title: String;
  certification: MyCertification;
}

type MyCertificationsCardProps = {
  myCert: MyCertificationsCard;
}

export default function MyCertificationsCard(myCertificationsCardProps: MyCertificationsCardProps) {
  
  const {
    myCert
  } = myCertificationsCardProps;

  const {
    title,
    certification
  } = myCert

  return (
    <>      
        <div className={mySkillsStyles.skillCard}>
          <div className={mySkillsStyles.skillTitle}>{title}</div>
          <div className={mySkillsStyles.skill}>{certification.title}</div>          
          <div className={mySkillsStyles.skill}>{certification.caption}</div>          
        </div>
    </>
  );
}