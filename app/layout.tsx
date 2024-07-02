import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import GA from "@/components/GA";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pornkamon",
  metadataBase: new URL("https://www.pornkamonpkm.online/"),
  description:
    "I am a UX/UI Designer with a strong focus on web development. Currently working as a Freelance UX/UI Designer at Insightrix Communities, I specialize in coordinating designs for sprint planning meetings and leading large-scale redesign projects. With knowledge in front-end development and CSS, I create user-friendly designs while transitioning from Angular to React. Additionally, I have built design systems for improved consistency. As a self-employed designer, I have honed my skills in Adobe XD, Figma, and WordPress, delivering intuitive interfaces and visually compelling assets. My passion lies in creating exceptional user experiences, conducting research, and performing usability testing for optimal results. designs.",
  openGraph: {
    images: "../public/opengraph-image.png",
    type: "website",
    url: "https://www.pornkamonpkm.online/",
    title: "Pornkamon",
    description:
      "I am a UX/UI Designer with a strong focus on web development. Currently working as a Freelance UX/UI Designer at Insightrix Communities, I specialize in coordinating designs for sprint planning meetings and leading large-scale redesign projects. With knowledge in front-end development and CSS, I create user-friendly designs while transitioning from Angular to React. Additionally, I have built design systems for improved consistency. As a self-employed designer, I have honed my skills in Adobe XD, Figma, and WordPress, delivering intuitive interfaces and visually compelling assets. My passion lies in creating exceptional user experiences, conducting research, and performing usability testing for optimal results. designs.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <GA />
    </html>
  );
}
