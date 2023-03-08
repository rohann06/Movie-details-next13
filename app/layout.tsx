import './globals.css'
import { Montserrat } from "@next/font/google";
import Nav from './components/Nav';

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={` lg:mx-28 mx-10 my-10 ${montserrat.className}`}>
         <Nav/>
        {children}
        </body>
    </html>
  )
}
