import styles from '../styles/custom-h1.module.css';

type CustomH1Props= {
  className: string;
  children: React.ReactNode;
}

export default function CustomH1(CustomH1Props: CustomH1Props) {
  return (
    <>
      <div className={styles.h1ThemedTag}>&lt;h1&gt;</div>
      <h1 className={styles.h1ThemedContent}>{CustomH1Props.children}</h1>
      <div className={styles.h1ThemedTag}>&lt;\h1&gt;</div>
    </>
  );
}