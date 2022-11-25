import CustomH1 from '../custom-h1/custom-h1'
import divThemedStyles from '../../styles/custom-div.module.css'
import myCertificationsStyles from './my-certifications.module.css'
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
    <div className={myCertificationsStyles.certificationsWrapper}>
      <CustomH1>
        My Certification(s)
      </CustomH1>
      
      <div className={divThemedStyles.divThemedTag}>&lt;div&gt;</div>
      <div className={myCertificationsStyles.certificationContainer}>
        {
          myCerts.map(myCert => <MyCertificationsCard myCert={myCert}></MyCertificationsCard>)
        }
      </div>
      <div className={divThemedStyles.divThemedTag}>&lt;\div&gt;</div>
    </div>
  );
}