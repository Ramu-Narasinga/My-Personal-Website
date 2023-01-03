import divThemedStyles from './custom-div.module.css'

type CustomDivProps= {
  children: React.ReactNode;
}

export default function CustomDiv(CustomDivProps: CustomDivProps) {
  return (
    <>
      <div className={divThemedStyles.divThemedTag}>&lt;div&gt;</div>
        {CustomDivProps.children}
      <div className={divThemedStyles.divThemedTag}>&lt;\div&gt;</div>
    </>
  );
}