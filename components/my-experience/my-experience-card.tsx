import myExperienceStyles from './my-experience-card.module.css';

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
        <div className={myExperienceStyles.experienceCard}>
          <div className={myExperienceStyles.experienceRole}>{role}</div>
          <div className={myExperienceStyles.experienceCompany}>{company}</div>
          <div className={myExperienceStyles.experienceMonth}>{startMonth} - {endMonth}</div>
          <div className={myExperienceStyles.experienceDuration}>{duration}</div>
          <div className={myExperienceStyles.experienceResponsibilties}>{responsibilities.map(responsibility => <div> - {responsibility}</div>)}</div>     
        </div>
    </>
  );
}