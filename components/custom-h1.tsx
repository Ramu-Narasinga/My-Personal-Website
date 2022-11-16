type CustomH1Props= {
  className: string;
  children: React.ReactNode;
}

export default function CustomH1(CustomH1Props: CustomH1Props) {
  return (
    <>
      <div className="h1ThemedTag">&lt;h1&gt;</div>
      <h1 className="h1ThemedContent">{CustomH1Props.children}</h1>
      <div className="h1ThemedTag">&lt;\h1&gt;</div>
    </>
  );
}