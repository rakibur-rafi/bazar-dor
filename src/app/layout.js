import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";

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
      <body className="min-h-full flex flex-col bg-[#f0f5f0] text-black">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
        <Navbar/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
