import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";

const hindi_siliguri = Hind_Siliguri({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});


export const metadata = {
  title: "বাজার দর",
  description: "বাজার দর",
};

export default function RootLayout({ children }) {
  
  return (
    <html
      lang="en"
      className={`${hindi_siliguri.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">
        <Navbar/>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
