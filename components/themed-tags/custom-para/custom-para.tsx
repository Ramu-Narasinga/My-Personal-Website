import styles from '../styles/custom-para.module.css'

type CustomPProps= {
  className: string;
  children: React.ReactNode;
}

export default function CustomPara(CustomPProps: CustomPProps) {
  return (
    <>
      <div className={styles.pThemedTag}>&lt;p&gt;</div>
        <p className={styles.pThemedContent}>{CustomPProps.children}</p>
      <div className={styles.pThemedTag}>&lt;\p&gt;</div>
    </>
  );
}