import myCertificationsStyles from './my-certifications.module.css'

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
        <div className={myCertificationsStyles.certificationCard}>
          <div className={myCertificationsStyles.certificationTitle}>{title}</div>
          <div className={myCertificationsStyles.certification}>{certification.title}</div>          
          <div className={myCertificationsStyles.certification}>{certification.caption}</div>          
        </div>
    </>
  );
}