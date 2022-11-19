import styles from '../styles/custom-para.module.css'
import CustomH1 from '../components/custom-h1'
import divThemedStyles from '../styles/custom-div.module.css'
import mySkillsStyles from '../styles/my-skills.module.css'
import MyCertificationsCard from './my-certifications-card'

export default function MyCertificationsContainer() {

  const myCerts = [{
    title: 'Amazon Web Services',
    certification: {
      title: 'Certified Developer Associate',
      caption: 'Currently doing the training, hopefully by end of January, ,should be certified'
    }
  }];

  return (
    <>
    <CustomH1 className={styles.title}>
        My Certification(s)
      </CustomH1>
      
      <div className={divThemedStyles.divThemedTag}>&lt;div&gt;</div>
      <div className={mySkillsStyles.skillsContainer}>
        {
          myCerts.map(myCert => <MyCertificationsCard myCert={myCert}></MyCertificationsCard>)
        }
      </div>
      <div className={divThemedStyles.divThemedTag}>&lt;\div&gt;</div>
    </>
  );
}