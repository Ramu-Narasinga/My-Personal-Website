import myExperienceCardStyles from './my-experience-card.module.css';

type MyExperienceCard = {
  role: string,
  company: string,
  startMonth: string,
  endMonth: string,
  duration: string,
  responsibilities: string[]
}

type MyExperienceCardProps = {
  myExp: MyExperienceCard;
}

export default function MyExperienceCard(myExperienceCardProps: MyExperienceCardProps) {

  const {
    myExp
  } = myExperienceCardProps;

  const {
    role,
    company,
    startMonth,
    endMonth,
    duration,
    responsibilities
  } = myExp

  return (
    <>
      <div className={myExperienceCardStyles.experienceTimelineDot}>.</div>
      <div className={myExperienceCardStyles.experienceCard}>
        <div className={myExperienceCardStyles.experienceRole}>{role}</div>
        <div className={myExperienceCardStyles.experienceCompany}>{company}</div>
        <div className={myExperienceCardStyles.experienceMonth}>{startMonth} - {endMonth}</div>
        <div className={myExperienceCardStyles.experienceDuration}>{duration}</div>
        <div className={myExperienceCardStyles.experienceResponsibilties}>{responsibilities.map(responsibility => <div> - {responsibility}</div>)}</div>
      </div>
    </>
  );
}