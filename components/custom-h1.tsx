interface CustomH1Props {
  className: string;
  children: React.ReactNode;
}

export default function CustomH1(CustomH1Props: CustomH1Props) {
  return (
    <h1>
      &lt;h1&gt;
      {CustomH1Props.children}
      &lt;\h1&gt;
    </h1>
  );
}