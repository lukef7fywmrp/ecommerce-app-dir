import Header from "@/components/Header";
import { Montserrat } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// If loading a variable font, you don't need to specify the font weight >>> https://fonts.google.com/variablefonts
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
