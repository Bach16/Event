import Footer from "./components/sections/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` bg-[#f2f2f2]`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
