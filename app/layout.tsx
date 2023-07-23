import "./globals.css";
import "@code-hike/mdx/dist/index.css";
import { Analytics } from "@vercel/analytics/react";
import { Inter, Roboto_Mono, Lexend_Deca } from "next/font/google";
import PageWrapper from "@/components/PageWrapper";

const lexend = Lexend_Deca({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export const metadata = {
  title: "Ramu Narasinga | Software Engineer",
  description:
    "I have 4+ years of experience as a front-end developer with a proven track record of delivering high-quality projects that meet and exceed project expectations. With extensive expertise in Angular, Javascript, React, Redux, Cypress, Jest, NodeJs, I am a quick learner and possess strong problem-solving skills, which enable me to visualize complex information in simple and intuitive ways. ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${roboto_mono.variable} ${lexend.variable} container max-w-5xl `}
      >
        <PageWrapper>{children}</PageWrapper>
        <Analytics />
      </body>
    </html>
  );
}
