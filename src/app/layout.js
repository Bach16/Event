import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` bg-[#f2f2f2]`}>
        {children}        
      </body>
    </html>
  );
}
