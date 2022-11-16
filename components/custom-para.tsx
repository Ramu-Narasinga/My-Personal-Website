type CustomPProps= {
  className: string;
  children: React.ReactNode;
}

export default function CustomPara(CustomPProps: CustomPProps) {
  return (
    <>
      <div className="pThemedTag">&lt;p&gt;</div>
        <p className="pThemedContent">{CustomPProps.children}</p>
      <div className="pThemedTag">&lt;\p&gt;</div>
    </>
  );
}